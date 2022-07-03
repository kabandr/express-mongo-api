const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Book schema
const bookSchema = new Schema({
  author: String,
  title: String,
  isbn: String,
  publication_date: Date,
});

// Book model
const Book = mongoose.model("Book", bookSchema);

module.exports = Book;