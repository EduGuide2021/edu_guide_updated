import React, { useState } from "react";
import "./Admin.css";

import GLogin from "../account/GLogin";
import { Link, useHistory } from "react-router-dom";
import { GET_ALL_USERS } from "../account/Graphql/Queries";
import { DELETE_USER } from "../account/Graphql/Mutation";
import { useQuery, useMutation } from "@apollo/client";

function AdminDashboard() {
  const { data } = useQuery(GET_ALL_USERS);
  const history = useHistory();

  return (
    <body>
      <div align="center">
        <h1>Welcome Admin</h1>
        <img src="./icons/Line.png" className="line"></img>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            flexWrap: "wrap",
            width: "40%",
            justifyContent: "space-around",
          }}
        >
          <div
            style={{
              padding: 30,
              marginBottom: 30,
              width: "45%",
              cursor: "pointer",
              background: "rgba(241, 147, 54, 0.53)",
            }}
            onClick={() => history.push("/admin-user-accounts")}
          >
            User Accounts ({data?.getAllUsers?.length - 1})
          </div>
          <div
            style={{
              marginBottom: 30,

              width: "45%",
              cursor: "pointer",
              padding: 30,
              background: "rgba(241, 147, 54, 0.53)",
            }}
            onClick={() => history.push("/customize-gen-test")}
          >
            Customize General Test
          </div>
          <div
            style={{
              padding: 30,
              marginBottom: 30,
              width: "45%",
              cursor: "pointer",
              background: "rgba(241, 147, 54, 0.53)",
            }}
          >
            Community
          </div>
          <div
            style={{
              marginBottom: 30,

              width: "45%",
              cursor: "pointer",
              padding: 30,
              background: "rgba(241, 147, 54, 0.53)",
            }}
            onClick={() => history.push("/customize-spec-test")}
          >
            Customize Specialized Test
          </div>
        </div>
      </div>
    </body>
  );
}

export default AdminDashboard;
