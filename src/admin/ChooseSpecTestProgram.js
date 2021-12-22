import React, { useState } from "react";
import "./Admin.css";

import GLogin from "../account/GLogin";
import { Link, useHistory } from "react-router-dom";
import { GET_GENERAL_TEST_SETS } from "../account/Graphql/Queries";
import { useQuery, useMutation } from "@apollo/client";

const categoriesList = [
  "COMMUNICATION",
  "ENGLISH",
  "JOURNALISM",
  "EARLY CHILDHOOD EDUCATION",
  "ELEMENTARY EDUCATION",
  "SECONDARY EDUCATION",
  "SPECIAL NEEDS EDUCATION",
  "PSYCHOLOGY",
  "MANAGEMENT ACCOUNTING",
  "BUSINESS ADMINISTRATION MAJOR IN MARKETING",
  "ENTREPRENEURSHIP",
  "COMPUTER SCIENCE",
  "HOSPITALITY MANAGEMENT",
  "NURSING",
  "ACCOUNTANCY",
  "INFORMATION TECHNOLOGY",
  "TOURISM MANAGEMENT",
];

function ChooseSpecTestProgram() {
  const history = useHistory();
  const { data, loading } = useQuery(GET_GENERAL_TEST_SETS);
  if (loading) {
    return <></>;
  }

  return (
    <body>
      <div align="center">
        <h1>Choose Special Test Program</h1>
        <img src="./icons/Line.png" className="line"></img>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            flexWrap: "wrap",
            width: "80%",
            rowGap: 40,
            gap: 30,
          }}
        >
          {categoriesList?.map((item, index) => (
            <div
              style={{
                width: "30%",
                padding: 20,
                cursor: "pointer",
                background: "rgba(241, 147, 54, 0.53)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
              onClick={() =>
                history.push("/add-spec-test-set", { program: item })
              }
            >
              <p style={{ marginBottom: 0 }}>{item}</p>
            </div>
          ))}
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

export default ChooseSpecTestProgram;
