
<<<<<<< HEAD
<<<<<<< HEAD
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
=======
=======
>>>>>>> Lautaro

export default function Home () {

    return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
<<<<<<< HEAD
>>>>>>> e79110e4 (asd)
=======
>>>>>>> Lautaro
    )
}