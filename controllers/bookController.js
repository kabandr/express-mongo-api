const Book = require("../models/bookModel");

const addBook = async (req, res, next) => {
  try {
    const addedBook = await new Book(req.body).save();
    res.status(201).json(addedBook);
  } catch (error) {
    next(error);
  }
};

const getAllBooks = async (req, res, next) => {
  try {
    const books = await Book.find();
    res.status(200).json(books);
  } catch (error) {
    next(error);
  }
};

const getBook = async (req, res, next) => {
  try {
    const book = await Book.findById(req.params.id);
    res.status(200).json(book);
  } catch (error) {
    next(error);
  }
};

const updateBook = async (req, res, next) => {
  try {
      const updatedBook = await Book.findByIdAndUpdate(req.params.id, {$set: req.body}, {new: true});
      res.status(201).json(updatedBook);
  } catch (error) {
      next(error);
  }
};

const removeBook = async (req, res, next) => {
  try {
    await Book.findByIdAndDelete(req.params.id);
    res.status(200).json("Book has been deleted.");
  } catch (error) {
    next(error);
  }
};

module.exports = { addBook, getAllBooks, getBook, updateBook, removeBook };
