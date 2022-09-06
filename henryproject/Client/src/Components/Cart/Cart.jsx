import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { deleteItemFromCart } from "../../redux/Actions/Index.js";
import Sad from '../../Style/Imagenes/sadFace.png'

import '../Cart/Cart.css'
// import { FormularioPago } from "../FormularioPago/FormularioPago.jsx";

export default function Cart({props}) {

    const dispatch = useDispatch()
    const items = useSelector(state => state.cart)

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
                                <div key={item.id} id="item">
                                    <img src={item.image} alt={item.id}></img>
                                    <h1>{item.name}</h1>
                                    <h3>$ {item.price}</h3>
                                    <button onClick={() => deleteItem(item.id)}>Delete</button>
                                </div>
                            )
                        })
                    }
                        <div id="caja">
                            <button onClick={() => deleteItem("All")}>Empty cart</button>
                            <h2>Suma total : ${precios}</h2>
                            <Link to={"/cart/formularioPago"}><button>Buy now !</button></Link>
                        </div>
                    </div>

                    :
                    <div>
                        <img src={Sad} alt="Sad Face"></img>
                        <h1>There are no games in your cart</h1>
                    </div>
            }
        </div>
    )
}