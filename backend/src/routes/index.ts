import { Router, Request, Response } from "express";
import { prisma } from "../database";

export const router = Router();

// Home Page
router.get("/", (req: Request, res: Response) => {
  res.status(200).json("Welcome to HomePage");
});

// Create User
router.post("/register", async (req: Request, res: Response) => {
  const { name, password } = req.body;

  if (!!name && !!password) {
    const user = prisma.user
      .create({
        data: {
          name,
          password,
        },
      })
      .then((user) => {
        return res.status(202).json(user);
      })
      .catch((err) => {
        return res.status(402).json(err);
      });
  } else {
    return res.status(402).json("Error, Name or Password is invalid !!");
  }
});

// Create Book
router.post("/add", async (req: Request, res: Response) => {
  const { title, author, publisher }: any = req.body;

  const isValid: boolean = (function () {
    if (!title || !author || !publisher) {
      return false;
    } else {
      return true;
    }
  })();

  const addBook = (async function () {
    if (!!isValid) {
      const book = prisma.book
        .create({
          data: {
            title,
            author,
            publisher,
          },
        })
        .then((book) => {
          return res.status(200).json(book);
        })
        .catch((err) => {
          return res.status(400).json(err);
        });
    } else {
      return res.status(400).json("Error, Dados inseridos são inválidos.");
    }
  })();
});

// View All Books
router.get("/table", async (req: Request, res: Response) => {
  const allBooks = prisma.book
    .findMany({
      select: {
        title: true,
        author: true,
        publisher: true,
      },
    })
    .then((table) => {
      return res.status(201).json(table);
    })
    .catch((err) => {
      return res.status(401).json(err);
    });
});

// View All Users
router.get("/users", async (req: Request, res: Response) => {
  const users = prisma.user
    .findMany({})
    .then((users) => {
      return res.status(203).json(users);
    })
    .catch((err) => {
      return res.status(403).json(err);
    });
});

// View Tables
router.get("/table", async (req: Request, res: Response) => {
  const table = prisma.boxe
    .findMany({})
    .then((table) => {
      return res.status(204).json(table);
    })
    .catch((err) => {
      return res.status(404).json(err);
    });
});
