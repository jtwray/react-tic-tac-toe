import React, { Component } from "react";
import PropTypes from "prop-types";
export default class Square extends Component {
    render() {
        return <button className="square"> {this.props.value} </button>;
    }
}


Square.propTypes = {
    value: PropTypes.number
}