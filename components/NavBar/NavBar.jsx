import React from "react";
import './NavBar.css';

const NavBar = ({}) => {
    return (
    <nav>
        <div>
            <a href="/" className="site-name">Site Name</a>
        </div>
        <div>
            <ul>
                <li className="active"><a href='/about'>About</a></li>
                <li> <a href='/experience'>Experience</a></li>
                <li><a href='/contact'>Contact</a></li>
            </ul>
        </div>
    </nav>);
}

export default NavBar;