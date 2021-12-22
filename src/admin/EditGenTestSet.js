import React, { useEffect, useState } from "react";
import "./Admin.css";

import GLogin from "../account/GLogin";
import { Link, useHistory } from "react-router-dom";
import {
  GET_ALL_USERS,
  GET_GENERAL_TEST_SETS,
} from "../account/Graphql/Queries";
import { EDIT_GENERAL_TEST_SET } from "../account/Graphql/Mutation";
import { useQuery, useMutation } from "@apollo/client";
import TextArea from "antd/lib/input/TextArea";
import { message, Select } from "antd";
import { Option } from "antd/lib/mentions";

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

function EditGenTestSet(props) {
  const history = useHistory();
  const [editGeneralTestSet, { error }] = useMutation(EDIT_GENERAL_TEST_SET, {
    refetchQueries: [GET_GENERAL_TEST_SETS],
  });
  const [genTestSet, setGenTestSet] = useState(
    Array.from({ length: 17 }, (_, i) => {
      return { questionText: "", category: undefined };
    })
  );
  useEffect(() => {
    setGenTestSet(JSON.parse(props?.location?.state?.data?.questions));
  }, []);

  const [programs, setPrograms] = useState(categoriesList);

  const onQuestionChange = (index, field, value) => {
    const setQuestions = [...genTestSet];
    setQuestions[index][field] = value;
    setGenTestSet(setQuestions);
    if (field === "category") {
      setPrograms([...programs]?.filter((item) => item !== value));
    }
  };

  const onSaveTest = async () => {
    const isValid = [...genTestSet]?.every(
      (item) =>
        item?.questionText !== "" &&
        item?.questionText?.length > 20 &&
        item?.category !== "" &&
        item?.category
    );
    if (!isValid) {
      message.error("Please fill all details...", 2);
      return;
    }
    await editGeneralTestSet({
      variables: {
        questions: JSON.stringify(genTestSet),
        id: props?.location?.state?.data?.id,
      },
      refetchQueries: [GET_GENERAL_TEST_SETS],
    });
    message.success("Test Edited Successfully...");
    history.goBack();
  };

  return (
    <body>
      <div align="center">
        <h1>Edit General Test Set</h1>
        <img src="./icons/Line.png" className="line"></img>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {genTestSet?.map((item, index) => {
            return (
              <div
                style={{
                  display: "flex",
                  marginBottom: 20,
                  width: "70%",
                  justifyContent: "space-between",
                }}
              >
                <div style={{ width: "10%" }}>Question {index + 1}: </div>
                <div style={{ width: "60%" }}>
                  <TextArea
                    rows={2}
                    value={item?.questionText}
                    onChange={(e) =>
                      onQuestionChange(index, "questionText", e.target.value)
                    }
                    placeholder={`Enter question ${index + 1}`}
                  />
                </div>
                <div style={{ width: "20%" }}>
                  <Select
                    onChange={(e) => onQuestionChange(index, "category", e)}
                    value={item?.category}
                    placeholder="Choose program"
                    style={{ width: "100%" }}
                  >
                    {programs?.map((item) => (
                      <Option key={item} value={item}>
                        {item}
                      </Option>
                    ))}
                  </Select>
                </div>
              </div>
            );
          })}
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-around",
            width: "20%",
          }}
        >
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
          <div
            style={{
              border: "3px solid #F19336",
              borderRadius: 10,
              padding: "4px 10px",
              width: "fit-content",
              marginTop: 60,
              cursor: "pointer",
            }}
            onClick={() => onSaveTest()}
          >
            Save New Set
          </div>
        </div>
      </div>
    </body>
  );
}

export default EditGenTestSet;
