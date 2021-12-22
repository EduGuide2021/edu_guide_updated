import React, { useState } from "react";
import "./Admin.css";
import { useHistory } from "react-router-dom";
import { GET_SPECIAL_TEST_SETS } from "../account/Graphql/Queries";
import { CREATE_SPECIAL_TEST_SET } from "../account/Graphql/Mutation";
import { useQuery, useMutation } from "@apollo/client";
import TextArea from "antd/lib/input/TextArea";
import { message, Select } from "antd";
import { Option } from "antd/lib/mentions";

function AddSpecTestSet(props) {
  const history = useHistory();
  const [createSpecialTestSet, { error }] = useMutation(
    CREATE_SPECIAL_TEST_SET
  );
  const [specTestSet, setSpecTestSet] = useState(
    Array.from({ length: 10 }, (_, i) => {
      return {
        questionText: "",
        answerOptions: [
          { answerText: "", isCorrect: false },
          { answerText: "", isCorrect: false },
          { answerText: "", isCorrect: false },
          { answerText: "", isCorrect: false },
        ],
      };
    })
  );

  const onQuestionChange = (index, field, value) => {
    const setQuestions = [...specTestSet];
    setQuestions[index][field] = value;
    setSpecTestSet(setQuestions);
  };

  const onOptionChange = (index, optionIndex, value) => {
    const setQuestions = [...specTestSet];
    const optionsData = [...setQuestions[index]?.answerOptions];
    optionsData[optionIndex].answerText = value;
    setQuestions[index].answerOptions = optionsData;
    setSpecTestSet(setQuestions);
  };

  const onAnswerCange = (index, optionIndex) => {
    const setQuestions = [...specTestSet];
    const optionsData = [...setQuestions[index]?.answerOptions];
    optionsData[optionIndex].isCorrect = true;
    setQuestions[index].answerOptions = optionsData;
    setSpecTestSet(setQuestions);
  };

  const onSaveTest = async () => {
    const isValid = [...specTestSet]?.every(
      (item) =>
        item?.questionText !== "" &&
        item?.questionText?.length > 20 &&
        item?.answerOptions?.every((option) => option.answerText !== "") &&
        item?.answerOptions?.some((option) => option.isCorrect)
    );
    if (!isValid) {
      message.error("Please fill all details...", 2);
      return;
    }
    await createSpecialTestSet({
      variables: {
        questions: JSON.stringify(specTestSet),
        program: props?.location?.state?.program,
      },
      refetchQueries: [GET_SPECIAL_TEST_SETS],
    });
    message.success("Test Added...");
    history.push("/admin-dashboard");
  };

  return (
    <body>
      <div align="center">
        <h1>Add new Special Test Set</h1>
        <img src="./icons/Line.png" className="line"></img>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {specTestSet?.map((item, index) => {
            return (
              <div style={{ width: "100%", marginBottom: 30 }}>
                <div
                  style={{
                    display: "flex",
                    marginBottom: 10,
                    width: "70%",
                    justifyContent: "space-between",
                  }}
                >
                  <div style={{ width: "10%" }}>Question {index + 1}: </div>
                  <div style={{ width: "80%" }}>
                    <TextArea
                      rows={2}
                      value={item?.questionText}
                      onChange={(e) =>
                        onQuestionChange(index, "questionText", e.target.value)
                      }
                      placeholder={`Enter question ${index + 1}`}
                    />
                  </div>
                </div>
                <div
                  style={{
                    display: "flex",
                    marginBottom: 20,
                    width: "70%",
                    justifyContent: "space-between",
                  }}
                >
                  <div style={{ width: "10%" }}>Options</div>
                  <div
                    style={{
                      width: "80%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    <div
                      style={{
                        width: "22%",
                        display: "flex",
                        alignItems: "center",
                        flexDirection: "column",
                      }}
                    >
                      <TextArea
                        width={"100%"}
                        value={item?.answerOptions[0]?.answerText}
                        placeholder="Option A"
                        onChange={(e) =>
                          onOptionChange(index, 0, e.target.value)
                        }
                      />
                      <span>A</span>
                    </div>
                    <div
                      style={{
                        width: "22%",
                        display: "flex",
                        alignItems: "center",
                        flexDirection: "column",
                      }}
                    >
                      <TextArea
                        width={"100%"}
                        value={item?.answerOptions[1]?.answerText}
                        placeholder="Option B"
                        onChange={(e) =>
                          onOptionChange(index, 1, e.target.value)
                        }
                      />
                      <span>B</span>
                    </div>
                    <div
                      style={{
                        width: "22%",
                        display: "flex",
                        alignItems: "center",
                        flexDirection: "column",
                      }}
                    >
                      <TextArea
                        width={"100%"}
                        value={item?.answerOptions[2]?.answerText}
                        placeholder="Option C"
                        onChange={(e) =>
                          onOptionChange(index, 2, e.target.value)
                        }
                      />
                      <span>C</span>
                    </div>
                    <div
                      style={{
                        width: "22%",
                        display: "flex",
                        alignItems: "center",
                        flexDirection: "column",
                      }}
                    >
                      <TextArea
                        width={"100%"}
                        value={item?.answerOptions[3]?.answerText}
                        placeholder="Option D"
                        onChange={(e) =>
                          onOptionChange(index, 3, e.target.value)
                        }
                      />
                      <span>D</span>
                    </div>
                  </div>
                </div>
                <div
                  style={{
                    display: "flex",
                    marginBottom: 20,
                    width: "70%",
                  }}
                >
                  <div style={{ width: "20%" }}>Select the correct answer</div>
                  <Select
                    onChange={(value) => onAnswerCange(index, value)}
                    // value={item?.category}
                    placeholder="Select correct answer"
                    style={{ width: "20%" }}
                  >
                    {[
                      { key: "A", value: 0 },
                      { key: "B", value: 1 },
                      { key: "C", value: 2 },
                      { key: "D", value: 3 },
                    ]?.map((item, index) => (
                      <Option key={item.key} value={item.value}>
                        {item.key}
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

export default AddSpecTestSet;
