import React from "react";
import { Link } from "react-router-dom";
import "../css/style.css";
import loginImage from "../Assets/loginImage.png";
import emailLogo from "../Assets/emailLogo.png";
import passwordLogo from "../Assets/passwordLogopng.png";
import PhoneLogo from "../Assets/phoneLogo.png";
import googleLogo from "../Assets/googleLogo.png";
import cloverlogo from "../Assets/cloverLogo.png";

function Login() {
  return (
    <div>
      <section className="Home-section1">
        <div>
          <nav class="navbar navbar-expand-lg navbar-light bg-light clover-navbar">
            <img className="nav-logo" src={cloverlogo} alt="main-logo"></img>
            <button
              class="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
          </nav>
        </div>
      </section>

      <section className="login-section">
        <div className="container login-card-section">
          <div className="row ">
            <div className="col custom-col">
              <img className="login-image" src={loginImage} alt="login"></img>
            </div>
            <div className="col login-card">
              <div className="login-heading">LOGIN</div>
              <div></div>
              <div className="input-section">
                <div>
                  <input
                    className="input-design"
                    type="email"
                    placeholder="Email"
                  ></input>
                  <img className="logo" src={emailLogo} alt="email"></img>
                </div>
                <div>
                  <input
                    className="input-design"
                    type="password"
                    placeholder="Password"
                  ></input>
                  <img className="logo" src={passwordLogo} alt="password"></img>
                </div>
              </div>
              <a className="forgot-link" href="https://www.google.com">
                forgot password?
              </a>

              <div className="container">
                <div>
                  <button className="login-button">Login</button>
                </div>
                <div className="option-text">or login with</div>
                <div>
                  <img
                    className="other-logo1"
                    src={PhoneLogo}
                    alt="phone"
                  ></img>
                  <img
                    className="other-logo2"
                    src={googleLogo}
                    alt="google"
                  ></img>
                </div>
                <div className="register">
                  Don't have an Account?
                  <Link to="/register" className="nav-link-register">
                    Register
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Login;
