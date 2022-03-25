import React from "react";
import Tile from "../../components/Tile/Tile";
import "./Game.scss";

const Game = () => {
  return (
    <div className="gameboard">
      <div className="gameboard__row">
        <div className="gameboard__tile">A</div>
        <div className="gameboard__tile --correct-place">B</div>
        <div className="gameboard__tile --incorrect-letter">F</div>
        <div className="gameboard__tile"></div>
        <div className="gameboard__tile"></div>
      </div>
      <div className="gameboard__row">
        <div className="gameboard__tile"></div>
        <div className="gameboard__tile"></div>
        <div className="gameboard__tile --correct-letter">E</div>
        <div className="gameboard__tile"></div>
        <div className="gameboard__tile"></div>
      </div>
      <div className="gameboard__row">
        <div className="gameboard__tile"></div>
        <div className="gameboard__tile"></div>
        <div className="gameboard__tile"></div>
        <div className="gameboard__tile"></div>
        <div className="gameboard__tile"></div>
      </div>
      <div className="gameboard__row">
        <div className="gameboard__tile"></div>
        <div className="gameboard__tile"></div>
        <div className="gameboard__tile"></div>
        <div className="gameboard__tile"></div>
        <div className="gameboard__tile"></div>
      </div>
      <div className="gameboard__row">
        <div className="gameboard__tile"></div>
        <div className="gameboard__tile"></div>
        <div className="gameboard__tile"></div>
        <div className="gameboard__tile"></div>
        <div className="gameboard__tile"></div>
      </div>
      <div className="gameboard__row">
        <div className="gameboard__tile"></div>
        <div className="gameboard__tile"></div>
        <div className="gameboard__tile"></div>
        <div className="gameboard__tile"></div>
        <div className="gameboard__tile"></div>
      </div>
    </div>
  );
};

export default Game;
