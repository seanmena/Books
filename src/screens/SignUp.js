// import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
// import { auth } from "../firebase";
import { useUserAuth } from "../components/UserAuthContext";
import "./SignForm.css";

const SignUp = () => {
  const [email, setEmail] = useState("");
  // eslint-disable-next-line
  const [error, setError] = useState("");
  const [password, setPassword] = useState("");
  const { signUp } = useUserAuth();
  let navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await signUp(email, password);
      navigate("/search");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="sign-hero">
      <div className="sign-container">
        <form onSubmit={handleSubmit}>
          <h1 className="sign-title">Create Account</h1>
          <input
            className="bar"
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></input>
          <input
            className="bar"
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></input>
          <button className="sign-btn" type="submit">
            Sign Up
          </button>{" "}
          <p className="small-txt">
            Already have an Acount? <a href="/signin">Log In</a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
