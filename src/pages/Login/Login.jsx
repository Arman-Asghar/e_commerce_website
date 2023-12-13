import React from 'react';
import './Login.css';

const LoginSignup = () => {
  return (
    <div className='loginsignup'>
      <div className="loginsignup-container">
        <h1>Sign Up</h1>
        <form>
          <div className="loginsignup-fields">
            <input type="text" value='Your Name' />
            <input type="email" value='Email Address' />
            <input type="password" value='Password' />
          </div>
          <button type="submit">Continue</button>
        </form>
        <p className="loginsignup-login">Already have an account? <span>Login here</span></p>
        <div className="loginsignup-agree">
          <input type="checkbox" />
          <p>By continuing, I agree to the terms of use & privacy policy.</p>
        </div>
      </div>
    </div>
  );
};

export default LoginSignup;
