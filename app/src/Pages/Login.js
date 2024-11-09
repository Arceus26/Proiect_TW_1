import React, {useState} from 'react';
import '../Styles/Login.css';
import { Link, useNavigate } from 'react-router-dom';
import Validation from './LoginValidation';
import axios from 'axios'

function Login() {

  const [values,setValues] = useState({
    email: '',
    password: ''
  })

  const navigate = useNavigate();
  const [errors, setErrors] = useState({})
  const handleInput = (event) => {
    setValues(prev => ({...prev, [event.target.name]: [event.target.value]}))
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const validationErrors = Validation(values);
    setErrors(validationErrors);
    if (!validationErrors.email && !validationErrors.password) {
        axios.post('http://localhost:8081/login', values)
        .then(res => {
            if (res.data === "Success") {
                navigate('/');
            } else {
                alert("No record existed");
            }
        })
        .catch(err => console.log(err));
    }
};

  return (
    <div className="page">
      <div className="login-container">
        <h1>Log in</h1>
        <form action="" onSubmit={handleSubmit} className="login-form">
            <label htmlFor="email"><strong>Email</strong></label>
            <input type="email" className="input-field" onChange={handleInput} name="email" placeholder="Enter email" />
            {errors.email && <span className='text-danger'>{errors.email}</span>}

            <label htmlFor="password"><strong>Password</strong></label>
            <input type="password" className="input-field" onChange={handleInput} name="password" placeholder="Enter password" />
            {errors.password && <span className='text-danger'>{errors.password}</span>}

          <button type="submit" className="login-button">Log in</button>
          <p className="terms-text">By logging in, you agree to our terms and policies</p>
          <Link to="/signup" type="button" className="create-account-button">Create account</Link>
        </form>
      </div>
    </div>
  );
}

export default Login;
