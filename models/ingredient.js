var mongoose = require("mongoose");

// Save a reference to the Schema constructor
var Schema = mongoose.Schema;

// Using the Schema constructor, create a new NoteSchema object
// This is similar to a Sequelize model
var IngredientSchema = new Schema({
  // `name` is of type String
  name: String,
  // `ingredient type` is of type String
  ingredientType: String
});

// This creates our model from the above schema, using mongoose's model method
var Ingredient = mongoose.model("Ingredient", IngredientSchema);

// Export the Note model
module.exports = Ingredient;