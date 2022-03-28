import "./App.scss";
import Nav from "./components/Nav/Nav";
import Game from "./pages/Game/Game";
import words from "./assets/data/words.json";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Win from "./pages/Win/Win";
import GameOver from "./pages/GameOver/GameOver";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Game word={words.word}/>} />
          <Route path="/win" element={<Win word={words.word}/>} />
          <Route path="/GameOver" element={<GameOver word={words.word}/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
