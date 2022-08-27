import { Link } from "react-router-dom";
import React from "react";
import Icon from '../../Style/Imagenes/Icon.PNG'
import Cart from '../../Style/Imagenes/cart.png'
import { useSelector } from 'react-redux'
import SignUserModal from './SignUserModal.jsx'

import UserPop from './UserPop.jsx'

import './Nav_bar.css'
import { useState } from "react";

export default function Nav_bar() {

    const [modal, setModal] = useState(false)
    const [userLogged, setUserLogged] = useState(false)
    const itemsCart = useSelector(state => state.itemsCart)

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
                {/* <Link to='/home/create'><button>Create Videogame</button></Link>

                <Link to='/profile'> <button> My Profile </button></Link>
             */}

                <button onClick={toggleModal}>Open modal</button>
                <SignUserModal toggleModal={toggleModal} isOpen={isOpen} />
   
            </div>
           

            <div id="cart">
                <Link to='/cart'>
                    <img src={Cart} alt="cart" />
                </Link>

                <h3>{itemsCart}</h3>
            </div>
            
        </nav>
    )
}