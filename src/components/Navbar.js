import React from "react";
import "./Navbar.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { useDispatch, useSelector } from "react-redux";
import { showSidebar } from "../store/actions/sidebar";
import { Link } from "react-router-dom";
import { logoutUser } from "../store/actions/header";
import username from "../account/Login";

function NavBar() {
  //update event state
  const dispatch = useDispatch();
  const header = useSelector((state) => state.header);
  const userInfo = JSON.parse(localStorage.getItem("user"));

  //eventhandler
  const handleClick = () => {
    dispatch(showSidebar());
  };
  const logoutClick = () => {
    localStorage.removeItem("user");
    dispatch(logoutUser());
  };

  return (
    <div className="navbar">
      {!userInfo?.is_admin ? (
        <div className="navbar__wrapper">
          {/* <div className="navbar__logo">
            <Link to="/">
              <img
                src="./images/Logo192.png"
                alt="eduguide logo"
                className="logo_size"
              />
            </Link>
          </div> */}
          <ul className="navbar__links">
            <li className="navbar__link">
              <Link to="/">
                <img
                  src="./images/Logo192.png"
                  alt="eduguide logo"
                  className="logo_view"
                />
                <label className="logo-label">EduGuide</label>
              </Link>
            </li>

            <li className="navbar__link">
              <Link to="/" className="navbar__link">
                Home
              </Link>
            </li>
            <li className="navbar__link">
              <Link to="/about" className="navbar__link">
                About
              </Link>
            </li>
            {header ? (
              <Link to="/blogs" className="navbar__link">
                Blogs
              </Link>
            ) : (
              <Link to="/login" className="navbar__link">
                Blogs
              </Link>
            )}
            <li className="navbar__link">
              <Link to="/faqs" className="navbar__link">
                FAQs
              </Link>
            </li>
            {header ? (
              <Link to="/community" className="navbar__link">
                Community
              </Link>
            ) : (
              <Link to="/login" className="navbar__link">
                Community
              </Link>
            )}

            <li className="navbar__link">
              <Link to="/contact" className="navbar__link">
                Contact
              </Link>
            </li>
            <li className="navbar__link">
              <Link to="#" className="navbar__link">
                help
              </Link>
            </li>
            <div className="navbar__link">
              {header ? (
                <li>
                  <Link to="/mainprofile" className="login-item">
                    <p className="user-name"> Hi {header}! </p>
                  </Link>
                </li>
              ) : (
                <li>
                  <Link to="/login" className="rounded-yellow-btn">
                    Log In
                  </Link>
                </li>
              )}
            </div>
            <div className="navbar__link">
              {header ? (
                <li>
                  <Link
                    to="/login"
                    className="login-item"
                    onClick={() => {
                      logoutClick();
                    }}
                  >
                    Log Out
                  </Link>
                </li>
              ) : (
                <li hidden="true">
                  <Link to="/signup" className="navbar_link">
                    Sign Up
                  </Link>
                </li>
              )}
            </div>
          </ul>
          <GiHamburgerMenu
            onClick={() => handleClick()}
            className="navbar__burger"
          />
        </div>
      ) : (
        <div className="navbar__wrapper">
          <div className="navbar__logo">
            <Link to="/admin-dashboard">
              <img
                src="./images/Logo192.png"
                alt="eduguide logo"
                className="logo_size"
              />
            </Link>
          </div>
          <ul className="navbar__links">
            <li className="navbar__link">
              <Link to="/admin-user-accounts" className="navbar__link">
                User Accounts
              </Link>
            </li>
            <li className="navbar__link">
              <Link to="/customize-gen-test" className="navbar__link">
                General Test
              </Link>
            </li>
            <li className="navbar__link">
              <Link to="/customize-spec-test" className="navbar__link">
                Specialized Test
              </Link>
            </li>
            {header ? (
              <Link to="/community" className="navbar__link">
                Community
              </Link>
            ) : (
              <Link to="/login" className="navbar__link">
                Community
              </Link>
            )}
            <div className="login-item">
              {header ? (
                <li>
                  <Link to="/mainprofile" className="login-item">
                    <p className="user-name"> Hi {header}! </p>
                  </Link>
                </li>
              ) : (
                <li>
                  <Link to="/login" className="login-item">
                    Login
                  </Link>
                </li>
              )}

              {header ? (
                <li>
                  <Link
                    to="/login"
                    className="login-item"
                    onClick={() => {
                      logoutClick();
                    }}
                  >
                    Log Out
                  </Link>
                </li>
              ) : (
                <li>
                  <Link to="/signup" className="login-item">
                    Sign Up
                  </Link>
                </li>
              )}
            </div>
          </ul>
          <GiHamburgerMenu
            onClick={() => handleClick()}
            className="navbar__burger"
          />
        </div>
      )}
    </div>
  );
}

export default NavBar;
