import React from 'react'
import "./GameOver.scss";
import { Link } from "react-router-dom";

const GameOver = (props) => {
    const {word} = props
  return (
    <div className='gameover'>
        <h1 className='game'>Game </h1>
        <h1 className='over'>Over!</h1>
        <p>The Word was "{word.toUpperCase()}"</p>
        <Link className='reset'  to="/">
            PLAY AGAIN
        </Link>
    </div>
  )
}

export default GameOver