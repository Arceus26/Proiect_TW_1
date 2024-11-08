export default function Validation(values) {
  let errors = {};
  const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const password_pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,}$/;

  if (values.name === "") {
    errors.name = "Name should not be empty";
  } else {
    errors.name = "";
  }

  if (values.email === "") {
    errors.email = "Email should not be empty";
  } else if (!email_pattern.test(values.email)) {
    errors.email = "Email didn't match the required format";
  } else {
    errors.email = "";
  }

  console.log("Password value:", values.password);
  if (values.password === "") {
    errors.password = "Password should not be empty";
  } else if (!password_pattern.test(values.password)) {
    console.log("Password validation failed");
    errors.password = "Password must contain at least 8 characters, including uppercase, lowercase, and numbers";
  } else {
    errors.password = "";
  }

  return errors;
}
