
import React from "react";

import '../Landing_Page/LandingPage.css'


import Example from "./Carrousel";
import Footer from "../Footer/Footer";
//import Carrousel2 from "./Carrousel2";

export default function LandingPage() {

    return (
        <div className="body_landing">

            <Example/>

            {/* <Carrousel2/> */}

            <Footer/>
        </div>
    )
}