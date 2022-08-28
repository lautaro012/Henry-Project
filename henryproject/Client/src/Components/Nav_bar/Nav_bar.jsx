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
const axios = require('axios')


export default function Nav_bar({userLogged , setUserLogged}) {

    const [modal, setModal] = useState(false)
    const itemsCart = useSelector(state => state.cart)
    const itemsFavorites = useSelector(state => state.favorites)

   async function logOutClick() {

        fetch("http://localhost:3001/auth/logout", {
          method: "GET",
          credentials: "include",
          mode: "no-cors",
          headers: {
          Accept: "application/json", 
          "Content-Type": "application/json",
        //    "Access-Control-Allow-Credentials": true,
        //   "Access-Control-Allow-Origin": true
   
          },
        }).then(() => {
            localStorage.removeItem('user')
            setUserLogged(false)
        }).catch(err => {
          console.log(err)
        })

    }


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
             {userLogged ? <button onClick={(e) => logOutClick(e)}>LOGOUT</button> : 
             
             <div>
                <button onClick={toggleModal}>Open modal</button>
                <SignUserModal toggleModal={toggleModal} isOpen={isOpen} userLogged={userLogged} setUserLogged={setUserLogged} />
             </div>
                
             }

                
   
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