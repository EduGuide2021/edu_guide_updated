import React, { useState } from "react";
import "./Specialized.css";
import { questionsData } from "./spectestData";

import { Link, useHistory } from "react-router-dom";
import { UPDATE_SPECIAL_TEST } from "../account/Graphql/Mutation";
import { useMutation } from "@apollo/client";
export default function BSCompSci(props) {
	const history = useHistory();
	const [questions, setQuestions] = useState(
		questionsData[props?.history?.location?.state?.selected]
			?.sort(() => 0.5 - Math.random())
			?.slice(0, 10)
	);

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
					<div className="answer-section">
						{questions[currentQuestion].answerOptions.map((answerOption) => (
							<button
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
								setQuestions(
									questionsData[props?.history?.location?.state?.selected]
										?.sort(() => 0.5 - Math.random())
										?.slice(0, 10)
								);
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
