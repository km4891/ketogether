const mongoose = require('mongoose');

const { Schema } = mongoose;

const recipeSchema = new Schema({
  name: {
    type: String,
     
  },
  ingredients: {
    type: String
  },
  instructions: {
    type: String
  },
  image: {
    type: String
  },
  category: {
    type: Schema.Types.ObjectId,
    ref: 'Category',
    required: true,
  },
  like: {
      type: Number
  }
});

const Recipe = mongoose.model('Recipe', recipeSchema);

module.exports = Recipe;
