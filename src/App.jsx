import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Form from "./Components/Form";
import Home from "./Components/Home";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Form />} />
        <Route path="/home" element={<Home />}></Route>
      </Routes>
    </BrowserRouter>
  );
}
