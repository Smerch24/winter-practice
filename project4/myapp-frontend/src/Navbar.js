import React from "react";
import { Link } from "react-router-dom";
import "./App.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/" className="logo">
        UntitledUI
      </Link>
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/categories">Categories</Link>
      </div>
      <div className="auth-buttons">
        <button className="login">Login</button>
        <button className="signup">Sign up</button>
      </div>
    </nav>
  );
};

export default Navbar;
