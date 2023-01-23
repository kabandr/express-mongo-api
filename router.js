const express = require("express");
const router = express.Router();
const { registerNewUser, logUserIn, logUserOut, updateUser, deleteUserAccount  } = require("./controllers/userController")
const {
  addBook,
  getAllBooks,
  getBook,
  updateBook,
  removeBook,
} = require("./controllers/bookController");

// Auth endpoints
router.post("/register", registerNewUser)
router.post("/login", logUserIn)
router.get("/logout", logUserOut)
router.post("/users/:username", updateUser)
router.post("/users/:username", deleteUserAccount)

// CRUD endpoints
router.post("/books", addBook);
router.get("/books", getAllBooks);
router.get("/books/:id", getBook);
router.put("/books/:id", updateBook);
router.delete("/books/:id", removeBook);

module.exports = router;
