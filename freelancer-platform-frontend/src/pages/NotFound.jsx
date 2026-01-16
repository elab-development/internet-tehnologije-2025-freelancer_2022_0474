import React from "react";
import { Link } from "react-router-dom";
import "../css/NotFound.css";

const NotFound = () => {
  return (
    <div className="notfound-container">
      <h1>404</h1>
      <h2>Page Not Found</h2>
      <p>
        The page you are looking for does not exist or has been moved.
      </p>

      <Link to="/" className="notfound-btn">
        Back to Home
      </Link>
    </div>
  );
};

export default NotFound;
