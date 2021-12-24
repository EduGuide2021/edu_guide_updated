import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "./Account.css";
import { UPDATE_PASSWORD } from "../account/Graphql/Mutation";
import { useMutation } from "@apollo/client";

import { Link } from "react-router-dom";
import { message } from "antd";
function ChangePass() {
  const history = useHistory();
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");
  const userInfo = JSON.parse(localStorage.getItem("user"));

  const [updatePassword, { error }] = useMutation(UPDATE_PASSWORD);
  if (error) {
    message.error(error.message);
    return <h1>{error?.message}</h1>;
  }
  return (
    <div align="center">
      <h3>Change Password</h3>
      <form className="pass-form">
        <label>
          <b>Old Password:</b>
          <input
            type="password"
            className="pass-field"
            name="password"
            onChange={(event) => {
              setCurrentPassword(event.target.value);
            }}
          />
        </label>
        <br></br>
        <label>
          <b>New Password:</b>
          <input
            type="password"
            className="pass-field"
            name="npassword"
            onChange={(event) => {
              setNewPassword(event.target.value);
            }}
          />
        </label>
        <br></br>
        <label>
          <b>Confirm New Password:</b>
          <input
            type="password"
            className="pass-field"
            name="npassword"
            onChange={(event) => {
              setConfirmNewPassword(event.target.value);
            }}
          />
        </label>
      </form>
      <div className="pass-btns">
        <button
          className="reg-btn"
          value="Save"
          onClick={async () => {
            try {
              if (newPassword?.length < 8) {
                message.error("Password must be 8 character long");
                return;
              }
              if (newPassword !== confirmNewPassword) {
                message.error(
                  "New password and confirm new password does not match.."
                );
                return;
              }
              await updatePassword({
                variables: {
                  id: userInfo?.id,
                  oldPassword: currentPassword,
                  newPassword: newPassword,
                },
              });
              message.success("Password changed successfully");
              history.goBack();
            } catch (error) {
              message.error(error?.message || "Something went wrong");
            }
          }}
        >
          Save
        </button>
        <Link to="/mainprofile" className="reg-btn" value="Cancel">
          Cancel
        </Link>
      </div>
      <p className="bottom_p">
        <b>Make the right decision.</b>
      </p>
    </div>
  );
}

export default ChangePass;
