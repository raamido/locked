import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Form from "./Components/Form";
import Home from "./Components/Home";
import Login from "./Components/Login";
import Signup from "./Components/Signup";
import { AuthProvider } from "./Contexts/AuthContext";

export default function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Form />}>
            <Route index element={<Login />} />
            <Route path="signup" element={<Signup />} />
          </Route>
          <Route path="/home" element={<Home />}></Route>
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}
