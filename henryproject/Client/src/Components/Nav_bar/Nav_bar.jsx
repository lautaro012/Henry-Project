import { Link } from "react-router-dom";
import React from "react";
import Icon from '../../Style/Imagenes/Icon.PNG'
import Cart from '../../Style/Imagenes/cart.png'

import UserPop from './UserPop.jsx'

import './Nav_bar.css'
import { useEffect, useState } from "react";

export default function Nav_bar() {

    const [user, setUser] = useState(false)

    function onHanddlePop() {
        user ? setUser(false) : setUser(true)
    }

    return (
        <nav className="Nav_bar">

            <Link id="icon" to='/'>
                <img src={Icon} alt="Icon" />
            </Link>

            <div>

                <Link to='/home'><button>Tienda</button></Link>

                <Link to='/home/games'><button>Explorar</button></Link>

                <button onClick={ () => onHanddlePop()}>Loggin</button>
            </div>

            <Link id="cart" to='/cart'>
                <img src={Cart} alt="cart" />
            </Link>

            {
                user ?
                <UserPop/>
                :
                null
            }
        </nav>
    )
}