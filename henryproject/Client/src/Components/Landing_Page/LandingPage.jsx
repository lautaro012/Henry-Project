// import { Link } from "react-router-dom";
import React from "react";

import '../Landing_Page/LandingPage.css'

//import mclaren from '../../Style/_temp/mclaren.jpg'
import Example from "./Carrousel";
import Footer from "../Footer/Footer";
import NavBar from "../Nav_bar/Nav_bar";
import Carrousel2 from "./Carrousel2";

export default function LandingPage() {


    //const bestGames = [{ name: "Auto", img: mclaren }, { name: "Auto", img: mclaren }, { name: "Auto", img: mclaren }, { name: "Auto", img: mclaren }]

    return (
        <div className="body_landing">

            <NavBar />

            <Example/>

            {/* <Carrousel2/> */}

            <Footer/>
        </div>
    )
}