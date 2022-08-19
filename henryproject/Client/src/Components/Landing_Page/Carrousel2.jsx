import { Link } from "react-router-dom";
import React from "react";

import '../Landing_Page/Carrousel2.css'

export default function Carrousel2() {


    const bestGames = [
        {
            img: require('../../Style/_temp/mclaren.jpg'),
            altText: 'Slide 1',
            Name: 'Auto'
        },
        {
            img: require('../../Style/_temp/chica.jpg'),
            altText: 'Slide 2',
            name: 'Chica'
        },
        {
            img: require('../../Style/_temp/robot.jpg'),
            altText: 'Slide 3',
            name: 'Robot'
        },
        {
            img: require('../../Style/_temp/fortnite.jpg'),
            altText: 'Slide 3',
            name: 'El fornai pa'
        }
    ]

    return (
        <div className="banner">
            {
                bestGames && bestGames.map(game => {
                    return (
                        <div className="carrousel_card">
                            <Link to={'/game/' + game.id}>
                                <img src={game.img} alt={game.altText} />
                            </Link>
                        </div>
                    )
                })
            }
        </div>
    )
}