import React from "react";
import Auth from "../../utils/auth";
import { Link } from "react-router-dom";
import { Container } from 'semantic-ui-react'

function Nav() {
  function showNavigation() {
    if (Auth.loggedIn()) {
      return (
        <ul className="flex-row">
          <li className="mx-1 nav-btn child">
            <Link to="/userDashboard">
              Dashboard
            </Link>
          </li>
          <li className="mx-1 nav-btn child">
            <Link to="/recipeForm">
              Create a Recipe  
            </Link>
          </li>
          <li className="mx-1 nav-btn child">
            {/* this is not using the Link component to logout or user and then refresh the application to the start */}
            <a href="/" onClick={() => Auth.logout()}>
              Logout
            </a>
          </li>
        </ul>
      );
    } else {
      return (
        <ul className="flex-row header-links">
          <li className="mx-1 nav-btn child child-1">
            <Link to="/signup">
              Signup
            </Link>
          </li>
          <li className="mx-1 nav-btn child child-2">
            <Link to="/login">
              Login
            </Link>
          </li>
        </ul>
      );
    }
  }

  return (
    <header className="flex-row px-1">
      <Container textAlign='center'>
        <h1 className="title">
          <Link to="/" className="keto">
              <span role="img" aria-label=""></span>
              KETOgether
          </Link>
        </h1>
      </Container>

      <nav className="parent">
        {showNavigation()}
      </nav>
    </header>
  );
}

export default Nav;
