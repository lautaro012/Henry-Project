import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart, addToFav, deleteItemFromFavs } from "../../redux/Actions/Index.js";
import PrettyRating from "pretty-rating-react";
import './Cards.css';
import CardHover from "../NewCard/CardHover.jsx";
import {
    faStar,
    faStarHalfAlt,
  } from "@fortawesome/free-solid-svg-icons";
import {
faStar as farStar,
} from "@fortawesome/free-regular-svg-icons";

export default function Card({card}) {

    let { name, image, price, rating, id } = card
    const dispatch = useDispatch()
    const [render, setRender] = useState('')
    function handleFavourite(e) {
        let item = {
            id: id,
            name: name,
            price: price,
            image: image,
        }
        if(e.target.checked) {
            dispatch(addToFav(item))
            alert(`${name} added to your favorites!`)
            setRender(render,'hola')
        } else {
            dispatch(deleteItemFromFavs(item.id))
            alert(`${name} remove from your favorites!`)
            setRender(render,'hola')

        }
       
    }


    const favorites = JSON.parse(localStorage.getItem("favProducts"));

    console.log(favorites)

    const icons = {
        star: {
          complete: faStar,
          half: faStarHalfAlt,
          empty: farStar,
        }
    }
    const colors = {
        star: ['#d9ad26', '#d9ad26', '#434b4d'],
    }

    return (
        <div> 
            <div className="fav-game-list">
                <Link to={`/home/games/${id}`} className='Link'>
                    <CardHover image={image} name={name}>
                    </CardHover>
                </Link>
                    { favorites?.includes(card) ?
                    <div className="card-favourite">
                        <span> {name} </span>
                        <input id={`hearth-${id}`} type="checkbox" value={name} onClick={(e) =>handleFavourite(e)} checked={true} className="favourite-checkbox"/>
                        <label className="favourite-label" htmlFor={`hearth-${id}`}>❤</label>
                    </div>
                        :
                    <div className="card-favourite">
                        <span> {name} </span>
                        <input id={`hearth-${id}`} type="checkbox" value={name} onClick={(e) =>handleFavourite(e)} className="favourite-checkbox"/>
                        <label className="favourite-label" htmlFor={`hearth-${id}`}>❤</label>
                    </div>
                    }
            </div>
                {/* <div className="image-card" style={{ backgroundImage: `url(${image})` }}></div> */}
                <div className="card-data">
                    <span className="h">{price} US$</span>
                    <PrettyRating value={rating} icons={icons.star} colors={colors.star} />
                    {/* <span> {rating} </span> */}
                </div>


        </div>
    )
}