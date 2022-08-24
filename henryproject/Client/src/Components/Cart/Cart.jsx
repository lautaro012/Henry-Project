import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteItemFromCart } from "../../redux/Actions/Index.js";

import '../Cart/Cart.css'

export default function Cart() {

    const dispatch = useDispatch()
    const items = useSelector(state => state.cart)
    const [cambios, setCambios] = useState("")

    function deleteItem(id) {
        dispatch(deleteItemFromCart(id))
        setCambios("Renderizar")
    }

    return (
        <div className="conteinerCart">
            {
                items.length ?
                 items.map(item => {
                    return (
                        <div id="item">
                            <h1>{item.name}</h1>
                            <p>{item.id}</p>
                            <button onClick={()=> deleteItem(item.id)}>Delete</button>
                        </div>
                    )
                })
                :
                <h1>No hay juegos en CART</h1>
            }
        </div>
    )
}