import React, { Component } from "react";
import Board from "./Board";
import ErrorBoundary from "./errorBoundary";
import MovesHistory from "./MovesHistory";
export default class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentMoveIndex: 0,
      moveHistory: [],
      squares: Array(9).fill(null),
      nextMoveIs_X: true,
    };
  }

  handleMove = (i) => {
    //copy last table
    const nextMoveSquares = [...this.state.squares];
    //update table with newMove
    nextMoveSquares[i] = this.state.nextMoveIs_X ? "X" : "O";
    //copy moveHistory into new variable
    const prevMoves = [...this.state.moveHistory];
    console.log({ prevMoves });
    //copy all tables, adding in current table
    const newMovesList = [...prevMoves, [...nextMoveSquares]];
    console.log({ newMovesList });
    const moveCount = this.state.currentMoveIndex + 1;
    this.setState({
      nextMoveIs_X: !this.state.nextMoveIs_X,
      squares: nextMoveSquares,
      moveHistory: newMovesList,
      currentMoveIndex: moveCount,
    });
  };

  componentDidCatch() {
    console.error();
  }
  render() {
    return (
      <div className="game">
        <div className="game-board">
          <ErrorBoundary>
            <Board
              handleMove={this.handleMove}
              squares={this.state.squares}
              nextMoveIs_X={this.state.nextMoveIs_X}
              currentMoveIndex={this.state.currentMoveIndex}
            />
          </ErrorBoundary>
          <ErrorBoundary>
            <MovesHistory
              moveHistory={this.state.moveHistory}
              currentMoveIndex={this.state.currentMoveIndex}
            />
          </ErrorBoundary>
        </div>
        <div className="game-info">
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }
}
