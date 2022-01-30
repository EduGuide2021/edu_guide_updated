import React, { useState } from "react";
import "./Account.css";
import { Link } from "react-router-dom";
import { EDIT_PROFILE } from "../account/Graphql/Mutation";
import { useMutation } from "@apollo/client";
import { message } from "antd";
import { useDispatch } from "react-redux";
import { setAccountDetails } from "../store/actions/header";

function EditProfile() {
  const userInfo = JSON.parse(localStorage.getItem("user"));
  const [firstname, setFirstname] = useState(userInfo?.first_name);
  const [lastname, setLastname] = useState(userInfo?.last_name);
  const [username, setUsername] = useState(userInfo?.username);
  const [levelStrand, setLevelStrand] = useState(userInfo?.levelStrand);
  const [school, setSchool] = useState(userInfo?.school);
  const dispatch = useDispatch();

  const [editProfile] = useMutation(EDIT_PROFILE);

  function ShowingSomeErrors() {
    const { loading, error, data } = useMutation(EDIT_PROFILE, {
      errorPolicy: "all",
    });

    if (loading) return <span>loading...</span>;
    return (
      <div>
        <h2>Good: {data.goodField}</h2>
        <pre>
          Bad:{" "}
          {error.graphQLErrors.map(({ message }, i) => (
            <span key={i}>{message}</span>
          ))}
        </pre>
      </div>
    );
  }

  return (
    <div>
      <h1>Edit Profile</h1>
      <center>
      <img src="./icons/Line.png" class="line"></img>
      </center>
     
       
        
      <div className="container-profile">
        <div className="row-edit profile-form">
           <div className="col-edit" align="left">
          <br></br>
        <br></br>
            <img src="/static/media/icon2.9f428e47.png"/>
          </div>
          <div className="col-edit">
          <b>First Name:</b>
          <br/>
          <b>Last Name::</b>
          <br/>
          <b>Username:</b>
          <br/>
          <b>Level/Strand:</b>
          <br/>
          <b>School:</b>
          </div>
          <div className="col-edit">
            <form >
            
                {/* <b>First Name:</b> */}
                <input
                  type="text"
                  className="edit-field"
                  name="uname"
                  value={firstname}
                  onChange={(event) => {
                    setFirstname(event.target.value);
                  }}
                />
            <br/>
           
            
                {/* <b>Last Name::</b> */}
                <input
                  type="text"
                  className="edit-field"
                  name="uname"
                  value={lastname}
                  onChange={(event) => {
                    setLastname(event.target.value);
                  }}
                />
             
             <br/>
             
                {/* <b>Username:</b> */}
                <input
                  type="text"
                  className="edit-field"
                  name="uname"
                  value={username}
                  onChange={(event) => {
                    setUsername(event.target.value);
                  }}
                />
              
              <br/>
             
                {/* <b>Level/Strand:</b> */}
                <input
                  type="text"
                  className="edit-field"
                  name="lvlstrand"
                  value={levelStrand}
                  onChange={(event) => {
                    setLevelStrand(event.target.value);
                  }}
                />
              
              <br/>
              
                {/* <b>School:</b> */}
                <input
                  type="text"
                  className="edit-field"
                  name="school"
                  value={school}
                  onChange={(event) => {
                    setSchool(event.target.value);
                  }}
                />
              
            </form>
            </div>
            </div>
            </div>
          
     
      <div align="center">
        <br></br>
        {/* <Link to="/changeicon" className="reg-btn" value="Edit">
					Change Icon
				</Link> */}
        <Link
          className="profile-button"
          value="Edit Profile"
          onClick={() => {
            if (username && levelStrand) {
              editProfile({
                variables: {
                  id: userInfo?.id,
                  first_name: firstname,
                  last_name: lastname,
                  username: username,
                  levelStrand: levelStrand,
                  school: school,
                },
              }).then(() => {
                let updatedUser = {
                  ...userInfo,
                  first_name: firstname,
                  last_name: lastname,
                  username: username,
                  levelStrand: levelStrand,
                  school: school,
                };
                localStorage.setItem("user", JSON.stringify(updatedUser));
                dispatch(setAccountDetails(username));
              });
            } else {
              message.error("Please fill details");
            }
          }}
        >
          Save Changes
        </Link>
        <Link to="/mainprofile" className="profile-button" value="Cancel">
          Cancel
        </Link>
      </div>
      <p className="bottom_p">
        <b>Make the right decision.</b>
      </p>
    </div>
  );
}

export default EditProfile;
