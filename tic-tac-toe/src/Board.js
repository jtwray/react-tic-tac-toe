import React, { Component } from "react";
import ErrorBoundary from "./errorBoundary";
import Square from './Square'
export default class Board extends Component {
  callWinner=(squares)=> {
    const winningCombos =
      [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
      ]

    if (this.props.currentMoveIndex > 3) {
      for (let [i] in winningCombos) {
        const [a, b, c] = winningCombos[i];
        if (squares[a] != null && squares[a] === squares[b] && squares[a] === squares[c]) { return squares[a] }
      } return null;
    }
  }

  renderSquare(i) {
    return (
      <ErrorBoundary>
        <Square
          value={this.props.squares[i]}
          onClick={ ()=>this.props.handleMove(i)}
        />
      </ErrorBoundary>
    );
  }

  render() {
    let status = `Next player:${this.props.nextMoveIs_X ? "X" : "O"} `;
    const winner = this.callWinner(this.props.squares);
    if (winner) { status = `Winner:${winner}` }
    return (
      <div>
        <ErrorBoundary>
          <div className="status">{status}</div>
        </ErrorBoundary>
        <ErrorBoundary>
          <div className="board-row">
            {this.renderSquare(0)}
            {this.renderSquare(1)}
            {this.renderSquare(2)}
          </div>

          <div className="board-row">
            {this.renderSquare(3)}
            {this.renderSquare(4)}
            {this.renderSquare(5)}
          </div>

          <div className="board-row">
            {this.renderSquare(6)}
            {this.renderSquare(7)}
            {this.renderSquare(8)}
          </div>
        </ErrorBoundary>
      </div>
    );
  }
}
