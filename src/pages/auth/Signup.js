import React, { Fragment } from "react";
import logo from "../../assets/images/endless-logo.png";

const Signup = () => {
  return (
    <Fragment>
      <div className="page-wrapper">
        <div className="container-fluid">
          {/* <!-- sign up page start--> */}
          <div className="authentication-main">
            <div className="row">
              <div className="col-sm-12 p-0">
                <div className="auth-innerright">
                  <div className="authentication-box">
                    <div className="text-center">
                      <img src={logo} alt="" />
                    </div>
                    <div className="card mt-4 p-4">
                      <h4 className="text-center">{"NEW USER"}</h4>
                      <h6 className="text-center">
                        {"Enter your Username and Password For Signup"}
                      </h6>
                      <form className="theme-form">
                        <div className="form-row">
                          <div className="col-md-6">
                            <div className="form-group">
                              <label className="col-form-label">
                                First Name
                              </label>
                              <input
                                className="form-control"
                                type="text"
                                placeholder="e.g felix"
                              />
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="form-group">
                              <label className="col-form-label">
                                Last Name
                              </label>
                              <input
                                className="form-control"
                                type="text"
                                placeholder="e.g waithaka"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="form-group">
                          <label className="col-form-label">Email</label>
                          <input
                            className="form-control"
                            type="text"
                            placeholder="e.g Felix@example.com"
                          />
                        </div>
                        <div className="form-group">
                          <label className="col-form-label">Password</label>
                          <input
                            className="form-control"
                            type="password"
                            placeholder="**********"
                          />
                        </div>
                        <div className="form-group">
                          <div className="col-sm-4">
                            <button className="btn btn-primary" type="submit">
                              Sign up
                            </button>
                          </div>
                          <div className="col-sm-8">
                            <div className="text-left mt-2 m-l-20">
                              {"Are you already user?"}
                              <a
                                className="btn-link text-capitalize"
                                href="/login"
                              >
                                Login
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="form-divider"></div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- sign up page ends--> */}
        </div>
      </div>
    </Fragment>
  );
};

export default Signup;
