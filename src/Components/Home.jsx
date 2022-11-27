import { signOut } from "firebase/auth";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../Contexts/AuthContext";
import { auth } from "../firebaseConfig";

export default function Home() {
  const navigate = useNavigate();
  const [user, setUser] = useAuth();

  const handleLogout = () => {
    signOut(auth).then(() => {
      setUser({
        firstName: "",
        lastName: "",
        email: "",
        loggedIn: false,
      });
      navigate("/");
    });
  };

  return (
    <div className="home">
      <div className="card">
        <h1>Hello {user.firstName}</h1>
        <button className="cta-button" onClick={handleLogout}>
          Logout
        </button>
      </div>
    </div>
  );
}
