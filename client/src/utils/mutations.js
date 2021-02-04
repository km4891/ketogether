import gql from 'graphql-tag';

export const LOGIN = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($firstName: String!, $lastName: String!, $email: String!, $password: String!) {
    addUser(firstName: $firstName, lastName: $lastName, email: $email, password: $password) {
      token
      user {
        _id
      }
    }
  }
`;

export const ADD_RECIPE = gql`
  mutation addRecipe(
  $name: String!,
  $ingredients: String!,
  $instructions: String!,
  $image: String!,
  $category: ID!,
  $like: Int!
) {
  addRecipe(
    name: $name,
    ingredients: $ingredients,
    instructions: $instructions,
    image: $image,
    category: $category,
    like: $like
  ) {
        _id
         firstName
    lastName
    email
    recipes{
      _id
    }
  }
}
`;