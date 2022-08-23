import React from "react";
import { Link } from "react-router-dom";
import './Cards.css';

export default function Card(card){
  
     let {name, image, price, rating, id} = card.card
       return(
        <div className="card-videogame">
            <Link to={`/home/games/${id}`} className='Link'>
                <div className="image-card" style={{backgroundImage: `url(${image})`}}>
                </div>
                <div className="card-data">
                    <span className="h">{name}</span>
                    <span className="h">{price}</span>
                    <span> {rating} </span>
                </div>
            </Link>
        </div> 
       )
}