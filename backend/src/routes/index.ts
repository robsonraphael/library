//        User Services
import {
  userController,
  getUser,
  getAllUsers,
  updateUser,
  deleteUser,
} from "../controller/userController";

//        Book Services
import {
  bookController,
  getBook,
  getAllBooks,
  updateBook,
  deleteBook,
} from "../controller/bookController";

import { Router } from "express";
export const router = Router();

//          Section User

// Create (User)
router.post("/register", userController);

// Find All (User)
router.get("/user/all", getAllUsers);

// Find by ID (User)
router.get("/user/:id", getUser);

// Update (User)
router.put("/user/update/:id", updateUser);

// Delete (User)
router.delete("/user/delete/:id", deleteUser);

//            Section Book

// Create (Book)
router.post("/book/add", bookController);

// Find all (Book)
router.get("/book/search/all", getAllBooks);

// Find by ID (Book)
router.get("/book/search/:id", getBook);

// Update (Book)
router.put("/book/update/:id", updateBook);

// Delete (Book)
router.delete("/book/delete/:id", deleteBook);
