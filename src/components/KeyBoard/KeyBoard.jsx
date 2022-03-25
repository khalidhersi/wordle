import React from "react";
import "./KeyBoard.scss";

const KeyBoard = () => {

    const handleClick = (event) => {
        console.log(event)
    }



  return (
    <div className="keyboard">
      <div className="keyboard__row">
        <button id="q" className="key">Q</button>
        <button id="w" className="key">W</button>
        <button id="e" className="key">E</button>
        <button id="r" className="key">R</button>
        <button id="t" className="key">T</button>
        <button id="y" className="key">Y</button>
        <button id="u" className="key">U</button>
        <button id="i" className="key">I</button>
        <button id="o" className="key">O</button>
        <button id="p" className="key">P</button>
      </div>

      <div className="keyboard__row">
        <button id="a" className="key">A</button>
        <button id="s" className="key">S</button>
        <button id="d" className="key">D</button>
        <button id="f" className="key">F</button>
        <button id="g" className="key">G</button>
        <button id="h" className="key">H</button>
        <button id="j" className="key">J</button>
        <button id="k" className="key">K</button>
        <button id="l" className="key">L</button>
      </div>
      <div className="keyboard__row">
        <button id="enter" className="key enter">ENTER</button>
        <button id="z" className="key">Z</button>
        <button id="x" className="key">X</button>
        <button id="c" className="key">C</button>
        <button id="v" className="key">V</button>
        <button id="b" className="key">B</button>
        <button id="n" className="key">N</button>
        <button id="m" className="key">M</button>
        <button id="backspace" className="key backspace"><i className="fa-solid fa-delete-left"></i></button>
      </div>
    </div>
  );
};

export default KeyBoard;
