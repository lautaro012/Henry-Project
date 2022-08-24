import React from "react";
import { useDispatch, useSelector } from "react-redux";

export default function Cart({game}) {

    const items = useSelector(state => state.cart)

    return (
        <div >
            {
                items.length < 0 ?
                items.map(item => {
                    return (
                        <div>

                            <h1>{item.name}</h1>
                        </div>
                    )
                })
                :
                <p>No se encontraron items en la cart</p>
            }
        </div>
    )
}