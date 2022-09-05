import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getOrders } from '../../redux/Actions/Index'

export default function Orders(data) {

    console.log("DATA DE JUEGOS",data)
    
    let { id_name } = data
    
    const dispatch = useDispatch();
    //const navigate = useNavigate();
    const orders = useSelector( state => state.orders)
    
    console.log("ORDENES PA",orders)
    
    useEffect(() => {
    dispatch(getOrders(id_name))
    }, [dispatch, id_name])

    return (
        <div>
            <h1>HOLA SOY LAS ORDERS</h1>
        </div>
    )
}