import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebaseConfig";

export default function Login() {
  useEffect(() => {
    document.title = "Locked — Login";
  }, []);

  const handleFormSubmission = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(
      auth,
      loginFormCredentials.email,
      loginFormCredentials.password
    );
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormCredentials({
      ...loginFormCredentials,
      [name]: value,
    });
  };

  const loginCredentials = {
    email: "",
    password: "",
  };

  const [loginFormCredentials, setFormCredentials] = useState(loginCredentials);

  return (
    <form onSubmit={handleFormSubmission}>
      <h1 className="heading">LOGIN</h1>
      <div className="text-field">
        <input
          type="email"
          name="email"
          placeholder="Email"
          required
          pattern="^[a-z]{4,20}([0-9]{1,6})?@(gmail|yahoo|outlook).com$"
          onChange={handleChange}
        />
      </div>
      <div className="text-field">
        <input
          type="password"
          name="password"
          placeholder="Password"
          required
          minLength="7"
          onChange={handleChange}
        />
      </div>
      <div align="right">
        <button type="submit" className="cta-button">
          UNLOCK
        </button>
      </div>
      <p style={{ margin: "20px 0" }}>
        <Link to="signup">
          No Account? <b>Sign UP Now!</b>
        </Link>
      </p>
    </form>
  );
}
