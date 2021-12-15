import { useEffect, useState, useRef } from "react";
import { useHistory } from "react-router-dom";
import "./Account.css";
import axios from "axios";

import { Link } from "react-router-dom";
import { CREATE_USER } from "../account/Graphql/Mutation";
import { useMutation } from "@apollo/client";
import GLogin from "./GLogin";
import Form from "./Form";
import useForm from "./useForm";
import validate from "./validateInfo";
import { message } from "antd";

function useKey(key, cb) {
	const callbackRef = useRef(cb);
	useEffect(() => {
		callbackRef.current = cb;
	});

	useEffect(() => {
		function handle(event) {
			if (event.keyCode === 13) {
				callbackRef.current(event);
				<Link to="/login"></Link>;
			}
		}
		document.addEventListener("keypress", handle);
		return () => document.removeEventListener("keypress", handle);
	}, [key]);
}

function SignUp(props) {
	const { handleSignup, values, handleSubmit, errors } = useForm(validate);

	async function handlePost() {
		console.log(errors);
		let a = validate(values);
		if (Object.values(a)?.length === 0) {
			if ((values.username, values.password)) {
				try {
					const data = await createUser({
						variables: {
							email: values.email,
							name: values.name,
							username: values.username,
							levelStrand: values.levelStrand,
							school: values.school,
							password: values.password,
						},
					});
					if (data) {
						history.push("/login");
					}
				} catch (error) {
					message.error(error?.message || "something went wrong");
				}
			}
		}
	}

	async function handleEnter() {
		console.log(errors);
		// if (()) {
		//   try {
		//     const data= await createUser({
		//       variables: {
		//         email: values.email,
		//         name: values.name,
		//         username: values.username,
		//         levelStrand: values.levelStrand,
		//         school: values.school,
		//         password: values.password,
		//       },
		//     });
		//     if(data){
		//       history.push('/login')
		//     }
		//   } catch (error) {
		//     console.log(error)
		//   }

		// }
	}
	useKey("Enter", handleEnter);
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");

	const [createUser, { data, loading, error }] = useMutation(CREATE_USER);
	const history = useHistory();

	return (
		<div align="center">
			<h1>Create an Account</h1>
			<img src="./icons/Line.png" className="line"></img>
			<div align="center">
				
				<form className="sign-form" onSubmit={handleSubmit}>
					
					<div className="form-alignment" align="left"> 
						<label>
							Name:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
							<br className="br-line"></br>
							<input
								type="text"
								name="name"
								className="field-input"
								value={values.name}
								onChange={handleSignup}
							/>{" "}
							{errors.name && <p className="form-error">{errors.name}</p>}
						</label>
						<br></br>
						<label>
							Email:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
							<br className="br-line"></br>
							<input
								type="email"
								name="email"
								className="field-input"
								onChange={handleSignup}
							/>{" "}
							{errors.email && <p className="form-error">{errors.email}</p>}
						</label>
						<br></br>
						<label>
							Username:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
							<br className="br-line"></br>
							<input
								type="text"
								name="username"
								className="field-input"
								value={values.username}
								onChange={handleSignup}
							/>{" "}
							{errors.username && (
								<p className="form-error">{errors.username}</p>
							)}
						</label>
						<br></br>
						<label>
							Level/Strand:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
							<br className="br-line"></br>
							<input
								type="text"
								name="levelStrand"
								className="field-input"
								value={values.levelStrand}
								onChange={handleSignup}
							/>{" "}
							{errors.levelStrand && (
								<p className="form-error">{errors.levelStrand}</p>
							)}
						</label>
						<br></br>
						<label>
							School: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
							<br className="br-line"></br>
							<input 
								type="text"
								name="school"
								className="field-input"
								value={values.school}
								onChange={handleSignup}
							/>{" "}
						</label>
						<br></br>
						<label>
							Password: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
							</label>
							<br className="br-line"></br>
							<input
							align="right"
								type="password"
								name="password"
								className="field-input"
								value={values.password}
								onChange={handleSignup}
							/>{" "}
							{errors.password && (
								<p className="form-error">{errors.password}</p>
							)}
						
						<br></br>
						<label>
							Confirm Password: &nbsp;
							<br className="br-line"></br>
							<input
								type="password"
								name="password2"
								className="field-input"
								value={values.password2}
								onChange={handleSignup}
							/>{" "}
							{errors.password2 && (
								<p className="form-error"> {errors.password2}</p>
							)}
						</label>
						
					</div>
					<br></br>

					<p>
						By signing up, you agree to provide your information to create an
						EduGuide user account.
					</p>
					<button className="reg-btn" type="submit" onClick={handlePost}>
						Sign up
					</button>
				</form>
				<br></br>
				<br></br>
			</div>

			<p>
				Already have an account? <br></br> Log In{" "}
				<b>
					<Link to="/login" style={{ textDecoration: "none" }}>
						here
					</Link>
				</b>
			</p>
		</div>
	);
}

export default SignUp;
