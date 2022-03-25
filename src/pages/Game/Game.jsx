import React from 'react'
import Tile from '../../components/Tile/Tile';
import "./Game.scss";

const Game = () => {
  return (
    <div className='gameboard'>
        <div className="gameboard__col">
            <Tile className="gameboard__tile"/>
            <Tile className="gameboard__tile"/>
            <Tile className="gameboard__tile"/>
            <Tile className="gameboard__tile"/>
            <Tile className="gameboard__tile"/>
            <Tile className="gameboard__tile"/>
            </div>
        <div className="gameboard__col">
            <Tile className="gameboard__tile--correct-place"/>
            <Tile className="gameboard__tile"/>
            <Tile className="gameboard__tile"/>
            <Tile className="gameboard__tile"/>
            <Tile className="gameboard__tile"/>
            <Tile className="gameboard__tile"/>
            </div>
        <div className="gameboard__col">
            <Tile className="gameboard__tile"/>
            <Tile className="gameboard__tile"/>
            <Tile className="gameboard__tile"/>
            <Tile className="gameboard__tile"/>
            <Tile className="gameboard__tile"/>
            <Tile className="gameboard__tile"/>
            </div>
        <div className="gameboard__col">
            <Tile className="gameboard__tile"/>
            <Tile className="gameboard__tile"/>
            <Tile className="gameboard__tile"/>
            <Tile className="gameboard__tile"/>
            <Tile className="gameboard__tile"/>
            <Tile className="gameboard__tile"/>
            </div>
        <div className="gameboard__col">
            <Tile className="gameboard__tile"/>
            <Tile className="gameboard__tile"/>
            <Tile className="gameboard__tile"/>
            <Tile className="gameboard__tile"/>
            <Tile className="gameboard__tile"/>
            <Tile className="gameboard__tile"/>
            </div>
    </div>
  )
}

export default Game