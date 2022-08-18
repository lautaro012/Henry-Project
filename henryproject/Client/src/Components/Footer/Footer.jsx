import { Link } from "react-router-dom";
import React from "react";

import '../Footer/Footer.css'

export default function Footer() {
    return (
        <footer className="footer">
            <h1>Created by:</h1>
            <ul className="ul_members">
                <li>
                    <a href="https://www.linkedin.com/in/sergio-leonel-romero-sanchez-rajoy-fullstack/" target="_blank" rel="noreferrer" >Sergio Romero</a>
                </li>

                <li>
                    <a href="https://www.linkedin.com/in/sergio-leonel-romero-sanchez-rajoy-fullstack/" target="_blank" rel="noreferrer" >Lautaro</a>
                </li>

                <li>
                    <a href="https://www.linkedin.com/in/sergio-leonel-romero-sanchez-rajoy-fullstack/" target="_blank" rel="noreferrer" >Frank</a>
                </li>

                <li>
                    <a href="https://www.linkedin.com/in/sergio-leonel-romero-sanchez-rajoy-fullstack/" target="_blank" rel="noreferrer" >Lu</a>
                </li>

                <li>
                    <a href="https://www.linkedin.com/in/sergio-leonel-romero-sanchez-rajoy-fullstack/" target="_blank" rel="noreferrer" >Pierino</a>
                </li>

                <li>
                    <a href="https://www.linkedin.com/in/sergio-leonel-romero-sanchez-rajoy-fullstack/" target="_blank" rel="noreferrer" >Serch</a>
                </li>

                <li>
                    <a href="https://www.linkedin.com/in/sergio-leonel-romero-sanchez-rajoy-fullstack/" target="_blank" rel="noreferrer" >David</a>
                </li>
            </ul>
            <hr />
            <h3>In this proyect: </h3>
            <p>
                HLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit
                in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <div>
                <Link to='/about'>
                    <button id="about">About US</button>
                </Link>
            </div>
        </footer>
    )
}