import React from 'react'

import { Link } from "react-router-dom";

function Footsies(props) {
    //inline style for the nav tag
    const navStyle = {
        display: "flex",
        justifyContent: "space-around",
        border: "3px solid black",
        padding: "8px",
        width: "90%",
        margin: "auto",
    };

    return (
        <footer>
            <h1></h1>
            <nav style={navStyle}>
                <Link to="https://www.espn.com">
                    <div>Contact cosmictitanofficial@gmail.com</div>
                </Link>
            </nav>
        </footer>
    );
}



export default Footsies;
