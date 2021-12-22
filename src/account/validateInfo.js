import validator from "validator";

export default function validateInfo(values) {
  let errors = {};

  if (!values.firstname.trim()) {
    errors.firstname = "firstname required";
  } else if (!/^[A-Za-z]+/.test(values.firstname.trim())) {
    errors.firstname = "Enter a valid firstname";
  }

  if (!values.lastname.trim()) {
    errors.lastname = "lastname required";
  } else if (!/^[A-Za-z]+/.test(values.lastname.trim())) {
    errors.lastname = "Enter a valid lastname";
  }

  if (!values.email) {
    errors.email = "Email required";
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = "Email address is invalid";
  }

  if (!values.username.trim()) {
    errors.username = "Username required";
  }

  if (!values.levelStrand.trim()) {
    errors.levelStrand = "Level/Strand required";
  }

  if (!values.password) {
    errors.password = "Password is required";
  } else if (values.password.length < 8) {
    errors.password = "Password needs to be 8 characters";
  }

  if (!values.password2) {
    errors.password2 = "Confirm Password is required";
  } else if (values.password2 !== values.password) {
    errors.password2 = "Passwords do not match";
  }
  return errors;
}
