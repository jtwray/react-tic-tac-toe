import React from "react";
import Square from "./Square";

const miniboard = {
  border: "5px solid green",
  width: "100px",
  height: "100px",
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "space-evenly",
  alignItems: "center",
};

const minisquare = {
  border: "1px solid white",
  background: "orange",
  borderRadius: "5px",
  width: "30%",
  height: "30%",
};
export default function MovesHistory({ currentMoveIndex, moveHistory }) {
  console.log(moveHistory);
  return (
    <section
      style={{ maxWidth: "50vw", width: "50vw", border: "solid orange 1px" }}
    >
      <h2>Moves History</h2>
      <h3>last boardstate:</h3>
      <div>{moveHistory[currentMoveIndex]}</div>
      <nav>
        <button className="back">Back</button>
        {currentMoveIndex < moveHistory.length ? (
          <button onClick={() => currentMoveIndex++} className="forward">
            Forward
          </button>
        ) : (
          <p>Forward</p>
        )}
      </nav>
      <div className="currentmove">move # {currentMoveIndex}</div>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-evenly",
          alignItems: "center",
          border: "solid indigo 1rem",
          background: "repeating-gradient(white 19px,red 30px,indigo 55px)",
        }}
        className="movehistorylist"
      >
        {moveHistory &&
          moveHistory.map((board) => (
            <section style={miniboard}>
              {board.map((square, i) => (
                <div style={minisquare}>{square}</div>
              ))}
            </section>
          ))}
        {moveHistory.map((item, boardReplica) => (
          <li>
            Board Replica {boardReplica == null ? "_" : boardReplica}
            {item}
          </li>
        ))}{" "}
      </div>
    </section>
  );
}
