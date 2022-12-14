import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../Contexts/AuthContext";
import { auth } from "../firebaseConfig";

export default function Signup() {
  const navigate = useNavigate();
  const [user, setUser] = useAuth();

  useEffect(() => {
    document.title = "Locked — Sign UP";
  }, []);

  const handleFormSubmission = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(
      auth,
      formCredentials.email,
      formCredentials.password
    ).then(() => {
      updateProfile(auth.currentUser, {
        displayName: `${formCredentials.fName} ${formCredentials.lName}`,
      })
        .then((creds) => {
          const [fname, lname] = creds.user.displayName.split(" ");
          setUser({
            firstName: fname,
            lastName: lname,
            email: creds.user.email,
            loggedIn: true,
          });
          navigate("/home");
        })
        .catch((error) => console.log(error));
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormCredentials({
      ...formCredentials,
      [name]: value,
    });
  };

  const credentials = {
    fName: "",
    lName: "",
    email: "",
    password: "",
  };

  const [formCredentials, setFormCredentials] = useState(credentials);

  return (
    <form onSubmit={handleFormSubmission}>
      <h1 className="heading">SIGN UP</h1>
      <div className="group">
        <div className="text-field">
          <input
            type="text"
            name="fName"
            placeholder="First Name"
            required
            pattern="[a-z]{2,15}"
            value={formCredentials.fName}
            onChange={handleChange}
          />
        </div>
        <div className="text-field">
          <input
            type="text"
            name="lName"
            placeholder="Last Name"
            required
            pattern="[a-z]{2,15}"
            value={formCredentials.lName}
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="text-field">
        <input
          type="email"
          name="email"
          placeholder="Email"
          required
          pattern="^[a-z]{4,20}([0-9]{1,6})?@(gmail|yahoo|outlook).com$"
          value={formCredentials.email}
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
          value={formCredentials.password}
          onChange={handleChange}
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
