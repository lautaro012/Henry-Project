import { Link } from "react-router-dom";
import React from "react";
import Icon from '../../Style/Imagenes/Icon.PNG'
import Cart from '../../Style/Imagenes/cart.png'

import UserPop from './UserPop.jsx'

import './Nav_bar.css'
import { useState } from "react";

export default function Nav_bar() {

    const [modal, setModal] = useState(false)
    const [userLogged, setUserLogged] = useState(false)

    function onHanddlePop() {
        modal === false ? setModal(true) : setModal(false)
    }

    return (
        <nav className="Nav_bar">

            <Link id="icon" to='/'>
                <img src={Icon} alt="Icon" />
            </Link>

            <div>

                <Link to='/home'><button>Home</button></Link>
                {/* <Link to='/home/create'><button>Create Videogame</button></Link>

                <Link to='/profile'> <button> My Profile </button></Link>
             */}

                <button onClick={() => onHanddlePop()}>Loggin</button>
            </div>

            <Link id="cart" to='/cart'>
                <img src={Cart} alt="cart" />
            </Link>


            {
                modal ?
                <UserPop show={onHanddlePop} setModal={e => setModal(e)} modal={modal}/>
                :
                 null
            }

        </nav>
    )
}