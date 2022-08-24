import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getGameById } from "../../redux/Actions/Index.js";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { Link } from "react-router-dom";
import ReactPlayer from 'react-player'
import ImagenPop from '../Game_Details/ImagenPop.jsx';
import Loading from '../../Style/Imagenes/Loading.gif'

import '../Game_Details/GameDetails.css'

export default function GameDetails() {

    const dispatch = useDispatch()
    const game = useSelector(state => state.game)
    const { id } = useParams() // usa el parametro de la URL
    const [imgPop, setImgPop] = useState(false)

    const [img, setImg] = useState("")

    useEffect(() => {
        dispatch(getGameById(id))
    }, [dispatch, id])

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

    function onHanddlePop(img) {
        setImg(img)
        imgPop === false ? setImgPop(true) : setImgPop(false)
    }

    function getVideo() {
        if (typeof game[0].videos === "string") {
            return game[0].videos
        }
        else {
            return "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
        }
    }

    console.log(game)

    return (
        <div className="game_detail">
            {
                game[0] ?

                    <div id="conteiner_detalles">
                        <div id="conteinerData_detalles2">
                            <div id="conteinerData_detalles">
                                {
                                    imgPop === true ?
                                        <ImagenPop show={onHanddlePop} imgPop={imgPop} img={img} />
                                        :
                                        null
                                }
                                < ReactPlayer
                                    id="game_video"
                                    url={getVideo()}
                                    controls
                                    playing
                                    loop
                                />
                                <div>
                                    <h1>{game[0].name}</h1>
                                    <h3>{stars(game[0].rating)} {game[0].rating}</h3>

                                    <div className='imagenesJuego' >

                                        {
                                            game[0].screenshots && game[0].screenshots.map(img => {
                                                return (
                                                    <div key={img} id="boton_juego">
                                                        <button onClick={() => onHanddlePop(img)}><img className="imagenJuego" src={img} alt="imagenJuego"></img></button>
                                                    </div>
                                                )
                                            })
                                        }
                                    </div>

                                </div>
                                <hr />
                                <p dangerouslySetInnerHTML={{ __html: game[0].description }} />
                            </div>
                        </div>
                        <div id="conteinerSide_detalles2">
                            <aside id="conteinerSide_detalles">
                                <h1>{game[0].name}</h1>
                                <a href={game[0].website} target="_blank" rel="noreferrer"><h3>{game[0].website}</h3></a>
                                <img src={game[0].image} alt="gameImage" width="100%"></img>
                                <h3>Release date :</h3>
                                <p>{game[0].realeaseDate}</p>
                                <div>
                                    <h3>Plataformas</h3>
                                    {
                                        game[0].platforms && game[0].platforms.map(plat => {
                                            return (
                                                <p key={plat.platform.name}>{plat.platform.name}</p>
                                            )
                                        })

                                    }
                                </div>
                                <div>
                                    <h3>Developers</h3>
                                    {
                                        game[0].developers && game[0].developers.map(dev => {
                                            return (
                                                <p key={dev}>{dev}</p>
                                            )
                                        })

                                    }
                                </div>
                                <div>
                                    <h3>ESRB</h3>
                                    <p key={game[0].esrb_rating.id}>{game[0].esrb_rating.name}</p>
                                </div>
                                <div>
                                    <h3>Metacritic</h3>
                                    <p>{game[0].metacritic}</p>
                                </div>
                                <div>
                                    <h3>Publisher</h3>
                                    <p>{game[0].publishers[0].name}</p>
                                </div>
                                <div>
                                    <h3>Stores</h3>
                                    {
                                        game[0].stores && game[0].stores.map(sto => {
                                            return (
                                                <p key={sto}>{sto}</p>
                                            )
                                        })

                                    }
                                </div>
                                
                                <button>COMPRAR AHORA</button>
                                <button>AÑADIR AL CARRITO</button>
                                <button>AÑADIR A LA LISTA DE DESEOS</button>
                            </aside>
                        </div>
                    </div>
                    :
                    <div id="loading_detail">
                        <img src={Loading} alt="Loading"></img>
                    </div>

            }
        </div>
    )
}