import { signOut } from "firebase/auth";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../Contexts/AuthContext";
import { auth } from "../firebaseConfig";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Home() {
  const navigate = useNavigate();
  const [user, setUser] = useAuth();

  useEffect(() => {
    toast.success(`authenticated as ${user.firstName} ${user.lastName}`);
  }, []);

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
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable={false}
        pauseOnHover={false}
        theme="colored"
      />
    </div>
  );
}
