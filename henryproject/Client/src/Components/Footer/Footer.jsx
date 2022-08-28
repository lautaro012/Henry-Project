import { Link } from "react-router-dom";
import React from "react";
import { useDispatch, useSelector } from 'react-redux';

import '../Footer/Footer.css'

export default function Footer() {

    let Allvideogames = useSelector(state => state.Allvideogames)

    return (
        <div>
            {
                Allvideogames.length > 0 ?
                    < footer className="footer" >
                        <h1>Created by:</h1>
                        <ul className="ul_members">
                            <li>
                                <a href="https://www.linkedin.com/in/sergio-leonel-romero-sanchez-rajoy-fullstack/" target="_blank" rel="noreferrer" >Sergio Romero</a>
                            </li>

                            <li>
                                <a href="https://www.linkedin.com/in/lautaro-robles-57a5ba242/" target="_blank" rel="noreferrer" >Lautaro Robles</a>
                            </li>

                            <li>
                                <a href="https://www.linkedin.com/in/luciana-bermudez-72a40520b/" target="_blank" rel="noreferrer" >Luciana Bermudez</a>
                            </li>

                            <li>
                                <a href="https://www.linkedin.com/in/pierino-esteban-juncos-9a4804240/" target="_blank" rel="noreferrer" >Pierino Esteban Juncos</a>
                            </li>

                            <li>
                                <a href="https://www.linkedin.com/in/serch07/" target="_blank" rel="noreferrer" >Sergio Garcia Moreno</a>
                            </li>

                            <li>
                                <a href="https://www.linkedin.com/in/frank-smith-bocangelino-rojas-351157168/" target="_blank" rel="noreferrer" >Frank Smith Bocangelino</a>
                            </li>

                            <li>
                                <a href="https://www.linkedin.com/in/juan-david-pabon-porras-4123b389/" target="_blank" rel="noreferrer" >Juan David Pabon</a>
                            </li>
                        </ul>
                        <hr />
                        <h3>In this proyect: </h3>
                        <p>
                            HLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit
                            in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>
                        <div id="about_button">
                            <Link to='/about'>
                                <button id="about">About US</button>
                            </Link>
                        </div>
                    </footer >
                    :
                    null
            }
        </div>
    )
}