import { Link } from "react-router-dom";
import React from "react";
import '../About_Us/About.css'
import lautaro from "./lautaro.jpeg"

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

        </div>
    )
}