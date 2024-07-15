import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.module.css";

function Header() {
  return (
    <header className="hed">
        <ul className="womp">
            <li>
                <NavLink to="/" style={({isActive})=>{return {color: isActive?"red":"white",textDecoration: isActive?"none":"none",borderBottom: isActive?"2px white solid":"none"}}}>
                    Home
                </NavLink>
            </li>
            <li>
                <NavLink to="/About" style={({isActive})=>{return {color: isActive?"red":"white",textDecoration: isActive?"none":"none",borderBottom: isActive?"2px white solid":"none"}}}>
                    About
                </NavLink>
            </li>
            <li>
                <NavLink to="/Contact" style={({isActive})=>{return {color: isActive?"red":"white",textDecoration: isActive?"none":"none",borderBottom: isActive?"2px white solid":"none"}}}>
                    Contact
                </NavLink>
            </li>
            <li>
            <NavLink to="/Github" style={({isActive})=>{return {color: isActive?"red":"white",textDecoration: isActive?"none":"none",borderBottom: isActive?"2px white solid":"none"}}}>
                    Github
                </NavLink>
            </li>
        </ul>
        
    </header>
  );
}

export default Header;