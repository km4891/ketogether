import React from "react";
import CategoryMenu from "../components/CategoryMenu";
import UserDashboard from "../components/UserDashboard";
import Donate from "../components/Donate"

const Home = () => {
  return (
    <div className="container">
      <CategoryMenu />
      <UserDashboard />
      <Donate />
    </div>
  );
};

export default Home;
