import { Link, useNavigate } from "react-router-dom";
import React from "react";
import Icon from '../../Style/Imagenes/Icon.PNG'
import Cart from '../../Style/Imagenes/cart.png'
import Cora from '../../Style/Imagenes/Corazon.png'
import { useSelector } from 'react-redux'
import SignUserModal from './SignUserModal.jsx'
import SearchBar from '../SearchBar/SearchBar'

//import UserPop from './UserPop.jsx'

import './Nav_bar.css'
import { useState } from "react";
import ProfileNav from "../ProfileNav/ProfileNav";
//const axios = require('axios')
import { getAllGames } from '../../redux/Actions/Index';
import { useDispatch } from 'react-redux';


export default function Nav_bar({ userLogged, setUserLogged }) {

    const itemsCart = useSelector(state => state.cart)
    const itemsFavorites = useSelector(state => state.favorites)
    const dispatch = useDispatch()
    const navigate = useNavigate()


    const [isOpen, setIsOpen] = useState(false);

    function toggleModal() {
        setIsOpen(!isOpen);
    }

    const onSearch = (name) => {
        navigate("../home/games", { replace: true });
        dispatch(getAllGames(name))
    }


    return (
        <nav className="Nav_bar">

            <Link id="icon" to='/'>
                <img src={Icon} alt="Icon" />
            </Link>

            <div>
                <SearchBar
                    onSearch={onSearch}
                ></SearchBar>
            </div>

            <div>
                <Link to='/home'><button>Home</button></Link>
            </div>

            <div>
                <Link to='/home/games'> <button> Search in our game list </button> </Link>
            </div>
            {/* <Link to='/home/create'><button>Create Videogame</button></Link>

                <Link to='/profile'> <button> My Profile </button></Link>
             */}
            {userLogged ? <ProfileNav userLogged={userLogged} setUserLogged={setUserLogged} /> :

                <div>
                    <button onClick={toggleModal}>Loggin</button>
                    <SignUserModal toggleModal={toggleModal} isOpen={isOpen} setUserLogged={setUserLogged} />
                </div>

            }

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