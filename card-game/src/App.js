import Header from "./components/Header";
import Scoreboard from "./components/Scoreboard";
import React, { useState } from "react";
import Gameboard from "./components/Gameboard";
import "./App.css";

const App = () => {
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);

  return (
    <div className="App">
      <Header />
      <Scoreboard score={score} bestScore={bestScore} />
      <Gameboard
        score={score}
        setScore={setScore}
        bestScore={bestScore}
        setBestScore={setBestScore}
      />
    </div>
  );
};

export default App;