import React from "react";
import "./Nav.scss";

const Nav = () => {
  return (
    <div className="nav">
      <div className="nav__container">
        <div className="nav__container__left">
          <i class="fa-solid fa-circle-question nav__container__icon"></i>
        </div>
        <div className="nav__container__center">
          <h1 className="nav__container__text">WORDLE</h1>
        </div>
        <div className="nav__container__right">
          <i class="fa-solid fa-chart-simple nav__container__icon"></i>
          <i class="fa-solid fa-gear nav__container__icon"></i>
        </div>
      </div>
      <div className="nav__underline"></div>
    </div>
  );
};

export default Nav;
