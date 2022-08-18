
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import React from "react";

import { getAllGames } from '../../Actions/Index.js'

import '../Home/Home.css'


export default function Home() {

    const dispatch = useDispatch()
    const games = useSelector(state => state.videogames)

    useEffect(() => {
        getAllGames()
    }, [dispatch])

    return (
        <div className="Home">
            <div>
                <h1>Henry's Proyect</h1>
            </div>
            
            <Link to='/'><button>Back to start</button></Link>
            <Link to={'/about'}><button>ABOUT THIS PAGE</button></Link>

        </div>
    )
}