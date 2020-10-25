import React, { Component } from "react";
import PropTypes from "prop-types";
export default class Square extends Component {

    logMessage() { alert(`you clicked ${this.props.value}`) }

    render( ) {
        return (
            <button className="square"
                onClick={() => this.logMessage()
                }
            > {this.props.value} </button>)
    }
}


Square.propTypes = {
    value: PropTypes.number
}