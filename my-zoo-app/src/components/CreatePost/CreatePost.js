import { useState } from "react";
import { useForm } from "../../hooks/useForm";
import { usePostContext } from "../../contexts/PostContext";

const PostFormKeys = {
  Title: "title",
  ImageUrl: "imageUrl",
  Description: "description",
};

export const CreatePost = () => {
  const { onCreatePostSubmit } = usePostContext();
  const [formErrors, setFormErrors] = useState({});
  const { values, changeHandler } = useForm({
    [PostFormKeys.Title]: "",
    [PostFormKeys.ImageUrl]: "",
    [PostFormKeys.Description]: "",
  });

  const onSubmit = (event) => {
    event.preventDefault();

    // Validate form data
    const errors = {};
    if (!values[PostFormKeys.Title]) {
      errors[PostFormKeys.Title] = "Please enter a title";
    }
    if (!values[PostFormKeys.ImageUrl]) {
      errors[PostFormKeys.ImageUrl] = "Please enter an image URL";
    }
    if (!values[PostFormKeys.Description]) {
      errors[PostFormKeys.Description] = "Please enter a description";
    }
    setFormErrors(errors);

    // Submit form data if there are no errors
    if (Object.keys(errors).length === 0) {
      onCreatePostSubmit(values);
    }
  };

  return (
    <section id="create-page" className="auth">
      <div className="container d-flex justify-content-center align-items-center h-100">
        <div className="col-md-6">
          <form id="create" method="post" onSubmit={onSubmit}>
            <h1 className="text-center mb-4">Create Post</h1>

            <div className="form-group">
              <label htmlFor="title">Title:</label>
              <input
                value={values[PostFormKeys.Title]}
                onChange={changeHandler}
                type="text"
                id="title"
                name="title"
                className={`form-control ${
                  formErrors[PostFormKeys.Title] ? "is-invalid" : ""
                }`}
                placeholder="Enter game title..."
              />
              {formErrors[PostFormKeys.Title] && (
                      <div className="invalid-feedback">
                        {formErrors[PostFormKeys.Title]}
                      </div>
                    )}
            </div>

            <div className="form-group">
              <label htmlFor="image">Image:</label>
              <input
                value={values[PostFormKeys.ImageUrl]}
                onChange={changeHandler}
                type="text"
                id="imageUrl"
                name="imageUrl"
                className={`form-control ${
                  formErrors[PostFormKeys.ImageUrl] ? "is-invalid" : ""
                }`}
                placeholder="Upload a photo..."
              />
              {formErrors[PostFormKeys.ImageUrl] && (
                      <div className="invalid-feedback">
                        {formErrors[PostFormKeys.ImageUrl]}
                      </div>
                    )}
            </div>

            <div className="form-group mb-4">
              <label htmlFor="description">Description:</label>
              <textarea
                name="description"
                id="description"
                value={values[PostFormKeys.Description]}
                onChange={changeHandler}
                className={`form-control ${
                  formErrors[PostFormKeys.Description] ? "is-invalid" : ""
                }`}
                placeholder="What's on your mind..."
              ></textarea>
              {formErrors[PostFormKeys.Description] && (
                      <div className="invalid-feedback">
                        {formErrors[PostFormKeys.Description]}
                      </div>
                    )}
            </div>
  
            <button
              className="btn btn-primary btn-block"
              type="submit"
              style={{ backgroundColor: "#409932" }}
            >
              Create Post
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};
