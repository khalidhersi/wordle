import React, { useState } from "react";
import KeyBoard from "../../components/KeyBoard/KeyBoard";
import Tile from "../../components/Tiles/Tiles";
import words from "../../assets/data/words.json";
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

const Game = (props) => {
    const [text1, setText1] = useState("")
    const [text2, setText2] = useState("")
    const [text3, setText3] = useState("")
    const [text4, setText4] = useState("")
    const [text5, setText5] = useState("")
    const [text6, setText6] = useState("")
    const [counter, setCounter] = useState(1)
    const {word} = props

    const handleClick = (event) => {
        if(counter === 1){
        setText1(event.target.innerHTML)
        setCounter(counter + 1);
        event.target.className = "key key--active"
        }
        if(counter === 2){
            setText2(event.target.innerHTML)
            setCounter(counter + 1);
            event.target.className = "key key--active"
        }if(counter === 3){
            setText3(event.target.innerHTML)
            setCounter(counter + 1);
            event.target.className = "key key--active"
        }
        if(counter === 4){
            setText4(event.target.innerHTML)
            setCounter(counter + 1);
            event.target.className = "key key--active"
        }
        if(counter === 5){
            setText5(event.target.innerHTML)
            setCounter(counter + 1);
            event.target.className = "key key--active"
        }    
        if(counter === 6 && classModifier1 != "--correct-place" && classModifier2 != "--correct-place" && classModifier3 != "--correct-place" && classModifier4 != "--correct-place" && classModifier5 != "--correct-place"){
            setText6(event.target.innerHTML)
            setCounter(counter + 1);
            event.target.className = "key key--active"
        }    
        }
    


    
  let wordArr = word.toUpperCase().split("")
  console.log(wordArr)

  let classModifier1 = ""
  if (text1 === wordArr[0] && text5.length === 1  ){
    classModifier1 = "--correct-place" 
  } else if (wordArr.includes(text1) && text5.length === 1){
    classModifier1 = "--correct-letter"
  } else if (text1 != wordArr[1] && text5.length === 1){
    classModifier1 = "--incorrect-letter"
  } else classModifier1 = ""

  let classModifier2 = ""
  if (text2 === wordArr[1] && text5.length === 1  ){
    classModifier2 = "--correct-place" 
  } else if (wordArr.includes(text2) && text5.length === 1){
    classModifier2 = "--correct-letter"
  } else if (text2 != wordArr[1] && text5.length === 1){
    classModifier2 = "--incorrect-letter"
  } else classModifier2 = ""

  let classModifier3 = ""
  if (text3 === wordArr[2] && text5.length === 1  ){
    classModifier3 = "--correct-place" 
  } else if (wordArr.includes(text3) && text5.length === 1){
    classModifier3 = "--correct-letter"
  } else if (text3 != wordArr[2] && text5.length === 1){
    classModifier3 = "--incorrect-letter"
  } else classModifier3 = ""

  let classModifier4 = ""
  if (text4 === wordArr[3] && text5.length === 1  ){
    classModifier4 = "--correct-place" 
  } else if (wordArr.includes(text4) && text5.length === 1){
    classModifier4 = "--correct-letter"
  } else if (text4 != wordArr[3] && text5.length === 1){
    classModifier4 = "--incorrect-letter"
  } else classModifier4 = ""

   let classModifier5 = ""
  if (text5 === wordArr[4] && text5.length === 1  ){
    classModifier5 = "--correct-place" 
  } else if (wordArr.includes(text5) && text5.length === 1){
    classModifier5 = "--correct-letter"
  }
    else if (text5 != wordArr[4] && text5.length === 1){
    classModifier5 = "--incorrect-letter"
  } else classModifier5 = ""
  
  let classModifier6 = ""
  if (text5 === wordArr[4] && text5.length === 1  ){
    classModifier6 = "--correct-place" 
  } else if (wordArr.includes(text5) && text5.length === 1){
    classModifier6 = "--correct-letter"
  }
    else if (text5 != wordArr[4] && text5.length === 1){
    classModifier6 = "--incorrect-letter"
  } else classModifier6 = ""
 


  return (
    <div className="game">
      <div className="gameboard">
        <Tile text1={text1} text2={text2} 
        text3={text3} text4={text4} text5={text5}
        classModifier1={classModifier1} classModifier2={classModifier2}
        classModifier3={classModifier3} classModifier4={classModifier4}
        classModifier5={classModifier5} text6={text6}
        />
      </div>
      <div className="game__keyboard">
        <KeyBoard handleClick={handleClick} />
      </div>
    </div>
  );
};

export default Game;
