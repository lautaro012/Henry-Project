import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getGameById } from "../Actions/Index";
import { useParams } from "react-router-dom";
import { Link, useNavigate } from "react-router-dom";

export default function GameDetails() {

    const dispatch = useDispatch()
    const navigate = useNavigate();
    const game = useSelector(state => state.detail)
    const { id } = useParams() // usa el parametro de la URL

    useEffect(() => {
        dispatch(getGameById(id))
    }, [dispatch])

    return (
        <div className="game_detail">

            <video autoPlay="autoplay" muted type={"video/mp4"} preload="auto" loop src={"video"}></video>

            <h3>Welcome to Food's API</h3>
            <p>In this page you can see different recipes's info with relevant information using the SPOONACULAR external API. Also you can create your own recipes!</p>

        </div>
    )
}