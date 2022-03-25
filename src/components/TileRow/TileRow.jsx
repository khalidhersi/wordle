import React from 'react'
import "./TileRow.scss";

const TileRow = () => {
  return (
    <div className="gameboard__row">
        <div className="gameboard__tile">A</div>
        <div className="gameboard__tile --correct-place">B</div>
        <div className="gameboard__tile --incorrect-letter">C</div>
        <div className="gameboard__tile --correct-letter">D</div>
        <div className="gameboard__tile">E</div>
    </div>
  )
}

export default TileRow