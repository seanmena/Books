import React from "react";
import { useNavigate } from "react-router-dom";
import lady from "../assets/readinglady.png";
import "./Page.css";

const Page = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/signup");
  };

  return (
    <div className="flex-hero">
      <div className="page-hero">
        <div className="box-1">
          <h1 className="home-title">Welcome to Book Club</h1>
        </div>
        <div className="box-2">
          <h1 className="sub-title">Keep track of your favorite books.</h1>
          <button onClick={handleClick} className="get-started">
            SIGN UP
          </button>
        </div>

        <img className="lady" src={lady} alt="lady"></img>
      </div>
    </div>
  );
};

export default Page;
