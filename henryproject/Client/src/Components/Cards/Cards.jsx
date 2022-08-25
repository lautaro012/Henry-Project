import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/Actions/Index.js";

import './Cards.css';
import { useState } from "react";

export default function Card(card) {

    let { name, image, price, rating, id } = card.card
    const dispatch = useDispatch()
    
    const [cart, setCart] = useState(
        window.localStorage.getItem("cart")
    )

    function addGameToCart() {
        let item = {
            id: id,
            name: name,
        }
        //dispatch(addToCart(item))
        try {
                    setCart(item)
                    window.localStorage.setItem("cart", item)
                    alert(`${name} added to cart!`)
        }
        catch (error){
            console.log(error)
        }
    }

    return (
        <div className="card-videogame">
            <Link to={`/home/games/${id}`} className='Link'>
                <div className="image-card" style={{ backgroundImage: `url(${image})` }}>
                </div>
                <div className="card-data">
                    <span className="h">{name}</span>
                    <span className="h">{price}</span>
                    <span> {rating} </span>
                </div>
            </Link>
            <button onClick={() => addGameToCart()}>AÑADIR AL CARRITO</button>
        </div>
    )
}