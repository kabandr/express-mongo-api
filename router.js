const express = require("express");
const router = express.Router();
const {
  addBook,
  getAllBooks,
  getBook,
  updateBook,
  removeBook,
} = require("./controllers/bookController");

router.post("/books", addBook);
router.get("/books", getAllBooks);
router.get("/books/:id", getBook);
router.put("/books/:id", updateBook);
router.delete("/books/:id", removeBook);

module.exports = router;
