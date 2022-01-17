import React from "react";
import { Button, Label, Col, Row } from "reactstrap";

function LoginPage() {
  return (
    <section className="vh-100">
      <div className="container-fluid">
        <Row>
          <Col className="col-sm-6 text-black">
            <div className="px-5 ms-xl-4">
              <i className="fas fa-crow fa-2x me-3 pt-5 mt-xl-4"></i>
              <span className="h1 fw-bold mb-0">Logo</span>
            </div>

            <div className="d-flex align-items-center h-custom-2 px-5 ms-xl-4 mt-5 pt-5 pt-xl-0 mt-xl-n5">
              <form>
                <h3 className="fw-normal mb-3 pb-3">Log in</h3>

                <div className="form-outline mb-4">
                  <input
                    type="email"
                    id="form2Example18"
                    className="form-control form-control-lg"
                  />
                  <label className="form-label" for="form2Example18">
                    Email address
                  </label>
                </div>

                <div className="form-outline mb-4">
                  <input
                    type="password"
                    id="form2Example28"
                    className="form-control form-control-lg"
                  />
                  <label className="form-label" for="form2Example28">
                    Password
                  </label>
                </div>

                <div class="pt-1 mb-4">
                  <button
                    className="btn btn-info btn-lg btn-block"
                    type="button"
                  >
                    Login
                  </button>
                </div>

                <p className="small mb-5 pb-lg-2">
                  <a className="text-muted" href="#!">
                    Forgot password?
                  </a>
                </p>
                <p>
                  Don't have an account?{" "}
                  <a href="#!" className="link-info">
                    Register here
                  </a>
                </p>
              </form>
            </div>
          </Col>
          <div className="col-sm-6 px-0 d-none d-sm-block">
            <img
              src="https://1yrfw22o0md42s5cmcm5uh41-wpengine.netdna-ssl.com/wp-content/uploads/2020/03/preventative-maintenance-1300x840.jpeg"
              alt="Login image"
              className="w-100 vh-100"
            />
          </div>
        </Row>
      </div>
    </section>
  );
}

export default LoginPage;
