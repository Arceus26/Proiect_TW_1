import React, { useState } from 'react';
import '../Styles/Login.css';
import { Link, useNavigate } from 'react-router-dom';
import Validation from './SignupValidation';
import axios from 'axios';

function Signup() {
    const [values, setValues] = useState({
        name: '',
        email: '',
        password: ''
    });
    const navigate = useNavigate();
    const [errors, setErrors] = useState({});

    const handleInput = (event) => {
        setValues(prev => ({ ...prev, [event.target.name]: event.target.value }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        
        const validationErrors = Validation(values);
        setErrors(validationErrors);

        if (!validationErrors.name && !validationErrors.email && !validationErrors.password) {
            axios.post('http://localhost:8081/signup', values)
                .then(res => {
                    navigate('/login');
                })
                .catch(err => console.log(err));
        }
    };

    return (
        <div className="page">
            <div className="login-container">
                <h1>Sign Up</h1>
                <form action="" className="login-form" onSubmit={handleSubmit}>
                    <label htmlFor="name"><strong>Name</strong></label>
                    <input type="text" className="input-field" onChange={handleInput} name="name" placeholder="Enter name" />

                    {errors.name && <span className='text-danger'>{errors.name}</span>}

                    <label htmlFor="email">Email</label>
                    <input type="email" className="input-field" onChange={handleInput} name="email" placeholder="Enter email" />

                    {errors.email && <span className='text-danger'>{errors.email}</span>}

                    <label htmlFor="password">Password</label>
                    <input type="password" className="input-field" onChange={handleInput} name="password" placeholder="Enter password" />

                    {errors.password && <span className='text-danger'>{errors.password}</span>}

                    <button type="submit" className="login-button">Create account</button>
                    <p className="terms-text">By creating an account, you agree to our terms and policies</p>
                    <Link to="/login" className="login-link">Already have an account? Log in</Link>
                </form>
            </div>
        </div>
    );
}

export default Signup;
