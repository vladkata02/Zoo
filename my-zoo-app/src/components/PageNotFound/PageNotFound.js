import React from "react";
import "./PageNotFound.css";

export const PageNotFound = () => {
  return (
    <div className="error-container">
      <img
        className="error-image"
        src="https://media.tenor.com/_rrC613KIJMAAAAM/the-simpsons-homer-simpson.gif"
        alt="Homer Simpson"
      />
      <div className="error-message">Error 404: Page not found</div>
    </div>
  );
};
