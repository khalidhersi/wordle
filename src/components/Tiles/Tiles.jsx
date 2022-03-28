import React, { useState } from "react";
import "./Tiles.scss";

const Tiles = (props) => {
  const {
    text1,
    text2,
    text3,
    text4,
    text5,
    classModifier1,
    classModifier2,
    classModifier3,
    classModifier4,
    classModifier5,
    text6,
    text7,
    text8,
    text9,
    text10,
    classModifier6,
    classModifier7,
    classModifier8,
    classModifier9,
    classModifier10,
    text11,
    text12,
    text13,
    text14,
    text15,
    classModifier11,
    classModifier12,
    classModifier13,
    classModifier14,
    classModifier15,
    text16,
    text17,
    text18,
    text19,
    text20,
    classModifier16,
    classModifier17,
    classModifier18,
    classModifier19,
    classModifier20,
    text21,
    text22,
    text23,
    text24,
    text25,
    classModifier21,
    classModifier22,
    classModifier23,
    classModifier24,
    classModifier25,
    text26,
    text27,
    text28,
    text29,
    text30,
    classModifier26,
    classModifier27,
    classModifier28,
    classModifier29,
    classModifier30,
  } = props;

  return (
    <div className="gameboard">
      <div className="gameboard__row">
        <div className={`gameboard__tile ${classModifier1}`}>{text1}</div>
        <div className={`gameboard__tile ${classModifier2}`}>{text2}</div>
        <div className={`gameboard__tile ${classModifier3}`}>{text3}</div>
        <div className={`gameboard__tile ${classModifier4}`}>{text4}</div>
        <div className={`gameboard__tile ${classModifier5}`}>{text5}</div>
      </div>
      <div className="gameboard__row">
        <div className={`gameboard__tile ${classModifier6}`}>{text6}</div>
        <div className={`gameboard__tile ${classModifier7}`}>{text7}</div>
        <div className={`gameboard__tile ${classModifier8}`}>{text8}</div>
        <div className={`gameboard__tile ${classModifier9}`}>{text9}</div>
        <div className={`gameboard__tile ${classModifier10}`}>{text10}</div>
      </div>
      <div className="gameboard__row">
        <div className={`gameboard__tile ${classModifier11}`}>{text11}</div>
        <div className={`gameboard__tile ${classModifier12}`}>{text12}</div>
        <div className={`gameboard__tile ${classModifier13}`}>{text13}</div>
        <div className={`gameboard__tile ${classModifier14}`}>{text14}</div>
        <div className={`gameboard__tile ${classModifier15}`}>{text15}</div>
      </div>
      <div className="gameboard__row">
        <div className={`gameboard__tile ${classModifier16}`}>{text16}</div>
        <div className={`gameboard__tile ${classModifier17}`}>{text17}</div>
        <div className={`gameboard__tile ${classModifier18}`}>{text18}</div>
        <div className={`gameboard__tile ${classModifier19}`}>{text19}</div>
        <div className={`gameboard__tile ${classModifier20}`}>{text20}</div>
      </div>
      <div className="gameboard__row">
        <div className={`gameboard__tile ${classModifier21}`}>{text21}</div>
        <div className={`gameboard__tile ${classModifier22}`}>{text22}</div>
        <div className={`gameboard__tile ${classModifier23}`}>{text23}</div>
        <div className={`gameboard__tile ${classModifier24}`}>{text24}</div>
        <div className={`gameboard__tile ${classModifier25}`}>{text25}</div>
      </div>
      <div className="gameboard__row">
        <div className={`gameboard__tile ${classModifier26}`}>{text26}</div>
        <div className={`gameboard__tile ${classModifier27}`}>{text27}</div>
        <div className={`gameboard__tile ${classModifier28}`}>{text28}</div>
        <div className={`gameboard__tile ${classModifier29}`}>{text29}</div>
        <div className={`gameboard__tile ${classModifier30}`}>{text30}</div>
      </div>
    </div>
  );
};

export default Tiles;
