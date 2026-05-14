import React, { useState } from "react";
import "./SignupForm.css";

function SignupForm() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");


  const validateEmail = (value) => {
    if (!value.includes("@")) {
      setEmailError("Email must contain @");
      return false;
    } else {
      setEmailError("");
      return true;
    }
  };

  const validatePassword = (value) => {
    if (value.length < 6) {
      setPasswordError("Password must be at least 6 characters");
      return false;
    } else {
      setPasswordError("");
      return true;
    }
  };

 

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    validateEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    validatePassword(e.target.value);
  };

  
  
  const isFormValid =
    name && email && password && !emailError && !passwordError;

  const handleSubmit = (e) => {
    e.preventDefault();
    
    alert("Form submitted!"); 
  };

  return (
    <div className="signup-container">
      <h2>Signup Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name:</label>
          <input
            type="text"
            value={name}
            onChange={handleNameChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={handleEmailChange}
            required
          />
          {emailError && (
            <div className="error-text">{emailError}</div>
          )}
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={handlePasswordChange}
            required
          />
          {passwordError && (
            <div className="error-text">{passwordError}</div>
          )}
        </div>
        <button
          type="submit"
          disabled={!isFormValid}
          className="submit-btn"
        >
          Submit
        </button>
      </form>
      <div className="preview-box">
        <h3>Live Preview</h3>
        <p>
          <strong>Name:</strong> {name}
        </p>
        <p>
          <strong>Email:</strong> {email}
        </p>
        <p>
          <strong>Password:</strong> {password}
        </p>
      </div>
    </div>
  );
}

export default SignupForm;
