import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Game from "./Game";
import ErrorBoundary from "./errorBoundary";
function App() {
  return (
    <ErrorBoundary>
      <Game />
    </ErrorBoundary>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
