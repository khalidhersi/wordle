import React, { useState } from "react";
import "./KeyBoard.scss";

const KeyBoard = (props) => {
  const { handleClick, handleReset, handleSubmit } = props;

  return (
    <div className="keyboard">
      <div className="keyboard__row">
        <button id="submit" onClick={handleSubmit} className="key submit">
          SUBMIT
        </button>
        </div>
      <div className="keyboard__row">
        <button id="q" onClick={handleClick} className={`key`}>
          Q
        </button>
        <button id="w" onClick={handleClick} className="key">
          W
        </button>
        <button id="e" onClick={handleClick} className="key">
          E
        </button>
        <button id="r" onClick={handleClick} className="key">
          R
        </button>
        <button id="t" onClick={handleClick} className="key">
          T
        </button>
        <button id="y" onClick={handleClick} className="key">
          Y
        </button>
        <button id="u" onClick={handleClick} className="key">
          U
        </button>
        <button id="i" onClick={handleClick} className="key">
          I
        </button>
        <button id="o" onClick={handleClick} className="key">
          O
        </button>
        <button id="p" onClick={handleClick} className="key">
          P
        </button>
      </div>

      <div className="keyboard__row">
        <button id="a" onClick={handleClick} className="key">
          A
        </button>
        <button id="s" onClick={handleClick} className="key">
          S
        </button>
        <button id="d" onClick={handleClick} className="key">
          D
        </button>
        <button id="f" onClick={handleClick} className="key">
          F
        </button>
        <button id="g" onClick={handleClick} className="key">
          G
        </button>
        <button id="h" onClick={handleClick} className="key">
          H
        </button>
        <button id="j" onClick={handleClick} className="key">
          J
        </button>
        <button id="k" onClick={handleClick} className="key">
          K
        </button>
        <button id="l" onClick={handleClick} className="key">
          L
        </button>
      </div>
      <div className="keyboard__row">
        <button id="enter" onClick={handleReset} className="key enter">
          RESET
        </button>
        <button id="z" onClick={handleClick} className="key">
          Z
        </button>
        <button id="x" onClick={handleClick} className="key">
          X
        </button>
        <button id="c" onClick={handleClick} className="key">
          C
        </button>
        <button id="v" onClick={handleClick} className="key">
          V
        </button>
        <button id="b" onClick={handleClick} className="key">
          B
        </button>
        <button id="n" onClick={handleClick} className="key">
          N
        </button>
        <button id="m" onClick={handleClick} className="key">
          M
        </button>
        <button id="backspoace" className="key backspace">
          <i className="fa-solid fa-delete-left"></i>
        </button>
      </div>
    </div>
  );
};

export default KeyBoard;
