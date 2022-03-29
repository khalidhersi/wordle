import React, { useEffect, useState } from 'react'
import "./Timer.scss";

const Timer = (props) => {
    const [timer, setTimer] = useState(120);
    const {timerOff} = props
    let classNameModifier = "";

    useEffect(() => {
        timer > 0 && setTimeout(() => setTimer(timer - 1), 1000);
      }, [timer]);

      if(timerOff){
        classNameModifier = "timer__off"
      }

  return (
    <div className='timer'>
        <h2 className={`timer__text ${classNameModifier}`}>{timer}</h2>
    </div>
  )
}

export default Timer