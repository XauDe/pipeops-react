import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css';

const Login = () => {
  return (
    <div className="login-container">
      <div className="login-left">
        <h1>Welcome to PickSkill</h1>
        <p>Plan and prioritize your skill development with ease.</p>
      </div>
      <div className="login-right">
        <form className="login-form">
          <h2 style={{color:'white', textShadow:"0 0 7px #fff",}}>Login</h2>
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <button type="submit">Login</button>
        </form>
        <Link to="/app">Go to Main App</Link>
        <Link to="/register">Don't have an account? Register</Link>
      </div>
    </div>
  );
};

export default Login;
