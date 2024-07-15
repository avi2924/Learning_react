import React from "react";
import { NavLink } from "react-router-dom";
import "./Footer.module.css";

function Footer() {
  return (
    <header>
        <ul>
            <li>
                <NavLink to="/" style={(isActive)=>{return {color: isActive?'red':'white'}}}>
                    Home
                </NavLink>
            </li>
            <li>
                <NavLink to="/" style={(isActive)=>{return {color: isActive?'red':'white'}}}>
                    About
                </NavLink>
            </li>
            <li>
                <NavLink to="/" style={(isActive)=>{return {color: isActive?'red':'white'}}}>
                    Contact
                </NavLink>
            </li>
            <li>
                <NavLink to="/" style={(isActive)=>{return {color: isActive?'red':'white'}}}>
                    Github
                </NavLink>
            </li>
        </ul>
        <ul>
            <li>
                <NavLink to="/" style={(isActive)=>{return {color: isActive?'red':'white'}}}>
                    Home
                </NavLink>
            </li>
            <li>
                <NavLink to="/" style={(isActive)=>{return {color: isActive?'red':'white'}}}>
                    About
                </NavLink>
            </li>
            <li>
                <NavLink to="/" style={(isActive)=>{return {color: isActive?'red':'white'}}}>
                    Contact
                </NavLink>
            </li>
            <li>
                <NavLink to="/" style={(isActive)=>{return {color: isActive?'red':'white'}}}>
                    Github
                </NavLink>
            </li>
        </ul>
        
    </header>
  );
}

export default Footer;