import React from "react";
import "./GameOver.scss";

const GameOver = (props) => {
  const { word, toggleGameOver } = props;
  return (
    <div className="gameover">
      <h1 className="game">Game </h1>
      <h1 className="over">Over!</h1>
      <p>The Word was "{word.toUpperCase()}"</p>
      <button className="reset" onClick={toggleGameOver}>
        PLAY AGAIN
      </button>
    </div>
  );
};

export default GameOver;
