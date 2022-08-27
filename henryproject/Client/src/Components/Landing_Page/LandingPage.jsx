
import React from "react";
import { Carousel } from 'react-responsive-carousel';
import Auto from '../../Style/Temp/mclaren.jpg'

import {useDispatch, useSelector} from 'react-redux';
import { useEffect } from 'react';
import { getAllGames } from '../../redux/Actions/Index'

import '../Landing_Page/LandingPage.css'

// import Example from "./Carrousel";
// import Footer from "../Footer/Footer";
// import Carrousel2 from "./Carrousel2";

export default function LandingPage() {

    
    const dispatch = useDispatch()
    let Allvideogames = useSelector(state => state.Allvideogames)
    let populars = Allvideogames?.filter(games => games.rating > 4.5)

    useEffect(() => {    
        dispatch(getAllGames())   
    }, [dispatch])

    console.log(populars)

    return (
        <div className="body_landing">

            {/* <Example /> */}

            {/* <Carrousel2/> */}
            <Carousel
                showArrows={true}
                animationHandler={'fade'}
                autoPlay={true}
                interval={5000}
                infiniteLoop={true}
                stopOnHover={true}
                showThumbs={false}
                width="100%"
                >
                {
                    populars ? populars.map((game) => {
                        return (
                            <div key={game.id}>
                                <img src={game.image} alt={game.name}/>
                            </div>
                        )
                    })
                    :
                    null
                }
            </Carousel>
            {/* <img src={Auto} alt="auto"></img> */}
        </div>
    )
}