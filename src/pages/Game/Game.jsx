import React, { useState } from "react";
import KeyBoard from "../../components/KeyBoard/KeyBoard";
import Tile from "../../components/Tiles/Tiles";
import "./Game.scss";

const Game = (props) => {
  const [text1, setText1] = useState("");
  const [text2, setText2] = useState("");
  const [text3, setText3] = useState("");
  const [text4, setText4] = useState("");
  const [text5, setText5] = useState("");
  const [text6, setText6] = useState("");
  const [text7, setText7] = useState("");
  const [text8, setText8] = useState("");
  const [text9, setText9] = useState("");
  const [text10, setText10] = useState("");
  const [text11, setText11] = useState("");
  const [text12, setText12] = useState("");
  const [text13, setText13] = useState("");
  const [text14, setText14] = useState("");
  const [text15, setText15] = useState("");
  const [text16, setText16] = useState("");
  const [text17, setText17] = useState("");
  const [text18, setText18] = useState("");
  const [text19, setText19] = useState("");
  const [text20, setText20] = useState("");
  const [text21, setText21] = useState("");
  const [text22, setText22] = useState("");
  const [text23, setText23] = useState("");
  const [text24, setText24] = useState("");
  const [text25, setText25] = useState("");
  const [counter, setCounter] = useState(1);
  const { word } = props;

  let isNewRow1 = false;
  let allGreen1 = false;
  let isNewRow2 = false;
  let allGreen2 = false;
  let isNewRow3 = false;
  let allGreen3 = false;
  let isNewRow4 = false;
  let allGreen4 = false;

  const handleClick = (event) => {
    if (counter === 1) {
      setText1(event.target.innerHTML);
      setCounter(counter + 1);
      event.target.className = "key key--active";
    }
    if (counter === 2) {
      setText2(event.target.innerHTML);
      setCounter(counter + 1);
      event.target.className = "key key--active";
    }
    if (counter === 3) {
      setText3(event.target.innerHTML);
      setCounter(counter + 1);
      event.target.className = "key key--active";
    }
    if (counter === 4) {
      setText4(event.target.innerHTML);
      setCounter(counter + 1);
      event.target.className = "key key--active";
    }
    if (counter === 5) {
      setText5(event.target.innerHTML);
      setCounter(counter + 1);
      event.target.className = "key key--active";
    }
    if (
      classModifier1 === "--correct-place" &&
      classModifier2 === "--correct-place" &&
      classModifier3 === "--correct-place" &&
      classModifier4 === "--correct-place" &&
      classModifier5 === "--correct-place"
    ) {
      allGreen1 = true;
    }
    if (counter >= 6 && allGreen1 === false) {
      isNewRow1 = true;
    }
    if (counter === 6 && isNewRow1 && allGreen1 === false) {
      setText6(event.target.innerHTML);
      setCounter(counter + 1);
      event.target.className = "key key--active";
    }
    if (counter === 7 && isNewRow1 && allGreen1 === false) {
      setText7(event.target.innerHTML);
      setCounter(counter + 1);
      event.target.className = "key key--active";
    }
    if (counter === 8 && isNewRow1 && allGreen1 === false) {
      setText8(event.target.innerHTML);
      setCounter(counter + 1);
      event.target.className = "key key--active";
    }
    if (counter === 9 && isNewRow1 && allGreen1 === false) {
      setText9(event.target.innerHTML);
      setCounter(counter + 1);
      event.target.className = "key key--active";
    }
    if (counter === 10 && isNewRow1 && allGreen1 === false) {
      setText10(event.target.innerHTML);
      setCounter(counter + 1);
      event.target.className = "key key--active";
    }
    if (
        classModifier6 === "--correct-place" &&
        classModifier7 === "--correct-place" &&
        classModifier8 === "--correct-place" &&
        classModifier9 === "--correct-place" &&
        classModifier10 === "--correct-place"
      ) {
        allGreen2 = true;
      }
      if (counter >= 11 && allGreen2 === false) {
        isNewRow2 = true;
      }
      if (counter === 11 && isNewRow2 && allGreen2 === false) {
        setText11(event.target.innerHTML);
        setCounter(counter + 1);
        event.target.className = "key key--active";
      }
      if (counter === 12 && isNewRow2 && allGreen2 === false) {
        setText12(event.target.innerHTML);
        setCounter(counter + 1);
        event.target.className = "key key--active";
      }
      if (counter === 13 && isNewRow2 && allGreen2 === false) {
        setText13(event.target.innerHTML);
        setCounter(counter + 1);
        event.target.className = "key key--active";
      }
      if (counter === 14 && isNewRow2 && allGreen2 === false) {
        setText14(event.target.innerHTML);
        setCounter(counter + 1);
        event.target.className = "key key--active";
      }
      if (counter === 15 && isNewRow2 && allGreen2 === false) {
        setText15(event.target.innerHTML);
        setCounter(counter + 1);
        event.target.className = "key key--active";
      }
      if (
        classModifier11 === "--correct-place" &&
        classModifier12 === "--correct-place" &&
        classModifier13 === "--correct-place" &&
        classModifier14 === "--correct-place" &&
        classModifier15 === "--correct-place"
      ) {
        allGreen3 = true;
      }
      if (counter >= 16 && allGreen3 === false) {
        isNewRow3 = true;
      }
      if (counter === 16 && isNewRow3 && allGreen3 === false) {
        setText16(event.target.innerHTML);
        setCounter(counter + 1);
        event.target.className = "key key--active";
      }
      if (counter === 17 && isNewRow3 && allGreen3 === false) {
        setText17(event.target.innerHTML);
        setCounter(counter + 1);
        event.target.className = "key key--active";
      }
      if (counter === 18 && isNewRow3 && allGreen3 === false) {
        setText18(event.target.innerHTML);
        setCounter(counter + 1);
        event.target.className = "key key--active";
      }
      if (counter === 19 && isNewRow3 && allGreen3 === false) {
        setText19(event.target.innerHTML);
        setCounter(counter + 1);
        event.target.className = "key key--active";
      }
      if (counter === 20 && isNewRow3 && allGreen3 === false) {
        setText20(event.target.innerHTML);
        setCounter(counter + 1);
        event.target.className = "key key--active";
      }
      if (
          classModifier16 === "--correct-place" &&
          classModifier17 === "--correct-place" &&
          classModifier18 === "--correct-place" &&
          classModifier19 === "--correct-place" &&
          classModifier20 === "--correct-place"
        ) {
          allGreen4 = true;
        }
        if (counter >= 21 && allGreen4 === false) {
          isNewRow4 = true;
        }
        if (counter === 21 && isNewRow4 && allGreen4 === false) {
          setText21(event.target.innerHTML);
          setCounter(counter + 1);
          event.target.className = "key key--active";
        }
        if (counter === 22 && isNewRow4 && allGreen4 === false) {
          setText22(event.target.innerHTML);
          setCounter(counter + 1);
          event.target.className = "key key--active";
        }
        if (counter === 23 && isNewRow4 && allGreen4 === false) {
          setText23(event.target.innerHTML);
          setCounter(counter + 1);
          event.target.className = "key key--active";
        }
        if (counter === 24 && isNewRow4 && allGreen4 === false) {
          setText24(event.target.innerHTML);
          setCounter(counter + 1);
          event.target.className = "key key--active";
        }
        if (counter === 25 && isNewRow4 && allGreen4 === false) {
          setText25(event.target.innerHTML);
          setCounter(counter + 1);
          event.target.className = "key key--active";
        }
  
  
  };

  let wordArr = word.toUpperCase().split("");
  console.log(wordArr);

  let classModifier1 = "";
  if (text1 === wordArr[0] && text5.length === 1) {
    classModifier1 = "--correct-place";
  } else if (wordArr.includes(text1) && text5.length === 1) {
    classModifier1 = "--correct-letter";
  } else if (text1 != wordArr[1] && text5.length === 1) {
    classModifier1 = "--incorrect-letter";
  } else classModifier1 = "";

  let classModifier2 = "";
  if (text2 === wordArr[1] && text5.length === 1) {
    classModifier2 = "--correct-place";
  } else if (wordArr.includes(text2) && text5.length === 1) {
    classModifier2 = "--correct-letter";
  } else if (text2 != wordArr[1] && text5.length === 1) {
    classModifier2 = "--incorrect-letter";
  } else classModifier2 = "";

  let classModifier3 = "";
  if (text3 === wordArr[2] && text5.length === 1) {
    classModifier3 = "--correct-place";
  } else if (wordArr.includes(text3) && text5.length === 1) {
    classModifier3 = "--correct-letter";
  } else if (text3 != wordArr[2] && text5.length === 1) {
    classModifier3 = "--incorrect-letter";
  } else classModifier3 = "";

  let classModifier4 = "";
  if (text4 === wordArr[3] && text5.length === 1) {
    classModifier4 = "--correct-place";
  } else if (wordArr.includes(text4) && text5.length === 1) {
    classModifier4 = "--correct-letter";
  } else if (text4 != wordArr[3] && text5.length === 1) {
    classModifier4 = "--incorrect-letter";
  } else classModifier4 = "";

  let classModifier5 = "";
  if (text5 === wordArr[4] && text5.length === 1) {
    classModifier5 = "--correct-place";
  } else if (wordArr.includes(text5) && text5.length === 1) {
    classModifier5 = "--correct-letter";
  } else if (text5 != wordArr[4] && text5.length === 1) {
    classModifier5 = "--incorrect-letter";
  } else classModifier5 = "";

  let classModifier6 = "";
  if (text6 === wordArr[0] && text10.length === 1) {
    classModifier6 = "--correct-place";
  } else if (wordArr.includes(text6) && text10.length === 1) {
    classModifier6 = "--correct-letter";
  } else if (text6 != wordArr[0] && text10.length === 1) {
    classModifier6 = "--incorrect-letter";
  } else classModifier6 = "";

  let classModifier7 = "";
  if (text7 === wordArr[1] && text10.length === 1) {
    classModifier7 = "--correct-place";
  } else if (wordArr.includes(text7) && text10.length === 1) {
    classModifier7 = "--correct-letter";
  } else if (text7 != wordArr[1] && text10.length === 1) {
    classModifier7 = "--incorrect-letter";
  } else classModifier7 = "";

  let classModifier8 = "";
  if (text8 === wordArr[2] && text10.length === 1) {
    classModifier8 = "--correct-place";
  } else if (wordArr.includes(text8) && text10.length === 1) {
    classModifier8 = "--correct-letter";
  } else if (text8 != wordArr[2] && text10.length === 1) {
    classModifier8 = "--incorrect-letter";
  } else classModifier8 = "";

  let classModifier9 = "";
  if (text9 === wordArr[3] && text10.length === 1) {
    classModifier9 = "--correct-place";
  } else if (wordArr.includes(text9) && text10.length === 1) {
    classModifier9 = "--correct-letter";
  } else if (text9 != wordArr[3] && text10.length === 1) {
    classModifier9 = "--incorrect-letter";
  } else classModifier9 = "";

  let classModifier10 = "";
  if (text10 === wordArr[4] && text10.length === 1) {
    classModifier10 = "--correct-place";
  } else if (wordArr.includes(text10) && text10.length === 1) {
    classModifier10 = "--correct-letter";
  } else if (text10 != wordArr[4] && text10.length === 1) {
    classModifier10 = "--incorrect-letter";
  } else classModifier10 = "";

  let classModifier11 = "";
  if (text11 === wordArr[0] && text15.length === 1) {
    classModifier11 = "--correct-place";
  } else if (wordArr.includes(text11) && text15.length === 1) {
    classModifier11 = "--correct-letter";
  } else if (text11 != wordArr[0] && text15.length === 1) {
    classModifier11 = "--incorrect-letter";
  } else classModifier11 = "";

  let classModifier12 = "";
  if (text12 === wordArr[1] && text15.length === 1) {
    classModifier12 = "--correct-place";
  } else if (wordArr.includes(text12) && text15.length === 1) {
    classModifier12 = "--correct-letter";
  } else if (text12 != wordArr[1] && text15.length === 1) {
    classModifier12 = "--incorrect-letter";
  } else classModifier12 = "";

  let classModifier13 = "";
  if (text13 === wordArr[2] && text15.length === 1) {
    classModifier13 = "--correct-place";
  } else if (wordArr.includes(text13) && text15.length === 1) {
    classModifier13 = "--correct-letter";
  } else if (text13 != wordArr[2] && text15.length === 1) {
    classModifier13 = "--incorrect-letter";
  } else classModifier13 = "";

  let classModifier14 = "";
  if (text14 === wordArr[3] && text15.length === 1) {
    classModifier14 = "--correct-place";
  } else if (wordArr.includes(text14) && text15.length === 1) {
    classModifier14 = "--correct-letter";
  } else if (text14 != wordArr[3] && text15.length === 1) {
    classModifier14 = "--incorrect-letter";
  } else classModifier14 = "";

  let classModifier15 = "";
  if (text15 === wordArr[4] && text15.length === 1) {
    classModifier15 = "--correct-place";
  } else if (wordArr.includes(text15) && text15.length === 1) {
    classModifier15 = "--correct-letter";
  } else if (text15 != wordArr[4] && text15.length === 1) {
    classModifier15 = "--incorrect-letter";
  } else classModifier15 = "";

  let classModifier16 = "";
  if (text16 === wordArr[0] && text20.length === 1) {
    classModifier16 = "--correct-place";
  } else if (wordArr.includes(text16) && text20.length === 1) {
    classModifier16 = "--correct-letter";
  } else if (text16 != wordArr[0] && text20.length === 1) {
    classModifier16 = "--incorrect-letter";
  } else classModifier16 = "";

  let classModifier17 = "";
  if (text17 === wordArr[1] && text20.length === 1) {
    classModifier17 = "--correct-place";
  } else if (wordArr.includes(text17) && text20.length === 1) {
    classModifier17 = "--correct-letter";
  } else if (text17 != wordArr[1] && text20.length === 1) {
    classModifier17 = "--incorrect-letter";
  } else classModifier17 = "";

  let classModifier18 = "";
  if (text18 === wordArr[2] && text20.length === 1) {
    classModifier18 = "--correct-place";
  } else if (wordArr.includes(text18) && text20.length === 1) {
    classModifier18 = "--correct-letter";
  } else if (text18 != wordArr[2] && text20.length === 1) {
    classModifier18 = "--incorrect-letter";
  } else classModifier18 = "";

  let classModifier19 = "";
  if (text19 === wordArr[3] && text20.length === 1) {
    classModifier19 = "--correct-place";
  } else if (wordArr.includes(text19) && text20.length === 1) {
    classModifier19 = "--correct-letter";
  } else if (text19 != wordArr[3] && text20.length === 1) {
    classModifier19 = "--incorrect-letter";
  } else classModifier19 = "";

  let classModifier20 = "";
  if (text20 === wordArr[4] && text20.length === 1) {
    classModifier20 = "--correct-place";
  } else if (wordArr.includes(text20) && text20.length === 1) {
    classModifier20 = "--correct-letter";
  } else if (text20 != wordArr[4] && text20.length === 1) {
    classModifier20 = "--incorrect-letter";
  } else classModifier20 = "";

  let classModifier21 = "";
  if (text21 === wordArr[0] && text25.length === 1) {
    classModifier21 = "--correct-place";
  } else if (wordArr.includes(text21) && text25.length === 1) {
    classModifier21 = "--correct-letter";
  } else if (text21 != wordArr[0] && text25.length === 1) {
    classModifier21 = "--incorrect-letter";
  } else classModifier21 = "";

  let classModifier22 = "";
  if (text22 === wordArr[1] && text25.length === 1) {
    classModifier22 = "--correct-place";
  } else if (wordArr.includes(text22) && text25.length === 1) {
    classModifier22 = "--correct-letter";
  } else if (text22 != wordArr[1] && text25.length === 1) {
    classModifier22 = "--incorrect-letter";
  } else classModifier22 = "";

  let classModifier23 = "";
  if (text23 === wordArr[2] && text25.length === 1) {
    classModifier23 = "--correct-place";
  } else if (wordArr.includes(text23) && text25.length === 1) {
    classModifier23 = "--correct-letter";
  } else if (text23 != wordArr[2] && text25.length === 1) {
    classModifier23 = "--incorrect-letter";
  } else classModifier23 = "";

  let classModifier24 = "";
  if (text24 === wordArr[3] && text25.length === 1) {
    classModifier24 = "--correct-place";
  } else if (wordArr.includes(text24) && text25.length === 1) {
    classModifier24 = "--correct-letter";
  } else if (text24 != wordArr[3] && text25.length === 1) {
    classModifier24 = "--incorrect-letter";
  } else classModifier24 = "";

  let classModifier25 = "";
  if (text25 === wordArr[4] && text25.length === 1) {
    classModifier25 = "--correct-place";
  } else if (wordArr.includes(text25) && text25.length === 1) {
    classModifier25 = "--correct-letter";
  } else if (text25 != wordArr[4] && text25.length === 1) {
    classModifier25 = "--incorrect-letter";
  } else classModifier25 = "";


  return (
    <div className="game">
      <div className="gameboard">
        <Tile
          text1={text1}
          text2={text2}
          text3={text3}
          text4={text4}
          text5={text5}
          classModifier1={classModifier1}
          classModifier2={classModifier2}
          classModifier3={classModifier3}
          classModifier4={classModifier4}
          classModifier5={classModifier5}
          text6={text6}
          text7={text7}
          text8={text8}
          text9={text9}
          text10={text10}
          classModifier6={classModifier6}
          classModifier7={classModifier7}
          classModifier8={classModifier8}
          classModifier9={classModifier9}
          classModifier10={classModifier10}
          text11={text11}
          text12={text12}
          text13={text13}
          text14={text14}
          text15={text15}
          classModifier11={classModifier11}
          classModifier12={classModifier12}
          classModifier13={classModifier13}
          classModifier14={classModifier14}
          classModifier15={classModifier15}
          text16={text16}
          text17={text17}
          text18={text18}
          text19={text19}
          text20={text20}
          classModifier16={classModifier16}
          classModifier17={classModifier17}
          classModifier18={classModifier18}
          classModifier19={classModifier19}
          classModifier20={classModifier20}
          text21={text21}
          text22={text22}
          text23={text23}
          text24={text24}
          text25={text25}
          classModifier21={classModifier21}
          classModifier22={classModifier22}
          classModifier23={classModifier23}
          classModifier24={classModifier24}
          classModifier25={classModifier25}

        />
      </div>
      <div className="game__keyboard">
        <KeyBoard handleClick={handleClick} />
      </div>
    </div>
  );
};

export default Game;
