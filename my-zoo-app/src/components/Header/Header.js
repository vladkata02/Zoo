import { useContext, React } from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import { AuthContext } from "../../contexts/AuthContext";

export const Header = () => {
  const { isAuthenticated, userEmail } = useContext(AuthContext);
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light custom-nav">
      <div className="container">
        <Link
          className="nav-link rounded custom-logo"
          to="/"
          style={{ transition: "background-color 0.2s ease-in-out" }}
        >
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
              <Link
                className="nav-link rounded"
                to="/"
                style={{ transition: "background-color 0.2s ease-in-out" }}
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link rounded"
                to="/posts"
                style={{ transition: "background-color 0.2s ease-in-out" }}
              >
                Posts
              </Link>
            </li>
            {isAuthenticated && (
              <>
                <li className="nav-item">
                  <Link
                    className="nav-link rounded"
                    to="/create-post"
                    style={{ transition: "background-color 0.2s ease-in-out" }}
                  >
                    Create post
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link rounded"
                    to="/tickets"
                    style={{ transition: "background-color 0.2s ease-in-out" }}
                  >
                    Tickets
                  </Link>
                </li>
              </>
            )}
          </ul>
          {!isAuthenticated && (
            <ul className="navbar-nav ml-auto auth">
              <li className="nav-item">
                <Link
                  className="nav-link rounded login-link"
                  to="/login"
                  style={{ transition: "background-color 0.2s ease-in-out" }}
                >
                  Login
                </Link>
              </li>
              <li className="nav-item register">
                <Link
                  className="nav-link rounded"
                  to="/register"
                  style={{ transition: "background-color 0.2s ease-in-out" }}
                >
                  Register
                </Link>
              </li>
            </ul>
          )}
          {isAuthenticated && (
            <ul className="navbar-nav ml-auto auth">
              <li className="nav-item">
                <span className="nav-link rounded">
                  {userEmail}
                </span>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link rounded"
                  to="/logout"
                  style={{
                    transition: "background-color 0.2s ease-in-out",
                  }}
                >
                  Logout
                </Link>
              </li>
            </ul>
          )}
        </div>
      </div>
    </nav>
  );
};
