import React from 'react';
import '../Styles/Login.css';

function Login() {
  return (
    <div className="page">
    <div className="login-container">
      <h1>Log in</h1>
      <form className="login-form">
        <label htmlFor="email">Email</label>
        <input type="email" id="email" placeholder="Enter your email" required />
        
        <label htmlFor="password">Password</label>
        <input type="password" id="password" placeholder="Enter your password" required />
        
        <button type="submit">Log in</button>
      </form>
    </div>
    </div>
  );
}

export default Login;
