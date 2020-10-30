import React, { Component } from "react";
import PropTypes from "prop-types";
export default class Square extends Component {


    handleOnMouse() { }
    render() {
        return (
            <button
                onMouseOver={(e) => {
                    e.target.style.background = 'darkred';
                    e.target.style.color = "darkred";
                    e.target.style.textShadow = `
                    .4px .4px 1px white,
                    -.5px -.5px .2px black,
                    1px .5px .2px black
                    `
                }}
                onMouseLeave={(e) => {
                    e.target.style.color = "darkred";
                    e.target.style.textShadow = `
                    -.4px -.4px .2px white,
                    .4px .4px .2px black
                    `
                }}

                style={{
                    transition: "all .4s ease",
                    border: 'solid .125rem firebrick',
                    borderBottom: ".2rem solid pink",
                    borderTop: ".1rem solid red",
                    borderLeft: ".1rem solid pink",
                    background: "darkred",
                    color: "darkred",
                    textShadow: `-.4px -.4px .2px white,
                    .4px .4px .2px black`,
                    width: "10vw",
                    wordWrap: "wrap",
                    fontSize: '1.5rem',
                    height: "10vw"
                }}
                className="square"

                onClick={()=>this.props.onClick(this.props.value)} 
                > { this.props.value} 
                </button>)
    }
}


Square.propTypes = {
    value: PropTypes.number
}