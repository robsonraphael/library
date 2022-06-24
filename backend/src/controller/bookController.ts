import { prisma } from "../database";
import { Request, Response } from "express";

// Create Book
export const bookController = async (req: Request, res: Response) => {
  const { title, author, publisher }: any = req.body;
  if (!!title && !!author && !!publisher) {
    const book: any = await prisma.book
      .create({
        data: {
          title,
          author,
          publisher,
        },
      })
      .then((user) => {
        res.json(user).status(205).end();
      })
      .catch((err) => {
        res.json(err).status(405).end();
      });
  } else {
    res.status(405).json("Warning, has blank fields").end();
  }
};

// Find All
export const getAllBooks = async (req: Request, res: Response) => {
  const books = await prisma.book
    .findMany({})
    .then((books) => {
      res.json(books).status(206).end();
    })
    .catch((err) => {
      res.status(406).json(err).end();
    });
};

// Find by ID
export const getBook = async (req: Request, res: Response) => {
  const { id } : any = req.params;
  const book : any = await prisma.book
    .findUnique({
      where: {
        id,
      },
      select: {
        id: true,
        title: true,
        author: true,
        publisher: true,
        boxes: true,
      },
    })
    .then((book) => {
      if(book === null || book === undefined){
        res.status(407).json("Error, Book not found").end();
      }
      res.json(book).status(207).end();
    })
    .catch((err) => {
      console.log('Bug')
      res.status(407).json("Error, Book not found").end();
    });
};

// Update
export const updateBook = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { title, author, publisher }: any = req.body;

  if (!!title && !!author && !!publisher) {
    const book = await prisma.book
      .update({
        where: {
          id,
        },
        data: {
          title,
          author,
          publisher,
        },
      })
      .then((book) => {
        res.json(book).status(208).end();
      })
      .catch((err) => {
        res.status(408).json("Error, Book not found").end();
      });
  } else {
    res.status(408).json("Error, params invalid").end();
  }
};

// Delete Book
export const deleteBook = async (req: Request, res: Response) => {
  const { id } = req.params;
  const book = await prisma.book
    .delete({
      where: {
        id,
      },
    })
    .then((book) => {
      res.json(book).status(209).end();
    })
    .catch((err) => {
      res.status(409).json("Error, Book not found").end();
    });
};
