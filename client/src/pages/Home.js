import React from "react";
import CategoryMenu from "../components/CategoryMenu";
import RecipeList from "../components/RecipeList";
import AddRecipe from "../components/AddRecipe";
import Dashboard from "./Dashboard";

const Home = () => {
  return (
    <div className="container">
      <CategoryMenu />
      <RecipeList />
    </div>
  );
};

export default Home;
