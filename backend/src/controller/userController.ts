import { prisma } from "../database";
import { Request, Response } from "express";
import {
  passwordValidator,
  nameValidator,
  emailValidator,
} from "../validation";

// Create User
export const userController = async (req: Request, res: Response) => {
  const { name, email, password }: any = req.body;

  if (
    nameValidator.validate(name) &&
    passwordValidator.validate(password) &&
    emailValidator.validate(email)
  ) {
    const user = await prisma.user
      .create({
        data: {
          name,
          email,
          password,
        },
      })
      .then((user) => {
        res.json("👨🏾 User as been created !").status(200).end();
      })
      .catch((err) => {
        res.status(400).json(err).end();
      });
  } else {
    res.status(400).json("⚠️ Error, invalid field!").end();
  }
};
// Find by ID
export const getUser = async (req: Request, res: Response) => {
  const { id } = req.params;
  const user = await prisma.user
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
      res.status(401).json("⚠️ Error, user not found").end();
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
  const { name, email, password }: any = req.body;

  if (
    nameValidator.validate(name) &&
    passwordValidator.validate(password) &&
    emailValidator.validate(email)
  ) {
    const user: any = await prisma.user
      .update({
        where: {
          id,
        },
        data: {
          name,
          email,
          password,
        },
      })
      .then((user) => {
        res.json("👨🏾 User updated").status(203).end();
      })
      .catch((err) => {
        res.status(403).json("⚠️ Error, User not found").end();
      });
  } else {
    res.status(301).json("⚠️ Error, invalid fields !");
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
      res.status(404).json("⚠️ Error, User not found").end();
    });
};
