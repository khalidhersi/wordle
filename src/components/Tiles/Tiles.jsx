import React, {useState} from "react";
import "./Tiles.scss";

const Tiles = (props) => {

  const {text1 ,text2, text3, text4, text5} = props

  return (
    <div className="gameboard">
      <div className="gameboard__row">
        <div id="1" className="gameboard__tile" >{text1}</div>
        <div id="2" className="gameboard__tile  --correct-place">{text2}</div>
        <div id="3" className="gameboard__tile  --incorrect-letter">{text3}</div>
        <div id="4" className="gameboard__tile  --correct-letter">{text4}</div>
        <div id="5" className="gameboard__tile">{text5}</div>
      </div>
      <div className="gameboard__row">
        <div id="6" className="gameboard__tile" >A</div>
        <div id="7" className="gameboard__tile  --correct-place">B</div>
        <div id="8" className="gameboard__tile  --incorrect-letter">C</div>
        <div id="9" className="gameboard__tile  --correct-letter">D</div>
        <div id="10" className="gameboard__tile">E</div>
      </div>
      <div className="gameboard__row">
        <div id="11" className="gameboard__tile" >A</div>
        <div id="12" className="gameboard__tile  --correct-place">B</div>
        <div id="13" className="gameboard__tile  --incorrect-letter">C</div>
        <div id="14" className="gameboard__tile  --correct-letter">D</div>
        <div id="15" className="gameboard__tile" >E</div>
      </div>
      <div className="gameboard__row">
        <div id="16" className="gameboard__tile" >A</div>
        <div id="17" className="gameboard__tile  --correct-place">B</div>
        <div id="18" className="gameboard__tile  --incorrect-letter">C</div>
        <div id="19" className="gameboard__tile  --correct-letter">D</div>
        <div id="20" className="gameboard__tile" >E</div>
      </div>
      <div className="gameboard__row">
        <div id="21" className="gameboard__tile" >A</div>
        <div id="22" className="gameboard__tile  --correct-place">B</div>
        <div id="23" className="gameboard__tile  --incorrect-letter">C</div>
        <div id="24" className="gameboard__tile  --correct-letter">D</div>
        <div id="25" className="gameboard__tile" >E</div>
      </div>
      <div className="gameboard__row">
        <div id="26" className="gameboard__tile" >A</div>
        <div id="27" className="gameboard__tile  --correct-place">B</div>
        <div id="28" className="gameboard__tile  --incorrect-letter">C</div>
        <div id="29" className="gameboard__tile  --correct-letter">D</div>
        <div id="30" className="gameboard__tile" >E</div>
      </div>
    </div>
  );
};

export default Tiles;
