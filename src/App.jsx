import "./App.scss";
import Nav from "./components/Nav/Nav";
import Game from "./pages/Game/Game";
import words from "./assets/data/words.json";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Nav />
      <Game word={words.word} />
    </div>
  );
}

export default App;
