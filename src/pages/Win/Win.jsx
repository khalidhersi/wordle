import React from "react";
import "./Win.scss";

const Win = (props) => {
  const { word, toggleWin } = props;
  return (
    <div className="win">
      <h1 className="you">YOU </h1>
      <h1 className="win--h1">WIN!</h1>
      <p>The Word was "{word.toUpperCase()}"</p>
      <button className="reset" onClick={toggleWin}>
        PLAY AGAIN
      </button>
    </div>
  );
};

export default Win;
