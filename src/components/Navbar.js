import React from "react";

const Navbar = props => (
    <nav className="navbar navbar-expand-lg navbar-dark fixed-top bg-dark">
        <a className="navbar-brand" href="/" id="title"><h3>South Park Clicky Game</h3></a>
        <h5 className="navbar-brand" id="scores">Score: {props.score} | High Score: {props.top} </h5>
    </nav>
)

export default Navbar;