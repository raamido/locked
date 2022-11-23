import React, { useEffect } from "react";
import { Link } from "react-router-dom";

export default function Signup() {
  useEffect(() => {
    document.title = "Locked — Sign UP";
  }, []);

  const handleFormSubmission = (e) => {
    e.preventDefault();
    console.log("ready to submit!");
  };

  return (
    <form onSubmit={handleFormSubmission}>
      <h1 className="heading">SIGN UP</h1>
      <div className="group">
        <div className="text-field">
          <input
            type="text"
            name="First Name"
            placeholder="First Name"
            required
            pattern="[a-z]{2,15}"
          />
        </div>
        <div className="text-field">
          <input
            type="text"
            name="Last Name"
            placeholder="Last Name"
            required
            pattern="[a-z]{2,15}"
          />
        </div>
      </div>
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
          GET Your KEY
        </button>
      </div>
      <p style={{ margin: "20px 0" }}>
        <Link to="/">
          Have an Account Already? <b>Login!</b>
        </Link>
      </p>
    </form>
  );
}
