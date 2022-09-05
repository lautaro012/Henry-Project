import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getOrders } from '../../redux/Actions/Index'

export default function DatosJuegos({data}) {

    let { id_name } = data

    const dispatch = useDispatch();
    //const navigate = useNavigate();
    const orders = useSelector(state => state.orders)

    console.log("ORDENES PA", orders)

    useEffect(() => {
        dispatch(getOrders(id_name))
    }, [dispatch, id_name])

    return (
        <div>
            <h1>My games</h1>
            {
                orders && orders.map(order => {
                    return (
                        <div>
                             {
                                order.games && order.games.map(game => {
                                    return (
                                        <div id="conteinerCart_order">
                                            <h4>Name</h4>
                                            <p>{game.name}</p>
                                            <h4>Price</h4>
                                            <p>${game.price}</p>
                                            <img src={game.image} alt={game.id}></img>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    )
                })
            }
        </div>
    )
}