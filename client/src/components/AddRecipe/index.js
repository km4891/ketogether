import React, { useState } from "react";
import Alert from "../Alert";
import Axios from "axios";

function AddRecipe() {
  const [query, setQuery] = useState("");
  const [ingredients, setIngredients] = useState([]);
  const [alert, setAlert] = useState("");


  const APP_KEY = "fd2627a2d8df43a0ab8c34b0e9e9fa33";

  const url = `https://api.spoonacular.com/food/ingredients/search?query=${query}&apiKey=${APP_KEY}`;

  const getData = async () => {
    console.log('line 16');
    console.log("this is 17", query );
    // if (query) {
        const result = await Axios.get(url);
      // if (!result.data.more) {
        // return setAlert("No food with such name");
      // } 
      console.log("inside of get data");
      console.log(result);
      setIngredients(result.data.hits);
      setQuery("");
      setAlert("");
    // } else {
    //   setAlert("Please fill the form");
    //  }
  };

  const onChange = e => { setQuery(e.target.value)
   console.log(e.target.value)
  };

  const onSubmit = e => {
    e.preventDefault();
    console.log("this is the query", query);
    getData();
  };

  return (
    <div className="App">
      <h1>Food Searching App</h1>
      <form onSubmit={onSubmit} className="search-form">
        {alert !== "" && <Alert alert={alert} />}
        <input
          type="text"
          name="query"
          onChange={onChange}
          value={query}
          autoComplete="off"
          placeholder="Search Food"
        />
        <input type="submit" value="Search" />
      </form>
      <div className="ingredients">
        {/* {ingredients !== [] &&
          ingredients.map(ingredients => <Recipe key={uuidv4()} recipe={recipe} />)} */}
      </div>
    </div>
  );
}

export default AddRecipe;