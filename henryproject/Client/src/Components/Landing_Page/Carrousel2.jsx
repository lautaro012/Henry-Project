import { Link } from "react-router-dom";
import React from "react";

import '../Landing_Page/Carrousel2.css'

export default function Carrousel2({ games }) {

    return (
        <div className="banner">
            {
                games && games.map(game => {
                    return (
                        <Link to={'/home/games/' + game.id} key={game.id} className="carrousel_card">
                            <div id="contenedor_landing_img">
                                <img src={game.image} alt={game.id} />
                                <h1>{game.name}</h1>
                            </div>
                        </Link>
                    )
                })
            }
        </div>
    )
}