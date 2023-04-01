import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { usePostContext } from "../../contexts/PostContext";

import { useForm } from "../../hooks/useForm";
import { useService } from "../../hooks/useService";
import { postServiceFactory } from "../../services/postService";

import { Link } from "react-router-dom";

import "./EditPost.css"

export const EditPost = () => {
  const { onPostEditSubmit } = usePostContext();
  const { postId } = useParams();
  const postService = useService(postServiceFactory);
  const [errors, setErrors] = useState({});
  const { values, changeHandler, onSubmit, changeValues } = useForm(
    {
      _id: "",
      title: "",
      imageUrl: "",
      description: "",
    },
    onPostEditSubmit
  );

  useEffect(() => {
    postService.getOne(postId).then((result) => {
      changeValues(result);
    });
  }, [postId]);

  const validateForm = () => {
    let errors = {};

    if (!values.title.trim()) {
      errors.title = "Title is required";
    }

    if (!values.imageUrl.trim()) {
      errors.imageUrl = "Image URL is required";
    }

    if (!values.description.trim()) {
      errors.description = "Description is required";
    }

    setErrors(errors);

    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      onSubmit(e);
    }
    else {
        return;
    }
  };

  return (
    <section id="edit-page" className="auth">
      <div className="container">
        <h1>Edit Post</h1>
        <form id="edit" method="post" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="title">Title:</label>
            <input
              type="text"
              id="title"
              name="title"
              value={values.title}
              onChange={changeHandler}
              className="form-control"
            />
            {errors.title && <div className="error">{errors.title}</div>}
          </div>

          <div className="form-group">
            <label htmlFor="imageUrl">Image:</label>
            <input
              type="text"
              id="imageUrl"
              name="imageUrl"
              value={values.imageUrl}
              onChange={changeHandler}
              className="form-control"
            />
            {errors.imageUrl && <div className="error">{errors.imageUrl}</div>}
          </div>

          <div className="form-group">
            <label htmlFor="description">Description:</label>
            <textarea
              name="description"
              id="description"
              value={values.description}
              onChange={changeHandler}
              className="form-control"
            ></textarea>
            {errors.description && <div className="error">{errors.description}</div>}
          </div>

          <div className="form-group">
            <input
              className="btn btn-success mr-2"
              type="submit"
              value="Edit Post"
            />
            <Link to={`/posts/${postId}`} className="btn btn-secondary">
              Cancel
            </Link>
          </div>
        </form>
      </div>
    </section>
  );
};
