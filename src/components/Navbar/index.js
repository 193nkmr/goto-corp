import React from "react";
import './Navbar.css';
import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="nav">
            <ul>
            <li><NavLink to="/">WebSite</NavLink></li>
            <li><NavLink to="/">TOP</NavLink></li>
            <li><NavLink to="/contact">CONTACT</NavLink></li>
            </ul>
        </nav>
    )
}
export default Navbar;
