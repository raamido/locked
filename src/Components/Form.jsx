import React, { useEffect, useRef } from "react";
import { Outlet } from "react-router-dom";
import headerIcon from "/header_icon.svg";
import coverImage from "/image.jpg";

export default function Form() {
  const leftSection = useRef();

  useEffect(() => {
    leftSection.current.style.backgroundImage = `url(${coverImage})`;
  }, []);

  return (
    <div className="form">
      <section className="left" ref={leftSection}></section>
      <section className="right">
        <header align="center">
          <img src={headerIcon} alt="logo" width="120" />
        </header>
        <Outlet />
      </section>
    </div>
  );
}
