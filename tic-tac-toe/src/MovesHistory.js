import React from "react";

export default function MovesHistory({ currentMoveIndex, moveHistory }) {
  return (
    <>
      <h2>Moves History</h2>
      <navitems>
        <button className="back">Back</button>
        {currentMoveIndex < moveHistory.length - 1 ? (
          <button onClick={() => currentMoveIndex++} className="forward">
            Forward
          </button>
        ) : (
          <button inactive onClick={() => null} className="forward">
            Forward
          </button>
        )}
      </navitems>
      <div className="currentmove">{currentMoveIndex}</div>
      <ol className="movehistorylist">
        {moveHistory&&moveHistory.forEach((move) => (
          <li>{move}</li>
        ))}
      </ol>
    </>
  );
}
