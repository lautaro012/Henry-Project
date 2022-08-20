import React from "react";

import { Modal } from 'reactstrap'

export default function imagenPop({ show, imgPop, img }) {


    return (
        <Modal isOpen={imgPop}>

                <img src={img} alt="ImagenPOP"></img>
                <button onClick={() => show()}>X</button>

        </Modal>
    )
}