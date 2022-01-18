import React, { Component } from "react";
import "./Account.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import "antd/dist/antd.css";
import { Avatar } from "antd";
import icon from "../components/pics/icon7.png";
import { assertNamedType } from "graphql";

function MainProfile() {
  const header = useSelector((state) => state.header);
  const icon = useSelector((state) => state.icon);
  const userInfo = JSON.parse(localStorage.getItem("user"));

  return (
    <div>
      <h1>My Profile</h1>
      <center>
      <img src="./icons/Line.png" class="line"></img>
      </center>
     <center>
      <div className="container-profile">
        <div className="row-profile">
          <div className="col-myprofile">
            <img src="/static/media/icon2.9f428e47.png"/>
          </div>
          <div className="col-myprofile">
            <form className="profile-form" align="left">
              <label>
                <b>Name:</b>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                <text type="text" className="edit-field" name="aname">
                  {userInfo?.first_name + " " + userInfo?.last_name}
                </text>
              </label>
              <br></br>
              <label>
                <b>Username:</b>&nbsp; &nbsp;
                <text type="text" className="edit-field" name="uname">
                  {header}
                </text>
              </label>
              <br></br>
              <label>
                <b>Level/Strand:</b>&nbsp; 
                <text type="text" className="edit-field" name="aname">
                  {userInfo?.levelStrand}
                </text>
              </label>
              <br></br>
              <label>
                <b>School:</b>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                <text type="text" className="edit-field" name="aname">
                  {userInfo?.school}
                </text>
              </label>
            </form>
            <div>
        <Link to="/editprofile" className="profile-button" value="Edit">
          Edit
        </Link>
        <Link to="/changepass" className="profile-button" value="Change Password">
          Change Password
        </Link>
        <Link to="/testresults" className="profile-button" value="Show Test Results">
          Show Test Results
        </Link>
      </div>
            </div>
            </div>
            </div>
            </center>
      <p className="bottom_p">
        <b>Make the right decision.</b>
      </p>
    </div>
  );
}

export default MainProfile;
