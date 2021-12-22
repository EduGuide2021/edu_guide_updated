import React, { useEffect, useState } from "react";
import "./Specialized.css";
import { questionsData as questionsDummyData } from "./spectestData";

import { Link, useHistory } from "react-router-dom";
import { UPDATE_SPECIAL_TEST } from "../account/Graphql/Mutation";
import { useMutation, useQuery } from "@apollo/client";
import { GET_SPECIAL_TEST_SETS } from "../account/Graphql/Queries";
export default function BSCompSci(props) {
  const history = useHistory();
  const { data: questionsData, loading } = useQuery(GET_SPECIAL_TEST_SETS);
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    if (questionsData?.getSpecialTestSets?.length > 0) {
      const filteredquestionSets = questionsData?.getSpecialTestSets?.filter(
        (item) => item?.program === props?.history?.location?.state?.selected
      );
      if (filteredquestionSets?.length > 0) {
        setQuestions(
          JSON.parse(
            filteredquestionSets[
              Math.floor(Math.random() * filteredquestionSets?.length)
            ]?.questions
          )
        );
      } else {
        setQuestions(
          questionsDummyData[props?.history?.location?.state?.selected]
            ?.sort(() => 0.5 - Math.random())
            ?.slice(0, 10)
        );
      }
    }
  }, [questionsData]);

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);
  const userInfo = JSON.parse(localStorage.getItem("user"));
  const [updateSpecialTest, { error }] = useMutation(UPDATE_SPECIAL_TEST);

  const handleAnswerOptionClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
      updateSpecialTest({
        variables: {
          id: userInfo?.id,
          test_name: props?.history?.location?.state?.selected,
          test_score: score,
        },
      });
    }
  };

  if (loading || questions?.length === 0) {
    return <></>;
  }
  return (
    <div className="app" align="center">
      {showScore ? (
        <div
          className="score-section"
          style={{
            display: "flex",
            flexFlow: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <p>
            You scored {score} out of {questions.length}
          </p>
          <button
            className="reg-btn"
            onClick={() =>
              history.push(
                "/gencourses",
                props?.history?.location?.state?.topcourse
              )
            }
            to="/gencourses"
          >
            {" "}
            Finish{" "}
          </button>
        </div>
      ) : (
        <>
          <div className="question-section">
            <div className="question-count">
              <span>Question {currentQuestion + 1}</span>/{questions.length}
            </div>
            <div className="question-text">
              {questions[currentQuestion].questionText}
            </div>
          </div>
          <div
            className="answer-section"
            style={{
              display: "flex",
              flexWrap: "wrap",
              width: "80%",
              justifyContent: "space-around",
            }}
          >
            {questions[currentQuestion].answerOptions.map((answerOption) => (
              <button
                style={{ width: "20%", cursor: "pointer" }}
                onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}
              >
                {answerOption.answerText}
              </button>
            ))}
          </div>
          <div>
            <br></br>
            <button
              onClick={() => {
                if (questionsData?.getSpecialTestSets?.length > 0) {
                  const filteredquestionSets =
                    questionsData?.getSpecialTestSets?.filter(
                      (item) =>
                        item?.program ===
                        props?.history?.location?.state?.selected
                    );
                  if (filteredquestionSets?.length > 0) {
                    setQuestions(
                      JSON.parse(
                        filteredquestionSets[
                          Math.floor(
                            Math.random() * filteredquestionSets?.length
                          )
                        ]?.questions
                      )
                    );
                  } else {
                    setQuestions(
                      questionsDummyData[
                        props?.history?.location?.state?.selected
                      ]
                        ?.sort(() => 0.5 - Math.random())
                        ?.slice(0, 10)
                    );
                  }
                }
                setCurrentQuestion(0);
              }}
              className="reg-btn"
              type="reset"
            >
              Reset
            </button>
            <button
              onClick={() => {
                if (currentQuestion !== 0) {
                  setCurrentQuestion(currentQuestion - 1);
                }
              }}
              className="reg-btn"
            >
              Back
            </button>
            <button
              onClick={() => {
                if (currentQuestion !== questions?.length - 1) {
                  setCurrentQuestion(currentQuestion + 1);
                }
              }}
              className="reg-btn"
            >
              Skip
            </button>
          </div>
          <p className="bottom_p">
            <b>Make the right decision.</b>
          </p>
        </>
      )}
    </div>
  );
}
