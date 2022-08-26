import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteItemFromCart } from "../../redux/Actions/Index.js";

import '../Cart/Cart.css'

export default function Cart() {

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
      }, [items]);


    return (
        <div className="conteinerCart">
            {
                items.length ?
                    <div>{
                        items.map(item => {
                            return (
                                <div id="item">
                                    <h1>{item.name}</h1>
                                    <p>$ {item.price}</p>
                                    <button onClick={() => deleteItem(item.id)}>Delete</button>
                                </div>
                            )
                        })
                    }
                        <div>
                            <button onClick={() => deleteItem("All")}>Vaciar carrito</button>
                            <h2>Suma total : ${precios}</h2>
                        </div>
                    </div>

                    :
                    <h1>No hay juegos en CART</h1>
            }
        </div>
    )
}