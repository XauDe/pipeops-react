import React from 'react';
import { Link } from 'react-router-dom';
import './Register.css';

const Register = () => {
  return (
    <div className="register-container">
      <div className="register-left">
        <h1>PickSkill</h1>
        <p>Start planning and prioritizing your skill development journey.</p>
      </div>
      <div className="register-right">
        <form className="register-form">
          <h2  style={{color:'white', textShadow:"0 0 7px #fff",}} >Register</h2>
          <input type="text" placeholder="First Name" />
          <input type="text" placeholder="Last Name" />
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <input type="password" placeholder="Confirm Password" />
          <select>
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
          <button type="submit">Register</button>
        </form>
        <Link to="/">Already have an account? Login</Link>
      </div>
    </div>
  );
};

export default Register;
