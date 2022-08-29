import { Link } from "react-router-dom";
import React from "react";
import { useSelector } from 'react-redux';

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
                        <h3>Henry's grupal proyect: </h3>
                        <p>
                            Hi! We are a group of students in Henry's bootcamp. Through these months we start this path in IT world and we love it! We are proud of our improvement and we are conscious that we have to keep studying after this, to get better and better, cause that is our goal.
                            Please, be free to explore our page and give your opinion about it. We were more than pleased to read your commentaries to improve.
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