import React from 'react'
import "./Win.scss";
import { Link } from "react-router-dom";

const Win = (props) => {
    const {word} = props
  return (
    <div className='win'>
        <h1 className='you'>YOU </h1>
        <h1 className='win--h1'>WIN!</h1>
        <p>The Word was "{word.toUpperCase()}"</p>
        <Link className='reset' to="/">
            PLAY AGAIN
        </Link>
    </div>
  )
}

export default Win