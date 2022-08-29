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
      }, [items][precios]);

    return (
        <div className="conteinerCart">
            <h1>Bienvenido a tu CART !</h1>
            {
                 items && items.length ?
                    <div id="conteinerCart2">{
                        items && items.map(item => {
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
                        <div>
                            <button onClick={() => deleteItem("All")}>Vaciar carrito</button>
                            <h2>Suma total : ${precios}</h2>
                            <Link to={"/cart/formularioPago"}><button>Pagar</button></Link>

                        </div>
                    </div>

                    :
                    <div>
                        <img src={Sad} alt="Sad Face"></img>
                        <h1>No hay juegos en tu CART</h1>
                    </div>
            }
        </div>
    )
}