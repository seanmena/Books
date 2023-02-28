import React from "react";
import LogOut from "./LogOut";
// import LogOut from "./LogOut";
import "./NavBar.css";
import { useUserAuth } from "./UserAuthContext";
// import { useUserAuth } from "./UserAuthContext";

const NavBar = () => {
  const { user } = useUserAuth();

  if (user) {
    return (
      <div>
        <nav className="navbar">
          <li className="nav-item">
            <a href="/">Home</a>
          </li>
          <li className="nav-item">
            <a href="/search">Search</a>
          </li>
          <li className="nav-item">
            <a href="/mybooks">My Books</a>
          </li>
          <li className="nav-item">
            <LogOut />
          </li>
          <li className="nav-item">
            <button className="sign-up">Sign Up</button>
          </li>
        </nav>
      </div>
    );
  } else {
    return (
      <div>
        <nav className="navbar">
          <li className="nav-item">
            <a href="/">Home</a>
          </li>
          <li className="nav-item">
            <a href="/search">Search</a>
          </li>
          <li className="nav-item">
            <a href="/mybooks">My Books</a>
          </li>
          <li className="nav-item">
            <a className="log-in" href="/signin">
              Log In
            </a>
          </li>
          <li className="nav-item">
            <button className="sign-up">
              <a href="/signup">Sign Up</a>
            </button>
          </li>
        </nav>
      </div>
    );
  }
};

export default NavBar;
