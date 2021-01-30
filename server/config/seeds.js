const db = require('./connection');
const { User, Category, Recipe } = require('../models');

db.once('open', async () => {
  await Category.deleteMany();

  const categories = await Category.insertMany([
    { name: 'Breakfast' },
    { name: 'Lunch' },
    { name: 'Dinner' },
    { name: 'Snacks' },
    { name: 'Dessert' }
  ]);

  console.log('categories seeded');

  await Recipes.deleteMany();

  const recipes = await Recipe.insertMany([
    {
      name: 'Chicken Spinach',
      ingredient: [],
      instructions:
        'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
      image: 'stuffed-chicken-breasts.jpg',
      category: categories[2]._id,
      like: []
    }
  ]);

  console.log('recipes seeded');

  await User.deleteMany();

  await User.create({
    firstName: 'Pamela',
    lastName: 'Washington',
    email: 'pamela@testmail.com',
    password: 'password12345',
    recipes: [
      {
        recipes: [recipes[0]._id, recipes[0]._id, recipes[1]._id]
      }
    ]
  });

  await User.create({
    firstName: 'Elijah',
    lastName: 'Holt',
    email: 'eholt@testmail.com',
    password: 'password12345'
  });

  console.log('users seeded');

  process.exit();
});
