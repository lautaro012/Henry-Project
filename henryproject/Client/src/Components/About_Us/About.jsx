import { Link } from "react-router-dom";
import React from "react";
import '../About_Us/About.css'

export default function About() {
    return (
        <div className="About">
            <h1>About this page</h1>
            <p>Juan David</p>
            <p>
                HLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit
                in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>

            <div>
                <Link to='/home'>
                    <button id="backToHome">Back to Home</button>
                </Link>
            </div>

        </div>
    )
}