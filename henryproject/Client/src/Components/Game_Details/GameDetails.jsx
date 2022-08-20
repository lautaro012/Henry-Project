import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getGameById } from "../../redux/Actions/Index.js";
import { useParams } from "react-router-dom";
import { Carousel } from 'react-responsive-carousel';
import { useState } from "react";

import Video from '../../Style/Videos/IntroVid.mp4'
import ReactPlayer from 'react-player'
import ImagenPop from '../Game_Details/ImagenPop.jsx';

import '../Game_Details/GameDetails.css'

export default function GameDetails() {

    const dispatch = useDispatch()
    const game = useSelector(state => state.game)
    const { id } = useParams() // usa el parametro de la URL
    const [imgPop, setImgPop] = useState(false)

    useEffect(() => {
        dispatch(getGameById(id))
        console.log("JUEGO ID", game)
    }, [dispatch])

    function stars(number) {
        if (number >= 1 && number < 2) {
            return "⭐"
        }
        else if (number >= 2 && number < 3) {
            return "⭐⭐"
        }
        else if (number >= 3 && number < 4) {
            return "⭐⭐⭐"
        }
        else if (number >= 4 && number < 5) {
            return "⭐⭐⭐⭐"
        }
        else if (number === 5) {
            return "⭐⭐⭐⭐⭐"
        }
    }


    function onHanddlePop() {
        imgPop === false ? setImgPop(true) : setImgPop(false)
    }


    return (
        <div className="game_detail">
            {
                game[0] ?
                    <>
                        < ReactPlayer
                            id="game_video"
                            url={Video}
                            width="60%"
                            height="100%"
                            controls
                            playing
                            loop
                            muted
                        />
                        <div>
                            <h1>{game[0].name}</h1>
                            <p>{stars(game[0].rating)}</p>
                            {/* <div className="detail_imgs">
                                <div><img src={game[0].image} alt="imagenJuego" width="40%"></img></div>
                                <div><img src={game[0].image} alt="imagenJuego" width="40%"></img></div>
                                <div><img src={game[0].image} alt="imagenJuego" width="40%"></img></div>
                                <div><img src={game[0].image} alt="imagenJuego" width="40%"></img></div>
                                <div><img src={game[0].image} alt="imagenJuego" width="40%"></img></div>
                            </div> */}
                            <div className='carruseles' >
                                <Carousel
                                    showArrows={true}
                                    emulateTouch={true}
                                    swipeable={true}
                                    autoPlay={true}
                                    interval={3000}
                                    infiniteLoop={true}
                                    stopOnHover={true}
                                    centerMode={true}
                                    showThumbs={false}
                                    width={800}>
                                    <div className='double'>
                                        <button onClick={() => onHanddlePop()}><img src={game[0].image} alt="imagenJuego" width="40%"></img></button>
                                        <div><img src={game[0].image} alt="imagenJuego" width="40%"></img></div>
                                        <div><img src={game[0].image} alt="imagenJuego" width="40%"></img></div>
                                        {
                                            imgPop === true ?
                                                <ImagenPop show={onHanddlePop} imgPop={imgPop} img={game[0].image} />
                                                :
                                                null
                                        }
                                    </div>
                                    <div className='double'>
                                        <div><img src={game[0].image} alt="imagenJuego" width="40%"></img></div>
                                        <div><img src={game[0].image} alt="imagenJuego" width="40%"></img></div>
                                        <div><img src={game[0].image} alt="imagenJuego" width="40%"></img></div>
                                    </div>
                                    <div className='double'>
                                        <div><img src={game[0].image} alt="imagenJuego" width="40%"></img></div>
                                        <div><img src={game[0].image} alt="imagenJuego" width="40%"></img></div>
                                        <div><img src={game[0].image} alt="imagenJuego" width="40%"></img></div>
                                    </div>
                                </Carousel>
                            </div>
                        </div>
                        <hr />
                        <p dangerouslySetInnerHTML={{ __html: game[0].description }} />

                    </>
                    :
                    <div id="loading_detail">
                        <h1>Loading...</h1>
                    </div>
            }
            {/* <video autoPlay="autoplay" muted type={"video/mp4"} preload="auto" loop src={Video}></video> */}

        </div>
    )
}