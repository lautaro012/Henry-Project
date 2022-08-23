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
    }, [])

    console.log(genres);

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
    const [error,setError]=useState({
        name: true,
        price: false,
        description: false,
        // rating: false,
        image: false,
        videoTrailer: false ,
        // platforms: [],
        // genres: [],
    });
    const [validate,setValidate]=useState({
        name: true,
        price: false,
        description: false,
        // rating: false,
        image: false,
        videoTrailer: false ,
    })



    //validar los campos
    //Expresiones
    const expresiones={
        name: /^[a-zA-ZñÑ]{1,16}$/,
        price:/^[0-9]{}$/,
        description: /^[a-zA-ZñÑ]{1,40}$/,
        image: /^[a-zA-Z0-9ñÑ ]{1,1000}$/,
        videoTrailer: /^[a-zA-Z0-9ñÑ ]{1,1000}$/,
    }
//Funcion expresion
function validarExpresiones(ev){
    switch (ev.target.name) {
        case "name":
            if(ev.target.value===""){
                setError({...error,name:true});
                setValidate({...validate,name:false});
            }else{
                if(expresiones.name.test(ev.target.value)){
                    setValidate({...validate,name:false});
                }else{
                    setValidate({...validate,name:true});
                }
            }
            break;
        default:
            break;
    }
}




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
    //validacion
    function handleChangeName(e){
        setGame({
            ...game,
            [e.target.name]: e.target.value
        })
        setError({...error,name:false});
    }

    function onBlurName(e){
        validarExpresiones(e);
    }
    function onKeyName(e){
        validarExpresiones(e);
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
                <input type="text" name='name' onChange={(e) => handleChangeName(e)} onBlurName={(e)=>onBlurName(e)} onKeyName={(e)=>onKeyName(e)}></input>
                {
                    (error.name && !validate.name )&& (
                        <p>No dejar los espacios en blanco</p>
                    )
                }
                {
                    validate.name && (
                        <p>Debe contener caracteres correctamente</p>
                    )
                }
                <label>Price</label>
                <input type="text" name='price' onChange = {(e) => handleChange(e)} ></input>
                {
                    (error.name && !validate.name )&& (
                        <p>No dejar los espacios en blanco</p>
                    )
                }
                {
                    validate.name && (
                        <p>Debe contener caracteres correctamente</p>
                    )
                }
                <label>Description</label>
                <input type="text" name='description' onChange={(e) => handleChange(e)}></input>
                {
                    (error.name && !validate.name )&& (
                        <p>No dejar los espacios en blanco</p>
                    )
                }
                {
                    validate.name && (
                        <p>Debe contener caracteres correctamente</p>
                    )
                }
                <label>Image</label>
                <input type="text" name='image' onChange={(e) => handleChange(e)}></input>
                {
                    (error.name && !validate.name )&& (
                        <p>No dejar los espacios en blanco</p>
                    )
                }
                <label>Video Trailer</label>
                <input type="text" name= 'videoTrailer' onChange={(e) => handleChange(e)}></input>
                {
                    (error.name && !validate.name )&& (
                        <p>No dejar los espacios en blanco</p>
                    )
                }
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
                    <div>
                       
                    {
                            genres?.map((c)=>{
                                return(
                                    <div key={c.id} >
                                        <p>{c.name}</p>
                                        <button onClick={()=>onClickDeleteGenres(c.name)}>X</button>
                                    </div>
                                    )
                            })
                    }
                    </div>

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