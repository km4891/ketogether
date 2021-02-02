import React from "react";
import CategoryMenu from "../components/CategoryMenu";
import UserDashboard from "../components/UserDashboard"

const Home = () => {
  return (
    <div className="container">
      <CategoryMenu />
      <UserDashboard />
    </div>
  );
};

export default Home;
