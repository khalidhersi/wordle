import React from "react";
import KeyBoard from "../../components/KeyBoard/KeyBoard";
import TileRow from "../../components/TileRow/TileRow";
import "./Game.scss";

const letters = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
console.log(letters);

const Game = () => {
  return (
    <div className="game">
      <div className="gameboard">
        <TileRow />
        <TileRow />
        <TileRow />
        <TileRow />
        <TileRow />
        <TileRow />
      </div>
      <div className="game__keyboard">
        <KeyBoard />
      </div>
    </div>
  );
};

export default Game;
