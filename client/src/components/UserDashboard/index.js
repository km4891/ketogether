import React, { useEffect } from "react";
import { UPDATE_RECIPES } from "../../utils/actions";
import { useQuery } from '@apollo/react-hooks';
import { QUERY_RECIPES } from "../../utils/queries";
import { idbPromise } from "../../utils/helpers";
import spinner from "../../assets/spinner.gif"
import { useSelector, useDispatch } from "react-redux";
import Recipe from "../AddRecipe"


function RecipeList() {

  const state = useSelector(state => state)
  const dispatch = useDispatch()

  const { currentCategory } = state;

  const { loading, data } = useQuery(QUERY_RECIPES);

  useEffect(() => {
    if(data) {
      dispatch({
           type: UPDATE_RECIPES,
           recipes: data.recipes
        });
        data.recipes.forEach((recipe) => {
          idbPromise('recipes', 'put', recipe);
        });
    } else if (!loading) {
      idbPromise('recipes', 'get').then((recipes) => {
        dispatch({
          type: UPDATE_RECIPES,
          recipes: recipes
       });
      });
    }
  }, [data, loading, dispatch]);

  function filterRecipes() {
    if (!currentCategory) {
      return state.recipes;
    }

    return state.recipes.filter(recipe => recipe.category._id === currentCategory);
  }

  return (
    <div className="my-2">
      <h2 className="recipes">Recipes..</h2>
      {console.log(state.recipes)}
      {state.recipes.length ? (
        <div className="flex-row">
            {filterRecipes().map(recipe => (
                <Recipe
                  key= {recipe._id}
                  _id={recipe._id}
                  category={recipe.category}
                  image={recipe.image}
                  name={recipe.name}
                  ingredients={recipe.ingredients}
                  instructions={recipe.instructions}
                  like={recipe.like}
                />
            ))}
        </div>
      ) : (
        <h3>You haven't added any recipes yet!</h3>
      )}
      { loading ? 
      <img src={spinner} alt="loading" />: null}
    </div>
  );
}

export default RecipeList;
