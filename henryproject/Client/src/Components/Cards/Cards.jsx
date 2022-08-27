import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart, addToFav } from "../../redux/Actions/Index.js";

import './Cards.css';

export default function Card(card) {

    let { name, image, price, rating, id } = card.card
    const dispatch = useDispatch()

    function addGameToCart() {
        let item = {
            id: id,
            name: name,
            price: price,
            image: image,
        }
        dispatch(addToCart(item))
        alert(`${name} added to cart!`)
    }

    function addGameToFav() {
        let item = {
            id: id,
            name: name,
            price: price,
            image: image,
        }
        dispatch(addToFav(item))
        alert(`${name} added to your favorites!`)
    }

    return (
        <div className="card-videogame">
            <Link to={`/home/games/${id}`} className='Link'>
                <div className="image-card" style={{ backgroundImage: `url(${image})` }}>
                </div>
                <div className="card-data">
                    <span className="h">{name}</span>
                    <span className="h">${price}</span>
                    <span> {rating} </span>
                </div>
            </Link>
            <button onClick={() => addGameToCart()}>AÑADIR AL CARRITO</button>
            <button onClick={() => addGameToFav()}>AÑADIR A LISTA DE FAVORITOS</button>
        </div>
    )
}