import React from "react";
import './MiniCards.css';

export default function MiniCard(data) {

    let { name, image, released, id } = data.data

    return (
        <div className="mini_card-videogame">
            <div className="mini_image-card" style={{ backgroundImage: `url(${image})` }}>
            </div>
            <div className="mini_card-data">
                <span> {name}</span>
                <span> {released} </span>
            </div>
        </div>
    )
}