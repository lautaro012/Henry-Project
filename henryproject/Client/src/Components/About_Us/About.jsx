import { Link } from "react-router-dom";
import React from "react";
import '../About_Us/About.css'
import lautaro from "./lautaro.jpeg"
import sergior from "./sergior.jpeg"
import juandavid from "./juandavid.jpeg"
import lucianab from "./lucianab.jpeg"
import sergiog from "./sergiog.jpeg"
import pierino from "./pierino.jpeg"
import frank from "./frank.jpeg"

export default function About() {
    return (
        <div className="About">
            <h1>Nuestro proyecto</h1>
            <p>
             Visite nuestro Ecommerce en donde va a encontrar las mejores ofertas
             de videojuegos para que pueda elegir la diversion ideal.
            </p>
            <div className="name">
                <h3>Lautaro</h3>
                <p>Frontend</p>
                <a href='https://ar.linkedin.com/in/lautaro-robles-57a5ba242?trk=people-guest_people_search-card'>LinkedIn</a>
                <img id="imgl" src={lautaro} alt="lautaro"></img>
            </div>

            <div>
                <Link to='/home'>
                    <button id="backToHome">Back to Home</button>
                </Link>
            </div>
            <div className="name">
                <h3>Sergio</h3>
                <p>Frontend</p>
                <a href='https://ar.linkedin.com/in/sergio-leonel-romero-sanchez-rajoy-fullstack?trk=public_profile_browsemap'>LinkedIn</a>
                <img id="imgl" src={sergior} alt="sergior"></img>
            </div>

            <div>
                <Link to='/home'>
                    <button id="backToHome">Back to Home</button>
                </Link>
            </div>
            <div className="name">
                <h3>Juan David</h3>
                <p>Frontend</p>
                <a href='https://www.linkedin.com/in/juan-david-pabon-porras-4123b389/'>LinkedIn</a>
                <img id="imgl" src={juandavid} alt="juandavid"></img>
            </div>

            <div>
                <Link to='/home'>
                    <button id="backToHome">Back to Home</button>
                </Link>
            </div>
            <div className="name">
                <h3>Luciana</h3>
                <p>Backend</p>
                <a href='https://www.linkedin.com/in/luciana-bermudez-72a40520b'>LinkedIn</a>
                <img id="imgl" src={lucianab} alt="lucianab"></img>
            </div>

            <div>
                <Link to='/home'>
                    <button id="backToHome">Back to Home</button>
                </Link>
            </div>
            <div className="name">
                <h3>Sergio</h3>
                <p>Backend</p>
                <a href='https://www.linkedin.com/in/serch07/?originalSubdomain=co'>LinkedIn</a>
                <img id="imgl" src={sergiog} alt="sergiog"></img>
            </div>

            <div>
                <Link to='/home'>
                    <button id="backToHome">Back to Home</button>
                </Link>
            </div>
            <div className="name">
                <h3>Frank</h3>
                <p>Backend</p>
                <a href='https://www.linkedin.com/in/frank-smith-bocangelino-rojas-351157168/'>LinkedIn</a>
                <img id="imgl" src={frank} alt="frank"></img>
            </div>

            <div>
                <Link to='/home'>
                    <button id="backToHome">Back to Home</button>
                </Link>
            </div>
            <div className="name">
                <h3>Pierino</h3>
                <p>Backend</p>
                <a href='https://www.linkedin.com/in/pierino-esteban-juncos-9a4804240/'>LinkedIn</a>
                <img id="imgl" src={pierino} alt="pierino"></img>
            </div>

            <div>
                <Link to='/home'>
                    <button id="backToHome">Back to Home</button>
                </Link>
            </div>


        </div>
    )
}