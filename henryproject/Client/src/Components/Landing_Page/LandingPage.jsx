
import React from "react";
import { Carousel } from 'react-responsive-carousel';

import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getAllGames } from '../../redux/Actions/Index'

import '../Landing_Page/LandingPage.css'

// import Example from "./Carrousel";
// import Footer from "../Footer/Footer";
import Carrousel2 from "./Carrousel2";
import LoadingScreen from "../LoadingScreen/LoadingScreen.jsx"

export default function LandingPage() {


    const dispatch = useDispatch()
    let Allvideogames = useSelector(state => state.Allvideogames)
    let populars = Allvideogames?.filter(games => games.rating > 4.5)

    useEffect(() => {
        dispatch(getAllGames())
    }, [dispatch])

    return (
        <div className="body_landing">

            {/* <Example /> */}

            {
                populars.length > 0 ?
                <Carrousel2 games={populars}/>
                :
                <LoadingScreen/>
            }
            {/* <Carousel
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
            </Carousel> */}


        </div>
    )
}