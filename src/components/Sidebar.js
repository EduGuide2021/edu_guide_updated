import React from "react";
import "./Sidebar.css";
import { useSelector } from "react-redux";
import { ImCross } from "react-icons/im";
import { useDispatch } from "react-redux";
import { hideSidebar } from "../store/actions/sidebar";

import { Link } from "react-router-dom";

function Sidebar() {
  const dispatch = useDispatch();
  const sidebar = useSelector((state) => state.sidebar);
  //from index reducer
  const handleClick = () => {
    dispatch(hideSidebar());
  };
  return (
    <div className="sidebar" id={sidebar ? "show-sidebar" : "hide-sidebar"}>
      <ul className="sidebar__links">
        <li className="sidebar__link">
          <Link to="/" className="sidebar__link">
            Home
          </Link>
        </li>
        <li className="sidebar__link">
          <Link to="/about" className="sidebar__link">
            About
          </Link>
        </li>
        <li className="sidebar__link">
          <Link to="/blogs" className="sidebar__link">
            Blogs
          </Link>
        </li>
        <li className="sidebar__link">
          <Link to="/faqs" className="sidebar__link">
            FAQs
          </Link>
        </li>
        <li className="sidebar__link">
          <Link to="/community" className="sidebar__link">
            Community
          </Link>
        </li>
        <li className="sidebar__link">
          <Link to="/contact" className="sidebar__link">
            Contact
          </Link>
        </li>
        <li className="sidebar__link">
          <Link to="/login" className="sidebar__link">
            Login
          </Link>
        </li>
        <li className="sidebar__link">
          <Link to="/signup" className="sidebar__link">
            Sign Up
          </Link>
        </li>
      </ul>
      <label onClick={() => handleClick()} className="sidebar__cancel">X</label>
      
    </div>
  );
}

export default Sidebar;
