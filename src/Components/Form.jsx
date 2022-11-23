import React from "react";
import { Outlet } from "react-router-dom";

export default function Form() {
  return (
    <div className="form">
      <section className="left"></section>
      <section className="right">
        <Outlet />
      </section>
    </div>
  );
}
