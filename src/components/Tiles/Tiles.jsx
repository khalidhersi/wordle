import React, {useState} from "react";
import "./Tiles.scss";

const Tiles = (props) => {

  const {text1 ,text2, text3, text4, text5, classModifier1, classModifier2, classModifier3, classModifier4, classModifier5, classModifier6, text6} = props

//   let wordArr = word.toUpperCase().split("")
//   console.log(wordArr)

//   let classModifier1 = ""
//   if (text1 === wordArr[0] && text5.length === 1  ){
//     classModifier1 = "--correct-place" 
//   } else if (wordArr.includes(text1) && text5.length === 1){
//     classModifier1 = "--correct-letter"
//   } else if (text1 != wordArr[1] && text5.length === 1){
//     classModifier1 = "--incorrect-letter"
//   } else classModifier1 = ""

//   let classModifier2 = ""
//   if (text2 === wordArr[1] && text5.length === 1  ){
//     classModifier2 = "--correct-place" 
//   } else if (wordArr.includes(text2) && text5.length === 1){
//     classModifier2 = "--correct-letter"
//   } else if (text2 != wordArr[1] && text5.length === 1){
//     classModifier2 = "--incorrect-letter"
//   } else classModifier2 = ""

//   let classModifier3 = ""
//   if (text3 === wordArr[2] && text5.length === 1  ){
//     classModifier3 = "--correct-place" 
//   } else if (wordArr.includes(text3) && text5.length === 1){
//     classModifier3 = "--correct-letter"
//   } else if (text3 != wordArr[2] && text5.length === 1){
//     classModifier3 = "--incorrect-letter"
//   } else classModifier3 = ""

//   let classModifier4 = ""
//   if (text4 === wordArr[3] && text5.length === 1  ){
//     classModifier4 = "--correct-place" 
//   } else if (wordArr.includes(text4) && text5.length === 1){
//     classModifier4 = "--correct-letter"
//   } else if (text4 != wordArr[3] && text5.length === 1){
//     classModifier4 = "--incorrect-letter"
//   } else classModifier4 = ""

//    let classModifier5 = ""
//   if (text5 === wordArr[4] && text5.length === 1  ){
//     classModifier5 = "--correct-place" 
//   } else if (wordArr.includes(text5) && text5.length === 1){
//     classModifier5 = "--correct-letter"
//   }
//     else if (text5 != wordArr[4] && text5.length === 1){
//     classModifier5 = "--incorrect-letter"
//   } else classModifier5 = ""
  
//   let text1row2 = ""
// if(classModifier1 != "--correct-place" && classModifier2 != "--correct-place" && classModifier3 != "--correct-place" && classModifier4 != "--correct-place" && classModifier5 != "--correct-place"){
//   text1row2 = true
// }

  return (
    <div className="gameboard">
      <div className="gameboard__row">
        <div id="1" className={`gameboard__tile ${classModifier1}`}>{text1}</div>
        <div id="2" className={`gameboard__tile ${classModifier2}`}>{text2}</div>
        <div id="3" className={`gameboard__tile ${classModifier3}`}>{text3}</div>
        <div id="4" className={`gameboard__tile ${classModifier4}`}>{text4}</div>
        <div id="5" className={`gameboard__tile ${classModifier5}`}>{text5}</div>
      </div>
      <div className="gameboard__row">
        <div id="6" className={`gameboard__tile ${classModifier6}`}>{text6}</div>
        <div id="7" className="gameboard__tile">B</div>
        <div id="8" className="gameboard__tile">C</div>
        <div id="9" className="gameboard__tile">D</div>
        <div id="10" className="gameboard__tile">E</div>
      </div>
      <div className="gameboard__row">
        <div id="11" className="gameboard__tile">A</div>
        <div id="12" className="gameboard__tile">B</div>
        <div id="13" className="gameboard__tile">C</div>
        <div id="14" className="gameboard__tile">D</div>
        <div id="15" className="gameboard__tile" >E</div>
      </div>
      <div className="gameboard__row">
        <div id="16" className="gameboard__tile">A</div>
        <div id="17" className="gameboard__tile">B</div>
        <div id="18" className="gameboard__tile">C</div>
        <div id="19" className="gameboard__tile">D</div>
        <div id="20" className="gameboard__tile" >E</div>
      </div>
      <div className="gameboard__row">
        <div id="21" className="gameboard__tile">A</div>
        <div id="22" className="gameboard__tile">B</div>
        <div id="23" className="gameboard__tile">C</div>
        <div id="24" className="gameboard__tile">D</div>
        <div id="25" className="gameboard__tile" >E</div>
      </div>
      <div className="gameboard__row">
        <div id="26" className="gameboard__tile">A</div>
        <div id="27" className="gameboard__tile">B</div>
        <div id="28" className="gameboard__tile">C</div>
        <div id="29" className="gameboard__tile">D</div>
        <div id="30" className="gameboard__tile" >E</div>
      </div>
    </div>
  );
};

export default Tiles;
