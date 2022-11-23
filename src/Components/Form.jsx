import React from "react";
import { Outlet } from "react-router-dom";

export default function Form() {
  return (
    <div className="form">
      <section className="left"></section>
      <section className="right">
        <header align="center">
          <img src="header_icon.svg" alt="logo" width="120" />
        </header>
        <Outlet />
      </section>
    </div>
  );
}
