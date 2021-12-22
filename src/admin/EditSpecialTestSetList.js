import React, { useEffect, useState } from "react";
import "./Admin.css";

import GLogin from "../account/GLogin";
import { Link, useHistory } from "react-router-dom";
import { GET_SPECIAL_TEST_SETS } from "../account/Graphql/Queries";
import { DELETE_USER } from "../account/Graphql/Mutation";
import { useQuery, useMutation } from "@apollo/client";
import { GiPencil } from "react-icons/gi";

function EditSpecialTestSetList(props) {
  const history = useHistory();
  const { data, loading } = useQuery(GET_SPECIAL_TEST_SETS);

  const [specialTests, setSpecialTests] = useState([]);

  useEffect(() => {
    if (data?.getSpecialTestSets?.length > 0) {
      setSpecialTests(
        data?.getSpecialTestSets?.filter(
          (item) => item?.program === props?.location?.state?.program
        )
      );
    }
  }, [data]);

  if (loading) {
    return <></>;
  }

  return (
    <body>
      <div align="center">
        <h1>{props?.location?.state?.program} Test Sets</h1>
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
          {specialTests?.map((item, index) => (
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
                history.push("/edit-spec-test-set", { data: item })
              }
            >
              <p style={{ marginBottom: 0 }}>SET {index + 1}</p>
              <GiPencil
                style={{ marginLeft: 10, fontSize: 20, color: "#16367c" }}
              />
            </div>
          ))}
          {specialTests?.length === 0 && (
            <p>No Sets Found for {props?.location?.state?.program}</p>
          )}
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

export default EditSpecialTestSetList;
