import React from "react";
import '../Game_Details/ImagenPop.css'
import { Modal } from 'reactstrap'


export default function imagenPop({ show, imgPop, img }) {
    

    return (
        <Modal id="modalDetail" isOpen={imgPop} presentationStyle='fullScreen' autoFocus="true">
            <img src={img} alt="ImagenPOP"></img>
            <button onClick={() => show()}>X</button>
        </Modal>
    )
}