const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Category {
    _id: ID
    name: String
  }

  type Recipe {
    _id: ID
    name: String
    ingredients: String
    instructions: String
    image: String
    category: ID
    like: Int
  }

  type User {
    _id: ID
    firstName: String
    lastName: String
    email: String
    recipes: [Recipe]
  }

  type Auth {
    token: ID
    user: User
  }

  type Query {
    categories: [Category]
    user: User
    recipes(category:ID, name: String): [Recipe] 
    recipe(_id: ID!): Recipe
  }

  type Mutation {
    addUser(firstName: String!, lastName: String!, email: String!, password: String!): Auth
    updateUser(firstName: String, lastName: String, email: String, password: String): User
    login(email: String!, password: String!): Auth
    updateRecipe(_id: ID!, like: Int!): Recipe
    addRecipe(name: String!, ingredients: String!, instructions: String!, image: String!, category: ID!, like: Int!): Recipe
    addLike(likeId: ID!, likeBody: String!): Recipe
  }
`;

module.exports = typeDefs;
