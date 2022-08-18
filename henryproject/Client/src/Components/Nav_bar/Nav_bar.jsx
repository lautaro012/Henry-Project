import { Link } from "react-router-dom";
import React from "react";
import Icon from '../../Style/Imagenes/Icon.PNG'
import './Nav_bar.css'

export default function Nav_bar() {


    return (
        <nav className="Nav_bar">
            <Link to='/home'>
                <img src={Icon} alt="Icon" />
            </Link>

            <div>
                <Link to='/tienda'>Tienda</Link>

                <Link to='/explorar'>Explorar</Link>

                <Link to='/loggin'>Iniciar sesion</Link>
            </div>
        </nav>
    )
}