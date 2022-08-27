import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteItemFromFavs } from "../../redux/Actions/Index.js";
import Sad from '../../Style/Imagenes/sadFace.png'

import '../Favoritos/Favoritos.css'

export default function Favs() {

    const dispatch = useDispatch()
    const items = useSelector(state => state.favorites)

    function deleteItem(id) {
        dispatch(deleteItemFromFavs(id))
    }

    useEffect(() => {
        localStorage.setItem("favProducts", JSON.stringify(items));
      }, [items]);

    return (
        <div className="conteinerFav">
            <h1>Bienvenido a tu lista de favoritos !</h1>
            {
                 items && items.length ?
                    <div id="conteinerFav2">{
                        items && items.map(item => {
                            return (
                                <div id="itemFav">
                                    <img src={item.image} alt={item.id}></img>
                                    <h1>{item.name}</h1>
                                    <h3>$ {item.price}</h3>
                                    <button onClick={() => deleteItem(item.id)}>Delete</button>
                                </div>
                            )
                        })
                    }
                        <div>
                            <button onClick={() => deleteItem("All")}>Vaciar favoritos</button>
                        </div>
                    </div>
                    :
                    <div>
                        <img src={Sad} alt="Sad Face"></img>
                        <h1>No hay juegos en tu lista de favoritos</h1>
                    </div>
            }
        </div>
    )
}