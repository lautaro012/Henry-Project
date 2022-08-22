import React from "react";
import '../Game_Details/ImagenPop.css'
import { Modal } from 'reactstrap'

export default function imagenPop({ show, imgPop, img }) {


    return (
        <div className="ImagenPop">

                <img src={img} alt="ImagenPOP"></img>
                <button onClick={() => show()}>X</button>
       
        </div>
    )
}