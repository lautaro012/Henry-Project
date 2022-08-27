import { Link } from "react-router-dom";
import React from "react";

import '../Landing_Page/Carrousel2.css'

export default function Carrousel2() {


    const bestGames = [
        {
            src: require('../../Style/Temp/mclaren.jpg'),
            altText: 'Slide 1',
            caption: 'Auto'
        },
        {
            src: require('../../Style/Temp/chica.jpg'),
            altText: 'Slide 2',
            caption: 'Chica'
        },
        {
            src: require('../../Style/Temp/robot.jpg'),
            altText: 'Slide 3',
            caption: 'Robot'
        },
        {
            src: require('../../Style/Temp/fortnite.jpg'),
            altText: 'Slide 3',
            caption: 'El fornai pa'
        }
    ];

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