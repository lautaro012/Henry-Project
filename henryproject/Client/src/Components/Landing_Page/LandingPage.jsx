import { Link } from "react-router-dom";
import React from "react";
import video from '../../Style/Videos/IntroVid.mp4'
import '../Landing_Page/LandingPage.css'

export default function LandingPage() {
    return (
        <div className="body_landing">

            <div className="landing">
                <video autoPlay="autoplay" muted type={"video/mp4"} preload="auto" loop src={video}></video>
                <Link to='/home'>
                    <h1>Henry's Proyect</h1>
                </Link>
            </div>

            <h3>Welcome to Games's Store</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
        </div>
    )
}