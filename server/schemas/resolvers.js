const { AuthenticationError } = require('apollo-server-express');
const { User, Category, Recipe } = require('../models');
const { signToken } = require('../utils/auth');
// const stripe = require('stripe')('sk_test_4eC39HqLyjWDarjtT1zdp7dc');

const resolvers = {
    Query: {
      // Category
      categories: async () => {
        return await Category.find();
      },
    // Recipes
      recipes: async (parent, { category, name }) => {
        const params = {};
  
        if (category) {
          params.category = category;
        }
  
        if (name) {
          params.name = {
            $regex: name
          };
        }
  
        return await Product.find(params).populate('category');
      },
      recipe: async (parent, { _id }) => {
        return await Recipe.findById(_id).populate('category');
      },

      user: async (parent, args, context) => {
        if (context.user) {
          const user = await User.findById(context.user._id).populate({
            path: 'recipes',
            populate: 'category'
          });
  
        //   user.orders.sort((a, b) => b.purchaseDate - a.purchaseDate);
  
          return user;
        }
  
        throw new AuthenticationError('Not logged in');
      },
     
    },
    Mutation: {
      addUser: async (parent, args) => {
        const user = await User.create(args);
        const token = signToken(user);
  
        return { token, user };
      },
    
      updateUser: async (parent, args, context) => {
        if (context.user) {
          return await User.findByIdAndUpdate(context.user._id, args, { new: true });
        }
  
        throw new AuthenticationError('Not logged in');
      },

      addRecipe: async (parent, { name, ingredients, instructions, image, category, like }, context) => {
        console.log(context, name);
        if (context.user) {
         
          const recipe = await Recipe.create({
            name, ingredients, instructions, image, category, like
           }) 
  
        const user =   await User.findByIdAndUpdate(context.user._id, { $push: { recipes: recipe._id } });
        console.log(user)
          return user;
        }
  
        throw new AuthenticationError('Not logged in');
      },

      updateRecipe: async (parent, { _id }) => {
        // const decrement = Math.abs(quantity) * -1;
  
        return await Recipe.findByIdAndUpdate(_id, { new: true });
      },
    
      login: async (parent, { email, password }) => {
        const user = await User.findOne({ email });
  
        if (!user) {
          throw new AuthenticationError('Incorrect credentials');
        }
  
        const correctPw = await user.isCorrectPassword(password);
  
        if (!correctPw) {
          throw new AuthenticationError('Incorrect credentials');
        }
  
        const token = signToken(user);
  
        return { token, user };
      }
    }
  };
  
  module.exports = resolvers;
  