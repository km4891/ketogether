import gql from 'graphql-tag';

export const QUERY_RECIPES = gql`
query {
  recipes {
    _id
    firstName
    lastName
    email
    recipes {
      _id
      name
      ingredients
      instructions
      image
      category
      like
    }
  }
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
`;