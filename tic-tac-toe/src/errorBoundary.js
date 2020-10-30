import React, { Component } from "react";

export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { error: null, errorInfo: null };
  }

  render() {
    if (this.state.errorInfo) {
      return (
        <>
          <div>this following error occurred</div>
          <p>
            error:
            {this.state.error.toString()}
          </p>

          <p>
            at this location:
            {this.state.errorInfo.stack}
          </p>
        </>
      );
    } else {
      return this.props.children;
    }
  }
}
