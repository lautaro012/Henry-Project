import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getGameById, addToCart, addToFav, getReviews } from "../../redux/Actions/Index.js";
import { useParams } from "react-router-dom";
import { useState } from "react";
import MiniCard from "./MiniCards.jsx";

import ReactPlayer from 'react-player'
import ImagenPop from '../Game_Details/ImagenPop.jsx';
// import Loading from '../../Style/Imagenes/Loading.gif'
import LoadingScreen from "../LoadingScreen/LoadingScreen.jsx";
import { Carousel } from 'react-responsive-carousel';
import { useNavigate } from "react-router-dom";

import '../Game_Details/GameDetails.css'

export default function GameDetails() {

    const navigate = useNavigate();
    const dispatch = useDispatch()
    const game = useSelector(state => state.game)
    const reviews = useSelector(state => state.reviews)
    const { id } = useParams() // usa el parametro de la URL
    const [imgPop, setImgPop] = useState(false)

    const [img, setImg] = useState("")

    useEffect(() => {
        dispatch(getGameById(id))
        getReviews(id)
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

    function buy() {
        addGameToCart();
        navigate("/cart/formularioPago");
    }

    console.log("GAME", game)
    console.log("REVIEWS", reviews)

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
                                    centerMode={true}
                                    renderIndicator={false}
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
                                    <hr />
                                    <h3>Rating : {stars(game.rating)}</h3>
                                    <hr />
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
                                <hr />
                                <h3>Related games</h3>
                                <div id="contenedor_miniCards">
                                    {
                                        game.series && game.series.map((card, index) => {
                                            return (
                                                <MiniCard
                                                    data={card} />
                                            )
                                        })
                                    }
                                </div>
                                <hr />
                                <h3>Tags</h3>
                                <div id="contenedor_tags">
                                    {
                                        game.tags && game.tags.map(tag => {
                                            return (
                                                <div id="tag_details" key={tag.name}>
                                                    <p>{tag.name}</p>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                                {
                                    reviews.length > 0 ?
                                        <div>
                                            <h3>Reviews</h3>
                                            {
                                                reviews.map(rev => {
                                                    return (
                                                        <div>
                                                            <p>{rev}</p>
                                                        </div>
                                                    )
                                                })
                                            }
                                        </div>
                                        :
                                        null
                                }
                            </div>
                        </div>
                        <div id="conteinerSide_detalles2">
                            <aside id="conteinerSide_detalles">
                                <h1>{game.name}</h1>
                                <a href={game.website} target="_blank" rel="noreferrer"><h3>{game.website}</h3></a>
                                <img className="imagenJuego" src={game.image} alt="imagenJuego"></img>
                                <p>{game.realeaseDate}</p>
                                <div>
                                    <h2>Platforms</h2>
                                    {
                                        game.platforms && game.platforms.map(plat => {
                                            return (
                                                <p key={plat.name}>{plat.name}</p>
                                            )
                                        })

                                    }
                                </div>
                                <div>
                                    <h2>Developers</h2>
                                    {
                                        game.developers && game.developers.map(dev => {
                                            return (
                                                <p key={dev}>{dev}</p>
                                            )
                                        })

                                    }
                                </div>
                                <div>
                                    <h2>Genres</h2>
                                    {
                                        game.genres && game.genres.map(gen => {
                                            return (
                                                <p key={gen.name}>{gen.name}</p>
                                            )
                                        })

                                    }
                                </div>
                                <div>
                                    <h2>ESRB</h2>
                                    <p key={game.esrb_rating}>{game.esrb_rating}</p>
                                </div>
                                <div>
                                    <h2>Metacritic</h2>
                                    <p>{game.metacritic}</p>
                                </div>
                                <div>
                                    <h2>Publisher</h2>
                                    <p>{game.publishers}</p>
                                </div>
                                <div>
                                    <h2>Stores</h2>
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