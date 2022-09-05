import { Link, useNavigate } from "react-router-dom";
import React from "react";
import Icon from '../../Style/Imagenes/Icon.PNG'
import Cart from '../../Style/Imagenes/cart.png'
import Cora from '../../Style/Imagenes/Corazon.png'
import { useSelector } from 'react-redux'
import UserSign from '../UserSign/UserSign'
import SearchBar from '../SearchBar/SearchBar'

//import UserPop from './UserPop.jsx'

import './Nav_bar.css'
import { useState } from "react";
import ProfileNav from "../ProfileNav/ProfileNav";
//const axios = require('axios')
import { getAllGames } from '../../redux/Actions/Index';
import { useDispatch } from 'react-redux';
import Useregister from "../UserRegister/UserRegister";


export default function Nav_bar({ userLogged, setUserLogged }) {

    const itemsCart = useSelector(state => state.cart)
    const itemsFavorites = useSelector(state => state.favorites)
    const dispatch = useDispatch()
    const navigate = useNavigate()


    const [isOpen, setIsOpen] = useState(false);
    const [registerisOpen, setRegisterIsOpen] = useState(false)
    function toggleModal() {
        setIsOpen(!isOpen);
    }
    function changeModal() {
        setIsOpen(false)
        setRegisterIsOpen(true)
    }

    const onSearch = (name) => {
        navigate("../home/games", { replace: true });
        dispatch(getAllGames(name))
    }

    return (
        <nav className="Nav_bar">

            <div id="icon">
                <Link to='/'>
                    <img src={Icon} alt="Icon" />
                </Link>
            </div>

            <div>
                <SearchBar
                    onSearch={onSearch}
                ></SearchBar>
            </div>

            <div>
                <button onClick={() => navigate('/home')}>Home</button>
            </div>

            <div>
                <button onClick={() => navigate('/home/games')}> Explore </button>
            </div>

            {/* <Link to='/home/create'><button>Create Videogame</button></Link>

                <Link to='/profile'> <button> My Profile </button></Link>
             */}
            {userLogged ? 
            
            <ProfileNav userLogged={userLogged} setUserLogged={setUserLogged} /> 
            
            :

                <div>
                    <button onClick={toggleModal}>Loggin</button>
                    <UserSign changeModal={changeModal} setRegisterIsOpen={setRegisterIsOpen} toggleModal={toggleModal} isOpen={isOpen} setUserLogged={e => setUserLogged(e)} />
                    <Useregister registerisOpen={registerisOpen} registersetIsOpen={setRegisterIsOpen} ></Useregister>
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