import React from "react"
import { useDispatch, useSelector } from "react-redux"
import './CreateVideogame.css'
 import { useEffect, useState } from 'react';
import { getGenres, getPlatforms, createvideogame } from "../../redux/Actions/Index"

export default function CreateVideogame () {

    const dispatch = useDispatch()
    let genres = useSelector(state => state.genres)
    let platforms = useSelector(state => state.platforms)

    useEffect(() => {
        if(genres.length === 0) {
            dispatch(getGenres())
        }
        if(platforms.length === 0) {
            dispatch(getPlatforms())
        }
    }, [dispatch, genres.length, platforms.length])

    const [game, setGame] = useState({
        name: '',
        price: 0,
        description: '',
        rating: 1 ,
        image: '',
        videoTrailer: '' ,
        platforms: [],
        genres: [],

    })

function handleSubmit(e) {
        e.preventDefault()
        dispatch(createvideogame(game))
        alert('VIDEOJUEGO CREADO !! ')
        setGame({
            name: '',
            price: 0,
            description: '',
            rating: 1 ,
            image: '',
            videoTrailer: '' ,
            platforms: [],
            genres: [],
        })
    }


    function handleChange(e) {
        setGame({
            ...game,
            [e.target.name]: e.target.value
        })
    }
    function handleGenre(e) {
        setGame([{
            ...game,
            genres:[...game.genres, e.target.value]
        }
        ])
    }

    function handlePlatform (e){
        setGame([{
            ...game,
            platforms:[...game.platforms, e.target.value]
        }
        ])
    }



    return (
        <div className="div">
            <form className="videogame-form" onSubmit={(e) => handleSubmit(e)}>
                <label>Name</label>
                <input type="text" name='name' onChange={(e) => handleChange(e)}></input>
                <label>Price</label>
                <input type="text" name='price' onChange = {(e) => handleChange(e)} ></input>
                <label>Description</label>
                <input type="text" name='description' onChange={(e) => handleChange(e)}></input>
                <label>Image</label>
                <input type="text" name='image' onChange={(e) => handleChange(e)}></input>
                <label>Video Trailer</label>
                <input type="text" name= 'videoTrailer' onChange={(e) => handleChange(e)}></input>
                <label>Genres</label>
                <select onChange={(e) => handleGenre(e)}>
                    <option>Select Genre</option>
                    {
                        genres.map(genre => {
                            return(
                                <option
                                value={genre.name}
                                key={genre.id}
                                >{genre.name}</option>
                            )
                        })
                    }
                </select>
                <label>Platforms</label>
                <select onChange={(e) => handlePlatform(e)}>
                    <option>Select Platform</option>
                    {
                        platforms.map(platform => {
                            return(<option key={platform.id} value={platform.name}>{platform.name}</option>)
                        })
                    }
                </select>
                <button type="submit" >Add Videogame</button>
            
            </form>
        </div>
    )
}