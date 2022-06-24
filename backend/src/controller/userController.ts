import { prisma } from "../database";
import { Request, Response } from "express";
import { passwordValidator, nameValidator } from "../validation";

// Create User
export const userController = async (req: Request, res: Response) => {
  const { name, password }: any = req.body;

  if (
    !!nameValidator.validate(name) &&
    !!passwordValidator.validate(password)
  ) {
    const user: any = await prisma.user
      .create({
        data: {
          name,
          password,
        },
      })
      .then((user) => {
        res.json(user).status(200).end();
      })
      .catch((err) => {
        res.status(400).json(err).end();
      });
  } else {
    res.status(400).json("Error, name or password invalid !").end();
  }
};
// Find by ID
export const getUser = async (req: Request, res: Response) => {
  const { id }: any = req.params;
  const user: any = await prisma.user
    .findUnique({
      where: {
        id,
      },
      select: {
        id: true,
        createAt: true,
        name: true,
        password: true,
        boxes: true,
      },
    })
    .then((user) => {
      res.json(user).status(201).end();
    })
    .catch((err) => {
      res.status(401).json("Error, user not found").end();
    });
};
// Find All
export const getAllUsers = async (req: Request, res: Response) => {
  const allUsers: any = await prisma.user
    .findMany({
      select: {
        id: true,
        name: true,
        boxes: true,
      },
    })
    .then((users) => {
      res.json(users).status(202).end();
    })
    .catch((err) => {
      res.status(402).json(err).end();
    });
};
// Update
export const updateUser = async (req: Request, res: Response) => {
  const { id }: any = req.params;
  const { name, password }: any = req.body;

  if (
    !!nameValidator.validate(name) &&
    !!passwordValidator.validate(password)
  ) {
    const user: any = await prisma.user
      .update({
        where: {
          id,
        },
        data: {
          name,
          password,
        },
      })
      .then((user) => {
        res.json(user).status(203).end();
      })
      .catch((err) => {
        res.status(403).json("Error, User not found").end();
      });
  } else {
    res.status(301).json("Error, Name or Password invalid !");
  }
};
// Delete
export const deleteUser = async (req: Request, res: Response) => {
  const { id }: any = req.params;

  const user: any = await prisma.user
    .delete({
      where: {
        id,
      },
    })
    .then((user) => {
      res.json(user).status(204).end();
    })
    .catch((err) => {
      res.status(404).json("Error, User not found").end();
    });
};
