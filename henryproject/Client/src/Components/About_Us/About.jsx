import { Link } from "react-router-dom";
import React from "react";
import '../About_Us/About.css'
import lautaro from "../../Style/Imagenes/lautaro.jpeg"
import sergior from "../../Style/Imagenes/Sergio_Romero.jpg"
import juandavid from "../../Style/Imagenes/juandavid.jpeg"
import lucianab from "../../Style/Imagenes/lucianab.jpeg"
import sergiog from "../../Style/Imagenes/sergiog.jpeg"
import pierino from "../../Style/Imagenes/pierino.jpeg"
import frank from "../../Style/Imagenes/frank.jpeg"

export default function About() {
    return (
        <div className="About-general">
            <h1 className="h"> Members </h1>
            <div className="About">
                <div className="name">
                    <a className="Link" target="_blank" rel="noreferrer" href='https://ar.linkedin.com/in/lautaro-robles-57a5ba242?trk=people-guest_people_search-card'>
                        <h3>Lautaro</h3>
                        <img width={200} height={200} id="imgl" src={lautaro} alt="lautaro"></img>
                    </a>
                </div>


                <div className="name">
                    <a className="Link" target="_blank" rel="noreferrer" href='https://ar.linkedin.com/in/sergio-leonel-romero-sanchez-rajoy-fullstack'>
                        <h3>Sergio</h3>
                        <img width={200} height={200} id="imgl" src={sergior} alt="sergior"></img>
                    </a>
                </div>


                <div className="name">
                    <a className="Link" target="_blank" rel="noreferrer" href='https://www.linkedin.com/in/juan-david-pabon-porras-4123b389/'>
                        <h3>Juan David</h3>
                        <img width={200} height={200} id="imgl" src={juandavid} alt="juandavid"></img>
                    </a>
                </div>


                <div className="name">
                    <a className="Link" target="_blank" rel="noreferrer" href='https://www.linkedin.com/in/luciana-bermudez-72a40520b'>
                        <h3>Luciana</h3>
                        <img width={200} height={200} id="imgl" src={lucianab} alt="lucianab"></img>
                    </a>
                </div>


                <div className="name">
                    <a className="Link" target="_blank" rel="noreferrer" href='https://www.linkedin.com/in/serch07/?originalSubdomain=co'>
                        <h3>Sergio</h3>
                        <img width={200} height={200} id="imgl" src={sergiog} alt="sergiog"></img>
                    </a>
                </div>


                <div className="name">
                    <a className="Link" target="_blank" rel="noreferrer" href='https://www.linkedin.com/in/frank-smith-bocangelino-rojas-351157168/'>
                        <h3>Frank</h3>
                        <img width={200} height={200} id="imgl" src={frank} alt="frank"></img>
                    </a>
                </div>


                <div className="name">
                    <a className="Link" target="_blank" rel="noreferrer" href='https://www.linkedin.com/in/pierino-esteban-juncos-9a4804240/'>
                        <h3>Pierino</h3>
                        <img width={200} height={200} id="imgl" src={pierino} alt="pierino"></img>
                    </a>
                </div>
            </div>
            <div>
                <Link to='/home'>
                    <button id="backToHome">Back to Home</button>
                </Link>
            </div>
        </div>
    )
}