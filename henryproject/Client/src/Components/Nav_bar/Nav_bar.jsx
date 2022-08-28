import { Link } from "react-router-dom";
import React from "react";
import Icon from '../../Style/Imagenes/Icon.PNG'
import Cart from '../../Style/Imagenes/cart.png'
import Cora from '../../Style/Imagenes/Corazon.png'
import { useSelector } from 'react-redux'
import SignUserModal from './SignUserModal.jsx'

import UserPop from './UserPop.jsx'

import './Nav_bar.css'
import { useState } from "react";

export default function Nav_bar() {

    const [modal, setModal] = useState(false)
    const [userLogged, setUserLogged] = useState(false)
    const itemsCart = useSelector(state => state.cart)
    const itemsFavorites = useSelector(state => state.favorites)

    function onHanddlePop() {
        modal === false ? setModal(true) : setModal(false)
    }

    const [isOpen, setIsOpen] = useState(false);

    function toggleModal() {
        setIsOpen(!isOpen);
    }

    return (
        <nav className="Nav_bar">

            <Link id="icon" to='/'>
                <img src={Icon} alt="Icon" />
            </Link>

            <div>
            <Link to='/home'><button>Home</button></Link>
            </div>
            {/* <Link to='/home/create'><button>Create Videogame</button></Link>

<Link to='/profile'> <button> My Profile </button></Link>
*/}
            <div>
                <button onClick={toggleModal}>Open modal</button>
                <SignUserModal toggleModal={toggleModal} isOpen={isOpen} />
            </div>

            <div id="cart">
                <Link to='/cart'>
                    <img src={Cart} alt="cart" />
                </Link>
                <h3>{itemsCart && itemsCart.length ? itemsCart.length : 0}</h3>
            </div>

            <div id="fav">
                <Link to='/favorites'>
                    <img src={Cora} alt="fav_item" />
                </Link>
                <h3>{itemsFavorites && itemsFavorites.length ? itemsFavorites.length : 0}</h3>
            </div>

        </nav>
    )
}