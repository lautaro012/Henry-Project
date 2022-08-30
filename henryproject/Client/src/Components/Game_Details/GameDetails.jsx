import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getGameById, addToCart, addToFav  } from "../../redux/Actions/Index.js";
import { useParams } from "react-router-dom";
import { useState } from "react";

import ReactPlayer from 'react-player'
import ImagenPop from '../Game_Details/ImagenPop.jsx';
// import Loading from '../../Style/Imagenes/Loading.gif'
import LoadingScreen from "../LoadingScreen/LoadingScreen.jsx";
import { Carousel } from 'react-responsive-carousel';
import {useNavigate  } from "react-router-dom";

import '../Game_Details/GameDetails.css'

export default function GameDetails() {

    const navigate = useNavigate();
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

    // function getVideo() {
    //     if (typeof game.video === "object") {
    //         return game.video[0]
    //     }
    //     else {
    //         return "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
    //     }
    // }

    function addGameToCart() {
        let item = {
            id: game.id,
            name: game.name,
            price: game.price,
            image: game.image,
        }
        dispatch(addToCart(item))
        alert(`${game.name} added to cart!`)
    }

    function addGameToFav() {
        let item = {
            id: game.id,
            name: game.name,
            price: game.price,
            image: game.image,
        }
        dispatch(addToFav(item))
        alert(`${game.name} added to your favorites!`)
    }

    function  buy() {
        addGameToCart();
        navigate("/cart/formularioPago");
    }

    console.log(game)

    return (
        <div className="game_detail">
            {
                typeof game === "object" ?

                    <div id="conteiner_detalles">
                        <div id="conteinerData_detalles2">
                            <div id="conteinerData_detalles">
                                {
                                    imgPop === true ?
                                        <ImagenPop show={onHanddlePop} imgPop={imgPop} img={img} />
                                        :
                                        null
                                }

                                <Carousel
                                    showArrows={true}
                                    infiniteLoop={true}
                                    showThumbs={false}
                                >
                                    {
                                        typeof game.video === "object" ?
                                            game.video.length > 0 ?
                                                game.video.map((video) => {
                                                    return (
                                                        < ReactPlayer
                                                            id="game_video"
                                                            url={video}
                                                            controls
                                                            playing
                                                            loop
                                                            muted
                                                        />
                                                    )
                                                })
                                                :
                                                < ReactPlayer
                                                    id="game_video"
                                                    url="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                                                    controls
                                                    playing
                                                    loop
                                                    muted
                                                />
                                            :
                                            < ReactPlayer
                                                id="game_video"
                                                url="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                                                controls
                                                playing
                                                loop
                                                muted
                                            />
                                    }
                                </Carousel>

                                <div>
                                    <h1>{game.name}</h1>
                                    <h3>{stars(game.rating)} {game.rating}</h3>

                                    <div className='imagenesJuego' >

                                        {
                                            game.screenshots && game.screenshots.map((img, index) => {
                                                return (
                                                    <div key={img} id="boton_juego">
                                                        {
                                                            index !== 0 ?
                                                                <button onClick={() => onHanddlePop(img)}><img className="imagenJuego" src={img} alt="imagenJuego"></img></button>
                                                                :
                                                                null
                                                        }
                                                    </div>
                                                )
                                            })
                                        }
                                    </div>

                                </div>
                                <hr />
                                <p dangerouslySetInnerHTML={{ __html: game.description }} />
                            </div>
                        </div>
                        <div id="conteinerSide_detalles2">
                            <aside id="conteinerSide_detalles">
                                <h1>{game.name}</h1>
                                <a href={game.website} target="_blank" rel="noreferrer"><h3>{game.website}</h3></a>
                                <img className="imagenJuego" src={game.image} alt="imagenJuego"></img>
                                <p>{game.realeaseDate}</p>
                                <div>
                                    <h3>Platforms</h3>
                                    {
                                        game.platforms && game.platforms.map(plat => {
                                            return (
                                                <p key={plat.platform.name}>{plat.platform.name}</p>
                                            )
                                        })

                                    }
                                </div>
                                <div>
                                    <h3>Developers</h3>
                                    {
                                        game.developers && game.developers.map(dev => {
                                            return (
                                                <p key={dev}>{dev}</p>
                                            )
                                        })

                                    }
                                </div>
                                <div>
                                    <h3>ESRB</h3>
                                    <p key={game.esrb_rating}>{game.esrb_rating}</p>
                                </div>
                                <div>
                                    <h3>Metacritic</h3>
                                    <p>{game.metacritic}</p>
                                </div>
                                <div>
                                    <h3>Publisher</h3>
                                    <p>{game.publishers}</p>
                                </div>
                                <div>
                                    <h3>Stores</h3>
                                    {
                                        game.store && game.store.map(sto => {
                                            return (
                                                <p key={sto}>{sto}</p>
                                            )
                                        })

                                    }
                                </div>

                                <h2>Price : ${game.price}</h2>

                                <button onClick={() => buy()}>Buy now ! 💰</button>
                                <button onClick={() => addGameToCart()}>Add to cart 🛒</button>
                                <button onClick={() => addGameToFav()}>Add to favorites 🤍</button>
                            </aside>
                        </div>
                    </div>
                    :
                    <LoadingScreen />
            }
        </div>
    )
}