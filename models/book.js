const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema({
  recipeName: String,
  author: String,
  url: String,
  synopsis: String,
  date: { type: Date, default: Date.now }
});

const Book = mongoose.model("Recipe", bookSchema);

module.exports = Book;
