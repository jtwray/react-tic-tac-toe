import React, { Component } from "react";
import Square from './Square'
export default class Board extends Component {
  state = {
    squares: Array(9).fill(null),
    nextMoveIs_X: true,
  }

  handleClick(i) {
    const nextMoveSquares = [...this.state.squares];
    nextMoveSquares[i] = this.state.nextMoveIs_X ? "X" : "O";
    const prevMoves = [...this.props.moveHistory];
    prevMoves.push(this.state.squares);
    this.setState({
      squares: nextMoveSquares,
      moveHistory: prevMoves,
      nextMoveIs_X: !this.state.nextMoveIs_X
    });
  }

  renderSquare(i) {
    return (
      <Square
        value={this.state.squares[i]}
        onClick={() => this.handleClick(i)}
      />
    );
  }

  render() {
    const status = "Next player: X";

    return (
      <div>
        <div className="status">{status}</div>
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
      </div>
    );
  }
}
