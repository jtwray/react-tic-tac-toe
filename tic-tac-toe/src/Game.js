import React, { Component } from "react";
import Board from "./Board";
import MovesHistory from "./MovesHistory";
export default class Game extends Component {
  state = { 
    moveHistory: [],
    currentMoveIndex:0
   };
  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board moveHistory={this.state.moveHistory} />
          <MovesHistory moveHistory={this.state.moveHistory} currentMoveIndex={this.state.currentMoveIndex} />
        </div>
        <div className="game-info">
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }
}
