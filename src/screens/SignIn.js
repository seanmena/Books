// import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
// import { auth } from "../../firebase";
import { useUserAuth } from "../components/UserAuthContext";
import "./SignForm.css";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // eslint-disable-next-line
  const [error, setError] = useState("");
  const { logIn } = useUserAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await logIn(email, password);
      navigate("/search");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="sign-hero">
      <div className="sign-container">
        <form onSubmit={handleSubmit}>
          <h1 className="sign-title">Log In</h1>
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
            Log In
          </button>
          <p className="small-txt">
            Don't have an Acount? <a href="/signup">Sign Up</a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
