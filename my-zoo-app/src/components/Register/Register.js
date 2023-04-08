import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { useForm } from "../../hooks/useForm";
import { AuthContext } from "../../contexts/AuthContext";
import { Button } from "react-bootstrap";
import "./Register.css";

const RegisterFormKeys = {
  Email: "email",
  Password: "password",
  ConfirmPassword: "confirmPassword",
}

export const Register = () => {
  const { onRegisterSubmit } = useContext(AuthContext);
  const [formErrors, setFormErrors] = useState({});
  const { values, changeHandler } = useForm(
    {
      [RegisterFormKeys.Email]: "",
      [RegisterFormKeys.Password]: "",
      [RegisterFormKeys.ConfirmPassword]: "",
    });

  const onSubmit = (event) => {
    event.preventDefault();

    const errors = {};
    if (!values[RegisterFormKeys.Email]) {
      errors[RegisterFormKeys.Email] = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
      errors[RegisterFormKeys.Email] = "Email is invalid";
    }
  
    if (!values[RegisterFormKeys.Password]) {
      errors[RegisterFormKeys.Password] = "Password is required";
    } else if (values[RegisterFormKeys.Password].length < 6) {
      errors[RegisterFormKeys.Password] = "Password must be at least 6 characters";
    }
  
    if (!values[RegisterFormKeys.ConfirmPassword]) {
      errors[RegisterFormKeys.ConfirmPassword] = "Confirm Password is required";
    } else if (values[RegisterFormKeys.ConfirmPassword] !== values[RegisterFormKeys.Password]) {
      errors[RegisterFormKeys.ConfirmPassword] = "Passwords do not match";
    }
    setFormErrors(errors);
  
    if (Object.keys(errors).length === 0) {
      onRegisterSubmit(values);
    }
  }

  return (
    <section id="register-page" className="content auth">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="card mt-5 green-shadow">
              <div className="card-body">
                <h2 className="card-title mb-4 text-center">Register</h2>
                <form method="post" onSubmit={onSubmit}>
                  <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className={`form-control ${formErrors[RegisterFormKeys.Email] && 'is-invalid'}`}
                      placeholder="pompata@email.com"
                      value={values.email}
                      onChange={changeHandler}
                    />
                    {formErrors[RegisterFormKeys.Email] && <div className="invalid-feedback">{formErrors[RegisterFormKeys.Email]}</div>}
                  </div>
  
                  <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input
                      type="password"
                      name="password"
                      id="password"
                      className={`form-control ${formErrors[RegisterFormKeys.Password] && 'is-invalid'}`}
                      value={values[RegisterFormKeys.Password]}
                      onChange={changeHandler}
                    />
                    {formErrors[RegisterFormKeys.Password] && <div className="invalid-feedback">{formErrors[RegisterFormKeys.Password]}</div>}
                  </div>
  
                  <div className="form-group">
                    <label htmlFor="confirmPassword">Confirm Password</label>
                    <input
                      type="password"
                      name="confirmPassword"
                      id="confirmPassword"
                      className={`form-control ${formErrors[RegisterFormKeys.ConfirmPassword] && 'is-invalid'}`}
                      value={values[RegisterFormKeys.ConfirmPassword]}
                      onChange={changeHandler}
                    />
                    {formErrors[RegisterFormKeys.ConfirmPassword] && <div className="invalid-feedback">{formErrors[RegisterFormKeys.ConfirmPassword]}</div>}
                  </div>
  
                  <Button type="submit" className="btn btn-success btn-block mt-4">
                    Register
                  </Button>
                </form>
                <div className="mt-4 text-center">
                  <p className="mb-0">
                    If you already have a profile,{" "}
                    <Link to="/login" className="text-primary">
                      login here
                    </Link>
                    .
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
