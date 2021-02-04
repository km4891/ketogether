import React from "react";
import CategoryMenu from "../components/CategoryMenu";
import RecipeList from "../components/UserDashboard";
import AddRecipe from "../components/AddRecipe";

const Home = () => {
  return (
    <div className="container">
      <CategoryMenu />
      <RecipeList />
      <AddRecipe />
    </div>
  );
};

export default Home;
