import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart, addToFav, deleteItemFromFavs } from "../../redux/Actions/Index.js";
import Heart from '../../Style/Imagenes/Hearth'

import './Cards.css';
import CardHover from "../NewCard/CardHover.jsx";

export default function Card({card, favorites}) {

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

    return (
        <div >
            <Link to={`/home/games/${id}`} className='Link'>
                <CardHover image={image} name={name}/>
                {/* <div className="image-card" style={{ backgroundImage: `url(${image})` }}></div> */}
                <div className="card-data">
                    <span className="h">${price}</span>
                    <span> {rating} </span>
                </div>
            </Link>

            { favorites?.includes(card) ?
            <div className="card-favourite">
                <input id={`hearth-${id}`} type="checkbox" value={name} onClick={(e) =>handleFavourite(e)} checked={true} className="favourite-checkbox"/>
                <label className="favourite-label" htmlFor={`hearth-${id}`}>❤</label>
            </div>
                :
             <div className="card-favourite">
                <input id={`hearth-${id}`} type="checkbox" value={name} onClick={(e) =>handleFavourite(e)} className="favourite-checkbox"/>
                <label className="favourite-label" htmlFor={`hearth-${id}`}>❤</label>
            </div>}

        </div>
    )
}