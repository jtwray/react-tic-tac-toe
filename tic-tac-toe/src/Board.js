import React, { Component } from "react";
import ErrorBoundary from "./errorBoundary";
import Square from "./Square";
export default class Board extends Component {
  callWinner = (squares) => {
    const winningCombos = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    if (this.props.currentMoveIndex > 3) {
      //  loop through the winning combinations fro three in a row
      for (let [i] in winningCombos) {
        //  assign variables to the 1st 2nd and 3rd in a row for a combination
        const [a, b, c] = winningCombos[i];
        // if a ,b ,c are all 'x' return 'x'
        // if a ,b ,c are all 'o' return 'o'
        if (
          squares[a] != null &&
          squares[a] === squares[b] &&
          squares[a] === squares[c]
        ) {
          return squares[a];
        }
        // else return null aka falsey
      }
      return null;
    }
  };k

  renderSquare(i) {
    return (
      <ErrorBoundary>
        <Square
          value={this.props.squares[i]}
          winner={this.callWinner(this.props.squares)}
          onClick={() => this.props.handleMove(i)}
        />
      </ErrorBoundary>
    );
  }

  render() {
    let status = `Next player:${this.props.nextMoveIs_X ? "X" : "O"} `;
    const winner = this.callWinner(this.props.squares);
    if (winner) {
      status = `Winner:${winner}`;
    }

    return (
      <div style={{ minWidth: "50%vw", border: "solid orange 1px" }}>
        <ErrorBoundary>
          <div className="status">Move# {this.props.currentMoveIndex}</div>
          <div className="status">{status}</div>
        </ErrorBoundary>
        <ErrorBoundary>
          <div className="board-row" style={{ minWidth: "100%" }}>
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
