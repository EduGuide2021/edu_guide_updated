import React, { useState } from "react";
import "./Admin.css";

import GLogin from "../account/GLogin";
import { Link, useHistory } from "react-router-dom";
import { GET_ALL_USERS } from "../account/Graphql/Queries";
import { DELETE_USER } from "../account/Graphql/Mutation";
import { useQuery, useMutation } from "@apollo/client";

function CustomizeGenTest() {
  const history = useHistory();

  return (
    <body>
      <div align="center">
        <h1>Customize General Test</h1>
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
            className="dash-board-card"
            onClick={() => history.push("/edit-gen-test-sets-list")}
          >
            Edit Current Sets
          </div>
          <div
            style={{
              marginBottom: 30,

              width: "45%",
              cursor: "pointer",
              padding: 30,
              background: "rgba(241, 147, 54, 0.53)",
            }}
            className="dash-board-card"
            onClick={() => history.push("/add-gen-test-set")}
          >
            Add New Set
          </div>
        </div>
        <div
          style={{
            border: "3px solid #F19336",
            borderRadius: 10,
            padding: "4px 10px",
            width: "fit-content",
            marginTop: 60,
            cursor: "pointer",
          }}
          onClick={() => history.goBack()}
        >
          Back
        </div>
      </div>
    </body>
  );
}

export default CustomizeGenTest;
