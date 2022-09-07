import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { deleteItemFromCart } from "../../redux/Actions/Index.js";
import Icon from '../../Style/Imagenes/Icon.PNG'
import CardHover from "../NewCard/CardHover.jsx";
import PrettyRating from "pretty-rating-react";
import {
    faStar,
    faStarHalfAlt,
} from "@fortawesome/free-solid-svg-icons";
import {
    faStar as farStar,
} from "@fortawesome/free-regular-svg-icons";

import '../Cart/Cart.css'
// import { FormularioPago } from "../FormularioPago/FormularioPago.jsx";

export default function Cart() {

    const dispatch = useDispatch()
    const items = useSelector(state => state.cart)

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

    function deleteItem(id) {
        dispatch(deleteItemFromCart(id))
    }

    let precios = 0;
    for (let i = 0; i < items.length; i++) {
        precios += items[i].price;
    }

    useEffect(() => {
        localStorage.setItem("products", JSON.stringify(items));
        localStorage.setItem("precioTotal", JSON.stringify(precios));
    }, [items, precios]);

    return (
        <div className="conteinerCart">
            <h1>Welcome to your cart !</h1>
            {
                items && items.length ?
                    <div id="conteinerCart2">{
                        items && items?.map(item => {
                            return (
                                // <div key={item.id} id="item">
                                //     <img src={item.image} alt={item.id}></img>
                                //     <h1>{item.name}</h1>
                                //     <h3>$ {item.price}</h3>
                                //     <button onClick={() => deleteItem(item.id)}>Delete</button>
                                // </div>
                                <div key={item.id} id='cart-item-list'>
                                    <Link to={`/home/games/${item.id}`} className='Link'>
                                        <CardHover image={item.image} name={item.name}>
                                        </CardHover>
                                    </Link>
                                    <div>
                                        <h3>Price</h3>
                                        <p>${item.price}</p>
                                        <h3>Rating : </h3>
                                        <PrettyRating value={item.rating} icons={icons.star} colors={colors.star} />
                                    </div>
                                    <button onClick={() => deleteItem(item.id)}>🗑</button>
                                </div>
                            )
                        })
                    }
                        <div id="caja">
                            <button onClick={() => { if (window.confirm("Are you sure to empty your cart ?"))deleteItem("All")}}>Empty cart</button>
                            <h2>Suma total : ${precios}</h2>
                            <Link to={"/cart/formularioPago"}><button>Buy now !</button></Link>
                        </div>
                    </div>

                    :
                    <div id="no_games_cart">
                        <img src={Icon} alt="Sad Face"></img>
                        <h1>There are no games in your cart</h1>
                    </div>
            }
        </div>
    )
}