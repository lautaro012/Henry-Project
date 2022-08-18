import { Link } from "react-router-dom";
import React from "react";

import '../Landing_Page/LandingPage.css'

import mclaren from '../../Style/_temp/mclaren.jpg'

export default function LandingPage() {


    const bestGames = [{ name: "Auto", img: mclaren }, { name: "Auto", img: mclaren }, { name: "Auto", img: mclaren }, { name: "Auto", img: mclaren }]
    console.log(bestGames)

    return (
        <div className="body_landing">

            <div className="landing">

                <Link to='/home'>
                    <h1>Henry's Proyect</h1>
                </Link>
            </div>

            <h3>Welcome to Games's Store</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>

            {
                bestGames && bestGames.map(game => {
                    return (
                        <div className="banner">
                            <div className="carrousel">
                                <img src={game.img} alt={game.name} />
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}