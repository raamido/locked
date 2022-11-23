import React, { useEffect } from "react";
import { Link } from "react-router-dom";

export default function Login() {
  useEffect(() => {
    document.title = "Locked — Login";
  }, []);

  const handleFormSubmission = (e) => {
    e.preventDefault();
    console.log("ready to submit!");
  };

  return (
    <form onSubmit={handleFormSubmission}>
      <h1 className="heading">LOGIN</h1>
      <div className="text-field">
        <input
          type="email"
          name="Email"
          placeholder="Email"
          required
          pattern="^[a-z]{4,20}([0-9]{1,6})?@(gmail|yahoo|outlook).com$"
        />
      </div>
      <div className="text-field">
        <input
          type="password"
          name="Password"
          placeholder="Password"
          required
          minLength="7"
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
