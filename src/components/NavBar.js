import { Link } from "react-router-dom";

function Header(props) {
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
        <header>
            <h1>Cosmic Titan Studios</h1>
            <nav className="nav" style={navStyle}>
                <Link to="/">
                    <div>HOME</div>
                </Link>
                <Link to="/about">
                    <div>ABOUT</div>
                </Link>
                <Link to="/artists">
                    <div>ARTISTS</div>
                </Link>
                <Link to="/gear">
                    <div>GEAR</div>
                </Link>
                <Link to="/book">
                    <div>BOOK STUDIO</div>
                </Link>
            </nav>
        </header>
    );
}

export default Header;