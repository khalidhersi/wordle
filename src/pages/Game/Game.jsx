import React from "react";
import KeyBoard from "../../components/KeyBoard/KeyBoard";
import Tile from "../../components/Tiles/Tiles";
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
        <Tile />
      </div>
      <div className="game__keyboard">
        <KeyBoard />
      </div>
    </div>
  );
};

export default Game;
