import { useContext } from "react";
import { Link } from "react-router-dom";
import { useForm } from "../../hooks/useForm";
import { AuthContext } from "../../contexts/AuthContext";
import { Button } from "react-bootstrap";
import "./Register.css";

export const Register = () => {
  const { onRegisterSubmit } = useContext(AuthContext);
  const { values, changeHandler, onSubmit } = useForm(
    {
      email: "",
      password: "",
      confirmPassword: "",
    },
    onRegisterSubmit
  );

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
                      className="form-control"
                      placeholder="pompata@email.com"
                      value={values.email}
                      onChange={changeHandler}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input
                      type="password"
                      name="password"
                      id="password"
                      className="form-control"
                      value={values.password}
                      onChange={changeHandler}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="confirmPassword">Confirm Password</label>
                    <input
                      type="password"
                      name="confirmPassword"
                      id="confirmPassword"
                      className="form-control"
                      value={values.confirmPassword}
                      onChange={changeHandler}
                      required
                    />
                  </div>

                  <Button type="submit" className="btn btn-primary btn-block mt-4">
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
};