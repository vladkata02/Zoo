import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";
import { useForm } from "../../hooks/useForm";

const LoginFormKeys = {
  Email: "email",
  Password: "password",
};

export const Login = () => {
  const { onLoginSubmit } = useContext(AuthContext);
  const [formErrors, setFormErrors] = useState({});
  const { values, changeHandler } = useForm({
    [LoginFormKeys.Email]: "",
    [LoginFormKeys.Password]: "",
  });

  const onSubmit = (event) => {
    event.preventDefault();

    // Validate form data
    const errors = {};
    if (!values[LoginFormKeys.Email]) {
      errors[LoginFormKeys.Email] = "Please enter your email address";
    }
    if (!values[LoginFormKeys.Password]) {
      errors[LoginFormKeys.Password] = "Please enter your password";
    }
    setFormErrors(errors);

    // Submit form data if there are no errors
    if (Object.keys(errors).length === 0) {
      onLoginSubmit(values);
    }
  };

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card mt-5 green-shadow">
            <div className="card-body">
              <h2 className="card-title mb-4 text-center">Login</h2>
              <form onSubmit={onSubmit}>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    className={`form-control ${
                      formErrors[LoginFormKeys.Email] ? "is-invalid" : ""
                    }`}
                    name={LoginFormKeys.Email}
                    value={values[LoginFormKeys.Email]}
                    onChange={changeHandler}
                  />
                  {formErrors[LoginFormKeys.Email] && (
                    <div className="invalid-feedback">
                      {formErrors[LoginFormKeys.Email]}
                    </div>
                  )}
                </div>
                <div className="form-group">
                  <label htmlFor="password">Password</label>
                  <input
                    type="password"
                    id="password"
                    className={`form-control ${
                      formErrors[LoginFormKeys.Password] ? "is-invalid" : ""
                    }`}
                    name={LoginFormKeys.Password}
                    value={values[LoginFormKeys.Password]}
                    onChange={changeHandler}
                  />
                  {formErrors[LoginFormKeys.Password] && (
                    <div className="invalid-feedback">
                      {formErrors[LoginFormKeys.Password]}
                    </div>
                  )}
                </div>

                <button
                  type="submit"
                  className="btn btn-primary btn-block mt-4"
                >
                  Log in
                </button>
                <p className="mt-3 mb-0 text-center">
                  Don't have an account? <Link to="/register">Register</Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
