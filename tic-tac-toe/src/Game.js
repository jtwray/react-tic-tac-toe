import React, { Component } from "react";
import Board from "./Board";
export default class Game extends Component {
  state = { 
    moveHistory: [],

   };
  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board moveHistory={this.state.moveHistory} />
 
        </div>
        <div className="game-info">
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }
}
