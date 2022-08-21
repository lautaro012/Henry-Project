import React from "react";

export default function imagenPop({ show, imgPop, img }) {


    return (
        <div className="ImagenPop">
            <img src={img} alt="ImagenPOP"></img>
            <button onClick={() => show()}>X</button>
        </div>
    )
}