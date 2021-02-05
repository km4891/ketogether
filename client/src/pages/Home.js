import React from "react";
import CategoryMenu from "../components/CategoryMenu";
import RecipeList from "../components/UserDashboard";
import AddRecipe from "../components/AddRecipe";
import Dashboard from "./Dashboard";

const Home = () => {
  return (
    <div className="container">
      <CategoryMenu />
      <Dashboard />
      <AddRecipe />
    </div>
  );
};

export default Home;
