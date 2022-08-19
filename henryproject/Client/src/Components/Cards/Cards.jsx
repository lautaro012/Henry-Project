import React from "react";
import { Link } from "react-router-dom";
import './Cards.css';

export default function Card(card){
    console.log(card)
     let {name, image, id, price, rating} = card.card
       return(
        <Link to= {"/detail/"+id} className='Link'> 
            <div className="card-videogame">
                <h3 className="h">{name}</h3>
                <h5 className="h">{price}</h5>
                <h6> {rating} </h6>
                <button className="button">Fav</button>
                <img src={image} width="250 px" height= "250 px" alt="img" />
            </div>
        </Link>
       )
}