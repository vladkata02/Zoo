import React, { useState } from "react";
import PropTypes from "prop-types";

export const AddComment = ({ onCommentSubmit }) => {
  const [comment, setComment] = useState("");
  const [error, setError] = useState("");
  const [isValid, setIsValid] = useState(true);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (comment.trim() === "") {
      setError("Comment is required.");
      setIsValid(false);
      return;
    }
    onCommentSubmit({ comment });
    setComment("");
    
  };

  const handleChange = (event) => {
    setComment(event.target.value);
    setIsValid(true);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="input-group mb-3">
        <input
          type="text"
          className={`form-control ${!isValid ? "is-invalid" : ""}`}
          placeholder="Add a comment"
          value={comment}
          onChange={handleChange}
        />
        <button className="btn btn-success" type="submit">
          Submit
        </button>
        {!isValid && (
            <div className="invalid-feedback">Comment is required.</div>
          )}
      </div>
    </form>
  );
};

AddComment.propTypes = {
  onCommentSubmit: PropTypes.func.isRequired,
};