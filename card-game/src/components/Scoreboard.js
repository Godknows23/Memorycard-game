import React from "react";

const Scoreboard = (props) => {
  const { score, bestScore } = props;

  return (
    <div className="ui centered grid">
      <div></div>
      <div>
        <h3>Score: {score}</h3>
      </div>
      <div>
        <h3>Best Score: {bestScore}</h3>
      </div>
    </div>
  );
};

export default Scoreboard;