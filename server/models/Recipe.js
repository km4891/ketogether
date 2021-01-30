const mongoose = require('mongoose');

const { Schema } = mongoose;

const recipeSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  ingredient: {
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
      type: []
  }
});

const Recipe = mongoose.model('Recipe', recipeSchema);

module.exports = Recipe;
