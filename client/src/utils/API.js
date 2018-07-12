import axios from "axios";

export default {
  // Gets all books
  getBooks: function() {
    return axios.get("/api/books");
  },
  // Gets the book with the given id
  getBook: function(id) {
    return axios.get("/api/books/" + id);
  },
  // Deletes the book with the given id
  deleteBook: function(id) {
    return axios.delete("/api/books/" + id);
  },
   // Saves a book to the database
   saveBook: function(bookData) {
    return axios.post("/api/books", bookData);
  },
  // Gets all ingredients
  getIngredients: function() {
    return axios.get("/api/ingredients");
  },
  // Gets the ingredient with the given id
  getIngredient: function(id) {
    return axios.get("/api/ingredients/" + id);
  },
  // Deletes the ingredient with the given id
  deleteIngredient: function(id) {
    return axios.delete("/api/ingredients/" + id);
  },
  // Saves a ingredient to the database
  saveIngredient: function(ingredientData) {
    return axios.post("/api/ingredients", ingredientData);
},



};
