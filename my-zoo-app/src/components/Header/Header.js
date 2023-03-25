import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

export const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light custom-nav">
      <div className="container">
        <Link className="nav-link rounded custom-logo" to="/" style={{ transition: "background-color 0.2s ease-in-out" }}>
          Zoo
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link className="nav-link rounded" to="/" style={{ transition: "background-color 0.2s ease-in-out" }}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link rounded" to="/posts" style={{ transition: "background-color 0.2s ease-in-out" }}>
                Posts
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link rounded" to="/tickets" style={{ transition: "background-color 0.2s ease-in-out" }}>
                Buy Tickets
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link rounded" to="/admin" style={{ transition: "background-color 0.2s ease-in-out" }}>
                Admin
              </Link>
            </li>
          </ul>
          <ul className="navbar-nav ml-auto login">
            <li className="nav-item">
              <Link className="nav-link rounded" to="/login" style={{ transition: "background-color 0.2s ease-in-out" }}>
                Login
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link rounded" to="/register" style={{ transition: "background-color 0.2s ease-in-out" }}>
                Register
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};