import React, { useState } from "react";
import LogOut from "./LogOut";
// import LogOut from "./LogOut";
import "./NavBar.css";
import { useUserAuth } from "./UserAuthContext";
// import { useUserAuth } from "./UserAuthContext";
import { useNavigate } from "react-router-dom";

const NavBar = () => {
  const { user } = useUserAuth();

  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  const navigate = useNavigate();
  const signClick = () => {
    navigate("/signup");
  };

  if (user) {
    return (
      <div>
        <div className="nav-hero">
          <div
            className={click ? "hide-me" : "hamburger"}
            onClick={handleClick}
          >
            <div className="burger burger1" />
            <div className="burger burger2" />
            <div className="burger burger3" />
          </div>

          <div className={click ? "x-p" : "hide-me"} onClick={handleClick}>
            <div className="x x1" />
            <div className="x x2" />
          </div>

          <div id="nav-box" className={click ? "nav-menu active " : "navbar"}>
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
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <div>
          <div
            className={click ? "hide-me" : "hamburger"}
            onClick={handleClick}
          >
            <div className="burger burger1" />
            <div className="burger burger2" />
            <div className="burger burger3" />
          </div>

          <div className={click ? "x-p" : "hide-me"} onClick={handleClick}>
            <div className="x x1" />
            <div className="x x2" />
          </div>

          <div id="nav-box" className={click ? "nav-menu active " : "navbar"}>
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
              <button onClick={signClick} className="sign-up" href="/signup">
                Sign Up
              </button>
            </li>
          </div>
        </div>
      </div>
    );
  }
};

export default NavBar;
