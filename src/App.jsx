import "./App.scss";
import Game from "./pages/Game/Game";
import words from "./assets/data/words.json";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Win from "./pages/Win/Win";
import GameOver from "./pages/GameOver/GameOver";

function App() {
  const randomWordIndex = Math.floor(Math.random() * 10);
  console.log(randomWordIndex);

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route
            path="/"
            element={<Game word={words.word[randomWordIndex]} />}
          />
          <Route
            path="/win"
            element={<Win word={words.word[randomWordIndex]} />}
          />
          <Route
            path="/GameOver"
            element={<GameOver word={words.word[randomWordIndex]} />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
