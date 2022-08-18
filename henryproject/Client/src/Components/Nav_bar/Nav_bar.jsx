import { Link } from "react-router-dom";
import React from "react";

export default function Nav_bar() {


    return (
        <nav>
                <Link to='/home'>
                    <h1>Henry's Proyect</h1>
                </Link>
        </nav>
    )
}