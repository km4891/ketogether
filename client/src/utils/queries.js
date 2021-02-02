import gql from 'graphql-tag';

export const QUERY_RECIPES = gql`
  query getRecipe($category: ID) {
    recipes(category: $category) {
      _id
      name
      ingredients
      instructions
      image
      category {
        _id
      }
      like
    }
  }
`;

export const QUERY_ALL_RECIPES = gql`
  {
    recipes(category: $category) {
      _id
      name
      ingredients
      instructions
      image
      category {
        _id
      }
      like
    }
`;

export const QUERY_CATEGORIES = gql`
{
  categories {
    _id
    name
  }
}
`;

export const QUERY_USER = gql`
{
  user {
    firstName
    lastName
    recipes {
        _id
      name
      ingredient
      instructions
      image
      category {
        _id
      }
      like
      }
    }
  }
}
`;