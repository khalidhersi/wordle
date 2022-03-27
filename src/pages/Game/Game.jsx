import React, { useState } from "react";
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
    const [text1, setText1] = useState("")
    const [text2, setText2] = useState("")
    const [text3, setText3] = useState("")
    const [text4, setText4] = useState("")
    const [text5, setText5] = useState("")
    const [counter, setCounter] = useState(1)

    const handleClick = (event) => {
        event.target.className = "key key--active"
        if(counter === 1){
        setText1(event.target.innerHTML)
        setCounter(counter + 1);
        }
        if(counter === 2){
            setText2(event.target.innerHTML)
            setCounter(counter + 1);
        }if(counter === 3){
            setText3(event.target.innerHTML)
            setCounter(counter + 1);
            }
        if(counter === 4){
            setText4(event.target.innerHTML)
            setCounter(counter + 1);
            }
        if(counter === 5){
            setText5(event.target.innerHTML)
            setCounter(counter + 1);
            }    
    }



  return (
    <div className="game">
      <div className="gameboard">
        <Tile text1={text1} text2={text2} text3={text3} text4={text4} text5={text5}/>
      </div>
      <div className="game__keyboard">
        <KeyBoard handleClick={handleClick} />
      </div>
    </div>
  );
};

export default Game;
