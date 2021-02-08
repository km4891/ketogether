import React from "react";
import { Link } from "react-router-dom";
import { pluralize } from "../../utils/helpers"
import { idbPromise } from "../../utils/helpers";
import { useSelector, useDispatch } from "react-redux";
import { RecipeForm } from "../../pages/RecipeForm";


function RecipeItem(recipe) {
  
  const state = useSelector(state => state)
  const dispatch = useDispatch()

  const {
    _id,
    name,
    category,
    image,
    ingredients,
    instructions,
    like
  } = recipe;





  return (
    <div className="card px-1 py-1">
        <h1>Card 1</h1>
    
    </div>
  );
}

export default RecipeItem;
