import React from "react"
import { useDispatch, useSelector } from "react-redux"
import './CreateVideogames.css'
 import { useEffect, useState } from 'react';
import { getGenres, getPlatforms, getTags, postVideoGame } from "../../redux/Actions/Index"
import { Carousel } from 'react-responsive-carousel';
import ReactPlayer from 'react-player'
import finalPropsSelectorFactory from "react-redux/es/connect/selectorFactory";
import { useNavigate } from "react-router-dom";



export default function CreateVideogame () {
    const dispatch=useDispatch();
    // Traemos las Plataforms,Tag,Genre
    const platforms=useSelector(state=>state.platforms);
    const genres=useSelector(state=>state.genres);
    const tags=useSelector(state=>state.tags);

  // usamos useEffect
  useEffect(()=>{
    dispatch(getPlatforms());
    dispatch(getGenres());
    dispatch(getTags());
},[dispatch])


let history=useNavigate();
  const handleRegresar=()=>{
    history("/admin")
  }  

    // states
    // state general
    const [state,setState]=useState({
        name:"",
        price:"",
        description:"",
        rating:"",
        video:[],
        image:"",
        screenshots:[],
        store:[],
        developers:[],
        publishers:[],
        website:"",
        releaseDate:"",
        metacritic:"",
        esrb_rating:"",
        platforms:[],
        tags:[],
        genres:[]
    })

    // state movie
    const [movie,setMovie]=useState({
        name:""
    })
    // state screenshot
    const [screenshot,setScreenshot]=useState({
        name:""
    })
    // state stores
    const [store,setStore]=useState({
        name:""
    })
    // state developers
    const [developer,setDeveloper]=useState({
        name:""
    })
     // state publisher
     const [publisher,setPublisher]=useState({
        name:""
    })
    // state platforms
    const [platform,setPlatform]=useState({
        name:""
    });
    // state genres
    const [genre,setGenre]=useState({
        name:""
    })
    // state tags
    const [tag,setTag]=useState({
        name:""
    })

    //STATE ERROR
    const [error,setError]=useState({
        name:false,
        price:false,
        description:false,
        rating:false,
        video:false,
        image:false,
        screenshots:false,
        store:false,
        developers:false,
        publishers:false,
        website:false,
        releaseDate:false,
        metacritic:false,
        esrb_rating:false,
        platforms:false,
        tags:false,
        genres:false
    })
    // STATE VALIDATE
    const [validate,setValidate]=useState({
        name:false,
        price:false,
        description:false,
        rating:false,
        video:false,
        image:false,
        screenshots:false,
        store:false,
        developers:false,
        publishers:false,
        website:false,
        releaseDate:false,
        metacritic:false,
        esrb_rating:false,
        platforms:false,
        tags:false,
        genres:false
    })
   
    // stado para visualizar
    const [stateVisual,setStateVisual]=useState({
        visual:true,
        name:false,
        price:false,
        description:false,
        rating:false,
        video:false,
        image:false,
        screenshots:false,
        store:false,
        developers:true,
        publishers:true,
        website:true,
        releaseDate:true,
        metacritic:true,
        esrb_rating:true,
        platforms:true,
        tags:true,
        genres:true
    })

    //Expresiones
    const expresiones={
        name: /^[a-zA-ZñÑ0-9 ]{1,40}$/,
        price:/^[0-9 ]{1,3}[.][0-9]{1,2}$/,
        description:/^[a-zA-Z0-9ñÑ ]{1,1000}$/,
        rating: /^[0-9]{1,5}$/,
        developers: /^[a-zA-ZñÑ0-9 ]{1,40}$/,
        publishers: /^[a-zA-ZñÑ0-9 ]{1,40}$/,
        metacritic: /^[0-9]{1,5}$/,
        esrb_rating:    /^[a-zA-ZñÑ0-9 ]{1,40}$/
    }

    // Funcion para validar 
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
            case "price":
                if(ev.target.value===""){
                    setError({...error,price:true});
                    setValidate({...validate,price:false});
                }else{
                    if(expresiones.price.test(ev.target.value)){
                        setValidate({...validate,price:false});
                    }else{
                        setValidate({...validate,price:true});
                    }
                }
                break;
            case "description":
                if(ev.target.value===""){
                    setError({...error,description:true});
                    setValidate({...validate,description:false});
                }else{
                    if(expresiones.description.test(ev.target.value)){
                        setValidate({...validate,description:false});
                    }else{
                        setValidate({...validate,description:true});
                    }
                }
                break;
            case "rating":
                if(ev.target.value===""){
                    setError({...error,rating:true});
                    setValidate({...validate,rating:false});
                }else{
                    if(expresiones.rating.test(ev.target.value)){
                        setValidate({...validate,rating:false});
                    }else{
                        setValidate({...validate,rating:true});
                    }
                }
                break;
            case "video":
                if(ev.target.value===""){
                    setError({...error,video:true});
                    // setValidate({...validate,description:false});
                }
                // else{
                //     if(expresiones.description.test(ev.target.value)){
                //         setValidate({...validate,description:false});
                //     }else{
                //         setValidate({...validate,description:true});
                //     }
                // }
                break;
            case "image":
                if(ev.target.value===""){
                    setError({...error,image:true});
                    // setValidate({...validate,description:false});
                }
                // else{
                //     if(expresiones.description.test(ev.target.value)){
                //         setValidate({...validate,description:false});
                //     }else{
                //         setValidate({...validate,description:true});
                //     }
                // }
                break;
            case "screenshots":
                if(ev.target.value===""){
                    setError({...error,screenshots:true});
                    // setValidate({...validate,description:false});
                }
                // else{
                //     if(expresiones.description.test(ev.target.value)){
                //         setValidate({...validate,description:false});
                //     }else{
                //         setValidate({...validate,description:true});
                //     }
                // }
                break;
            case "developers":
                if(ev.target.value===""){
                    setError({...error,developers:true});
                    setValidate({...validate,developers:false});
                }
                else{
                    if(expresiones.developers.test(ev.target.value)){
                        setValidate({...validate,developers:false});
                    }else{
                        setValidate({...validate,developers:true});
                    }
                }
                break;
             case "publishers":
                if(ev.target.value===""){
                    setError({...error,publishers:true});
                    setValidate({...validate,publishers:false});
                }
                else{
                    if(expresiones.publishers.test(ev.target.value)){
                        setValidate({...validate,publishers:false});
                    }else{
                        setValidate({...validate,publishers:true});
                    }
                }
                break;
            case "website":
                if(ev.target.value===""){
                    setError({...error,website:true});
                    // setValidate({...validate,description:false});
                }
                // else{
                //     if(expresiones.description.test(ev.target.value)){
                //         setValidate({...validate,description:false});
                //     }else{
                //         setValidate({...validate,description:true});
                //     }
                // }
                break;
            case "releaseDate":
                if(ev.target.value===""){
                    setError({...error,releaseDate:true});
                    // setValidate({...validate,description:false});
                }
                // else{
                //     if(expresiones.description.test(ev.target.value)){
                //         setValidate({...validate,description:false});
                //     }else{
                //         setValidate({...validate,description:true});
                //     }
                // }
                break;
            case "metacritic":
                if(ev.target.value===""){
                    setError({...error,metacritic:true});
                    setValidate({...validate,metacritic:false});
                }
                else{
                    if(expresiones.metacritic.test(ev.target.value)){
                        setValidate({...validate,metacritic:false});
                    }else{
                        setValidate({...validate,metacritic:true});
                    }
                }
                break;
            case "esrb_rating":
                if(ev.target.value===""){
                    setError({...error,esrb_rating:true});
                    setValidate({...validate,esrb_rating:false});
                }
                else{
                    if(expresiones.esrb_rating.test(ev.target.value)){
                        setValidate({...validate,esrb_rating:false});
                    }else{
                        setValidate({...validate,esrb_rating:true});
                    }
                }
                break;
            default:
                break;
        }
    } 




    // Funciones para la Creacion de Videogames
    //NAME
    function onChangeNameVideogame(ev){
        setState({...state,name:ev.target.value});
        setStateVisual({...stateVisual,visual:false,name:true});
        setError({...error,name:false});
    }
    function onBlurNameVideogame(ev){
        validarExpresiones(ev);
    }
    function onKeyUpVideogame(ev){
        validarExpresiones(ev);
    }

    // price
    function onChangePriceVideogame(ev){
        setState({...state,price:ev.target.value});
        setError({...error,price:false});
        setStateVisual({...stateVisual,visual:false,name:false,price:true});
        if(state.name){
            setStateVisual({...stateVisual,visual:false,name:true,price:true})
        }
    }
    function onBlurPriceVideogame(ev){
        validarExpresiones(ev);
    }
    function onKeyUpPriceVidegame(ev){
        validarExpresiones(ev);
    }


    //description
    function onChangeDescriptionVideogame(ev){
        setState({...state,description:ev.target.value});
        setError({...error,description:false});
        setStateVisual({...stateVisual,visual:false,name:false,price:false,description:true})
        if(state.name){
            setStateVisual({...stateVisual,visual:false,name:true,price:false,description:true})
        }
        if(state.price){
            setStateVisual({...stateVisual,visual:false,name:false,price:true,description:true})
        }
        if(state.name && state.price){
            setStateVisual({...stateVisual,visual:false,name:true,price:true,description:true})
        }
    }
    function onBlurDescriptionVideogame(ev){
        validarExpresiones(ev);
    }
    function onKeyUpDescriptionVidegame(ev){
        validarExpresiones(ev);
    }


    // rating
    function onChangeRatingVideogame(ev){
        setState({...state,rating:ev.target.value});
        setError({...error,rating:false});
        setStateVisual({...stateVisual,visual:false,name:false,price:false,description:false,rating:true})
        if(state.name){
            setStateVisual({...stateVisual,visual:false,name:true,price:false,description:false,rating:true,})
        }
        if(state.price){
            setStateVisual({...stateVisual,visual:false,name:false,price:true,description:false,rating:true})
        }
        if(state.description){
            setStateVisual({...stateVisual,visual:false,name:false,price:false,description:true,rating:true})
        }
        if(state.name && state.price){
            setStateVisual({...stateVisual,visual:false,name:true,price:true,description:false,rating:true})
        }
        if(state.name && state.description){
            setStateVisual({...stateVisual,visual:false,name:true,price:false,description:true,rating:true})
        }
        
        if(state.price && state.description){
            setStateVisual({...stateVisual,visual:false,name:false,price:true,description:true,rating:true})
        }
        if(state.name && state.price && state.description){
            setStateVisual({...stateVisual,visual:false,name:true,price:true,description:true,rating:true})
        }

    }
    function onBlurRatingVideogame(ev){
        validarExpresiones(ev);
    }
    function onKeyUpRatingVidegame(ev){
        validarExpresiones(ev);
    }

    // video
    function onChangeMovieVideogame(ev){
                setMovie({...movie,name:ev.target.value});       
    }


    function onClickAgregarMovie(){
        
        if(!state.video.includes(movie.name)){
            if(movie.name!==""){
                setState({...state,video:[...state.video,movie.name]});
            
            setStateVisual({...stateVisual,visual:false,name:false,price:false,description:false,rating:false,video:true})
            if(state.name){
                setStateVisual({...stateVisual,visual:false,name:true,price:false,description:false,rating:false,video:true})
            }
            if(state.price){
                setStateVisual({...stateVisual,visual:false,name:false,price:true,description:false,rating:false,video:true})
            }
            if(state.description){
                setStateVisual({...stateVisual,visual:false,name:false,price:false,description:true,rating:false,video:true})
            }
            if(state.rating){
                setStateVisual({...stateVisual,visual:false,name:false,price:false,description:false,rating:true,video:true})
            }
            if(state.name && state.price){
                setStateVisual({...stateVisual,visual:false,name:true,price:true,description:false,rating:false,video:true})
            }
            if(state.name && state.description){
                setStateVisual({...stateVisual,visual:false,name:true,price:false,description:true,rating:false,video:true})
            }
            if(state.name && state.rating){
                setStateVisual({...stateVisual,visual:false,name:true,price:false,description:false,rating:true,video:true})
            }
            if(state.price && state.description){
                setStateVisual({...stateVisual,visual:false,name:false,price:true,description:true,rating:false,video:true})
            }
            if(state.price && state.rating){
                setStateVisual({...stateVisual,visual:false,name:false,price:true,description:false,rating:true,video:true})
            }
            if(state.name && state.price && state.description){
                setStateVisual({...stateVisual,visual:false,name:true,price:true,description:true,rating:true,video:true})
            }
            if(state.name && state.price && state.rating){
                setStateVisual({...stateVisual,visual:false,name:true,price:true,description:false,rating:true,video:true})
            }
            if(state.name && state.rating && state.description){
                setStateVisual({...stateVisual,visual:false,name:true,price:false,description:true,rating:true,video:true})
            }
            
            if(state.description && state.rating && state.price){
                setStateVisual({...stateVisual,visual:false,name:false,price:true,description:true,rating:true,video:true})
            }
            if(state.name&&state.description && state.rating && state.price){
                setStateVisual({...stateVisual,visual:false,name:true,price:true,description:true,rating:true,video:true})
            }

        }
    }

        
    }
    function onClickDeleteVideo(ev){
        setState({...state,video:[...state.video].filter((video)=>video!==ev)});
    }
    

    //image
    function onChangeImageVideogame(ev){
        setState({...state,image:ev.target.value});
        setStateVisual({...stateVisual,visual:false,name:false,price:false,description:false,rating:false,video:false,image:true})
        if(state.name){
            setStateVisual({...stateVisual,visual:false,name:true,price:false,description:false,rating:false,video:false,image:true})
        }
        if(state.price){
            setStateVisual({...stateVisual,visual:false,name:false,price:true,description:false,rating:false,video:false,image:true})
        }
        if(state.description){
            setStateVisual({...stateVisual,visual:false,name:false,price:false,description:true,rating:false,video:false,image:true})
        }
        if(state.rating){
            setStateVisual({...stateVisual,visual:false,name:false,price:false,description:false,rating:true,video:false,image:true})
        }
        if(state.video.length!=0){
            setStateVisual({...stateVisual,visual:false,name:false,price:false,description:false,rating:false,video:true,image:true})
        }
        if(state.name && state.price){
            setStateVisual({...stateVisual,visual:false,name:true,price:true,description:false,rating:false,video:false,image:true})
        }
        if(state.name && state.description){
            setStateVisual({...stateVisual,visual:false,name:true,price:false,description:true,rating:false,video:false,image:true})
        }
        if(state.name && state.rating){
            setStateVisual({...stateVisual,visual:false,name:true,price:false,description:false,rating:true,video:false,image:true})
        }
        if(state.name && state.video.length!=0){
            setStateVisual({...stateVisual,visual:false,name:true,price:false,description:false,rating:false,video:true,image:true})
        }
        if(state.price && state.description){
            setStateVisual({...stateVisual,visual:false,name:false,price:true,description:true,rating:false,video:false,image:true})
        }
        if(state.price && state.rating){
            setStateVisual({...stateVisual,visual:false,name:false,price:true,description:false,rating:true,video:false,image:true})
        }
        if(state.price && state.video.length!=0){
            setStateVisual({...stateVisual,visual:false,name:false,price:true,description:false,rating:false,video:true,image:true})
        }
        if(state.description && state.rating){
            setStateVisual({...stateVisual,visual:false,name:false,price:false,description:true,rating:true,video:false,image:true})
        }
        if(state.description && state.video.length!=0){
            setStateVisual({...stateVisual,visual:false,name:false,price:false,description:true,rating:false,video:true,image:true})
        }
        if(state.rating && state.video.length!=0){
            setStateVisual({...stateVisual,visual:false,name:false,price:false,description:false,rating:true,video:true,image:true})
        }
        if(state.name && state.price && state.description){
            setStateVisual({...stateVisual,visual:false,name:true,price:true,description:true,rating:false,video:false,image:true})
        }
        if(state.name && state.price && state.rating){
            setStateVisual({...stateVisual,visual:false,name:true,price:true,description:false,rating:true,video:false,image:true})
        }
        if(state.name && state.price && state.video.length!=0){
            setStateVisual({...stateVisual,visual:false,name:true,price:true,description:false,rating:false,video:true,image:true})
        }
        if(state.name && state.description && state.rating){
            setStateVisual({...stateVisual,visual:false,name:true,price:false,description:true,rating:true,video:false,image:true})
        }

        if(state.name && state.description && state.video.length!=0){
            setStateVisual({...stateVisual,visual:false,name:true,price:false,description:true,rating:false,video:true,image:true})
        }
        if(state.name && state.rating && state.video.length!=0){
            setStateVisual({...stateVisual,visual:false,name:true,price:false,description:false,rating:true,video:true,image:true})
        }
        if(state.price && state.description && state.rating){
            setStateVisual({...stateVisual,visual:false,name:false,price:true,description:true,rating:true,video:true,image:true})
        }
        if(state.price && state.description && state.video.length!=0){
            setStateVisual({...stateVisual,visual:false,name:false,price:true,description:true,rating:false,video:true,image:true})
        }
        if(state.price && state.rating && state.video.length!=0){
            setStateVisual({...stateVisual,visual:false,name:false,price:true,description:false,rating:true,video:true,image:true})
        }
        if(state.description && state.rating && state.video.length!=0){
            setStateVisual({...stateVisual,visual:false,name:false,price:false,description:true,rating:true,video:true,image:true})
        }
        if(state.name&&state.price && state.description && state.rating){
            setStateVisual({...stateVisual,visual:false,name:true,price:true,description:true,rating:true,video:false,image:true})
        }
        if(state.name&&state.description && state.rating && state.video.length!=0){
            setStateVisual({...stateVisual,visual:false,name:true,price:false,description:true,rating:true,video:true,image:true})
        }
        if(state.price&&state.description && state.rating && state.video.length!=0){
            setStateVisual({...stateVisual,visual:false,name:false,price:true,description:true,rating:true,video:true,image:true})
        }
        if(state.name&&state.price&&state.description && state.rating && state.video.length!=0){
            setStateVisual({...stateVisual,visual:false,name:true,price:true,description:true,rating:true,video:true,image:true})
        }

    }

    // screnshot
    function onChangescreenshotVideogame(ev){
        setScreenshot({...screenshot,name:ev.target.value});
        // setState({...state,screenshots:[ev.target.value]})
    }
    function onClickAgregarScreenshot(){
        if(!state.screenshots.includes(screenshot.name)){
            if(screenshot.name!==""){
            setState({...state,screenshots:[...state.screenshots,screenshot.name]});
            setStateVisual({...stateVisual,visual:false,name:false,price:false,description:false,rating:false,video:false,image:false,screenshots:true})
            if(state.name){
                setStateVisual({...stateVisual,visual:false,name:true,price:false,description:false,rating:false,video:false,image:false,screenshots:true})
            }
            if(state.price){
                setStateVisual({...stateVisual,visual:false,name:false,price:true,description:false,rating:false,video:false,image:false,screenshots:true})
            }
            if(state.description){
                setStateVisual({...stateVisual,visual:false,name:false,price:false,description:true,rating:false,video:false,image:false,screenshots:true})
            }
            if(state.rating){
                setStateVisual({...stateVisual,visual:false,name:false,price:false,description:false,rating:true,video:false,image:false,screenshots:true})
            }
            if(state.video.length!=0){
                setStateVisual({...stateVisual,visual:false,name:false,price:false,description:false,rating:false,video:true,image:false,screenshots:true})
            }
            if(state.image){
                setStateVisual({...stateVisual,visual:false,name:false,price:false,description:false,rating:false,video:false,image:true,screenshots:true})
            }
            if(state.name && state.price){
                setStateVisual({...stateVisual,visual:false,name:true,price:true,description:false,rating:false,video:false,image:false,screenshots:true})
            }
            if(state.name && state.description){
                setStateVisual({...stateVisual,visual:false,name:true,price:false,description:true,rating:false,video:false,image:false,screenshots:true})
            }
            if(state.name && state.rating){
                setStateVisual({...stateVisual,visual:false,name:true,price:false,description:false,rating:true,video:false,image:false,screenshots:true})
            }
            if(state.name && state.video.length!=0){
                setStateVisual({...stateVisual,visual:false,name:true,price:false,description:false,rating:false,video:true,image:false,screenshots:true})
            }
            if(state.name && state.image){
                setStateVisual({...stateVisual,visual:false,name:true,price:false,description:false,rating:false,video:false,image:true,screenshots:true})
            }
            if(state.price && state.description){
                setStateVisual({...stateVisual,visual:false,name:false,price:true,description:true,rating:false,video:false,image:false,screenshots:true})
            }
            if(state.price && state.rating){
                setStateVisual({...stateVisual,visual:false,name:false,price:true,description:false,rating:true,video:false,image:false,screenshots:true})
            }
            if(state.price && state.video.length!=0){
                setStateVisual({...stateVisual,visual:false,name:false,price:true,description:false,rating:false,video:true,image:false,screenshots:true})
            }
            if(state.price && state.image){
                setStateVisual({...stateVisual,visual:false,name:false,price:true,description:false,rating:false,video:false,image:true,screenshots:true})
            }
            if(state.description && state.rating){
                setStateVisual({...stateVisual,visual:false,name:false,price:false,description:true,rating:true,video:false,image:false,screenshots:true})
            }
            if(state.description && state.video.length!=0){
                setStateVisual({...stateVisual,visual:false,name:false,price:false,description:true,rating:false,video:true,image:false,screenshots:true})
            }
            if(state.description && state.image){
                setStateVisual({...stateVisual,visual:false,name:false,price:false,description:true,rating:false,video:false,image:true,screenshots:true})
            }
            if(state.rating && state.video.length!=0){
                setStateVisual({...stateVisual,visual:false,name:false,price:false,description:false,rating:true,video:true,image:false,screenshots:true})
            }
            if(state.rating && state.image){
                setStateVisual({...stateVisual,visual:false,name:false,price:false,description:false,rating:true,video:false,image:true,screenshots:true})
            }
            if(state.name && state.price && state.description){
                setStateVisual({...stateVisual,visual:false,name:true,price:true,description:true,rating:false,video:false,image:false,screenshots:true})
            }
            if(state.name && state.rating && state.description){
                setStateVisual({...stateVisual,visual:false,name:true,price:false,description:true,rating:true,video:false,image:false,screenshots:true})
            }
            if(state.name && state.rating && state.price){
                setStateVisual({...stateVisual,visual:false,name:true,price:true,description:false,rating:true,video:false,image:false,screenshots:true})
            }
            if(state.name && state.price && state.video.length!=0){
                setStateVisual({...stateVisual,visual:false,name:true,price:true,description:false,rating:false,video:true,image:false,screenshots:true})
            }
            if(state.name && state.price && state.image){
                setStateVisual({...stateVisual,visual:false,name:true,price:true,description:false,rating:false,video:false,image:true,screenshots:true})
            }
            if(state.name && state.description && state.video.length!=0){
                setStateVisual({...stateVisual,visual:false,name:true,price:false,description:true,rating:false,video:true,image:false,screenshots:true})
            }
            if(state.name && state.rating && state.video.length!=0){
                setStateVisual({...stateVisual,visual:false,name:true,price:false,description:false,rating:true,video:true,image:false,screenshots:true})
            }
            if(state.name && state.image && state.video.length!=0){
                setStateVisual({...stateVisual,visual:false,name:true,price:false,description:false,rating:false,video:true,image:true,screenshots:true})
            }
            if(state.price && state.description && state.rating){
                setStateVisual({...stateVisual,visual:false,name:false,price:true,description:true,rating:true,video:true,image:false,screenshots:true})
            }
            if(state.price && state.description && state.video.length!=0){
                setStateVisual({...stateVisual,visual:false,name:false,price:true,description:true,rating:false,video:true,image:false,screenshots:true})
            }
            if(state.price && state.description && state.image){
                setStateVisual({...stateVisual,visual:false,name:false,price:true,description:true,rating:false,video:false,image:true,screenshots:true})
            }
            if(state.price && state.rating && state.video.length!=0){
                setStateVisual({...stateVisual,visual:false,name:false,price:true,description:false,rating:true,video:true,image:false,screenshots:true})
            }
            if(state.price && state.rating && state.image){
                setStateVisual({...stateVisual,visual:false,name:false,price:true,description:false,rating:true,video:false,image:true,screenshots:true})
            }
            if(state.price && state.video.length!=0 && state.image){
                setStateVisual({...stateVisual,visual:false,name:false,price:true,description:false,rating:false,video:true,image:true,screenshots:true})
            }
            if(state.description && state.rating && state.video.length!=0){
                setStateVisual({...stateVisual,visual:false,name:false,price:false,description:true,rating:true,video:true,image:false,screenshots:true})
            }
            if(state.description && state.rating && state.image){
                setStateVisual({...stateVisual,visual:false,name:false,price:false,description:true,rating:true,video:false,image:true,screenshots:true})
            }
            if(state.description && state.video.length!=0 && state.image){
                setStateVisual({...stateVisual,visual:false,name:false,price:false,description:true,rating:false,video:true,image:true,screenshots:true})
            }
            if(state.rating && state.video.length!=0 && state.image){
                setStateVisual({...stateVisual,visual:false,name:false,price:false,description:false,rating:true,video:true,image:true,screenshots:true})
            }
            if(state.name&&state.price && state.description && state.rating){
                setStateVisual({...stateVisual,visual:false,name:true,price:true,description:true,rating:true,video:false,image:false,screenshots:true})
            }
            if(state.name&& state.price && state.rating && state.video.length!=0){
                setStateVisual({...stateVisual,visual:false,name:true,price:true,description:false,rating:true,video:false,image:true,screenshots:true})
            }
            if(state.name&& state.price && state.video.length!=0 && state.image){
                setStateVisual({...stateVisual,visual:false,name:true,price:true,description:false,rating:false,video:true,image:true,screenshots:true})
            }
            if(state.name&&state.description && state.rating && state.video.length!=0){
                setStateVisual({...stateVisual,visual:false,name:true,price:false,description:true,rating:true,video:true,image:false,screenshots:true})
            }
            if(state.name&&state.description  && state.video.length!=0&& state.image){
                setStateVisual({...stateVisual,visual:false,name:true,price:false,description:true,rating:false,video:true,image:true,screenshots:true})
            }
            if(state.name && state.rating && state.video.length!=0 && state.image){
                setStateVisual({...stateVisual,visual:false,name:true,price:false,description:false,rating:true,video:true,image:true,screenshots:true})
            }
    
            if(state.price&&state.description && state.rating && state.video.length!=0){
                setStateVisual({...stateVisual,visual:false,name:false,price:true,description:true,rating:true,video:true,image:false,screenshots:true})
            }
            if(state.price&&state.description && state.video.length!=0 && state.image){
                setStateVisual({...stateVisual,visual:false,name:false,price:true,description:true,rating:false,video:true,image:true,screenshots:true})
            }
            if(state.price&&state.rating && state.video.length!=0 && state.image){
                setStateVisual({...stateVisual,visual:false,name:false,price:true,description:false,rating:true,video:true,image:true,screenshots:true})
            }
            if(state.name&&state.price&&state.description && state.rating && state.video.length!=0){
                setStateVisual({...stateVisual,visual:false,name:true,price:true,description:true,rating:true,video:true,image:false,screenshots:true})
            }
            if(state.name&&state.price&& state.rating && state.video.length!=0&&state.image ){
                setStateVisual({...stateVisual,visual:false,name:true,price:true,description:false,rating:true,video:true,image:true,screenshots:true})
            }
            if(state.price&&state.description&& state.rating && state.video.length!=0&&state.image){
                setStateVisual({...stateVisual,visual:false,name:false,price:true,description:true,rating:true,video:true,image:true,screenshots:true})
            }
            if(state.name&&state.price&&state.description && state.rating && state.video.length!=0 && state.image){
                setStateVisual({...stateVisual,visual:false,name:true,price:true,description:true,rating:true,video:true,image:true,screenshots:true})
            }
            }
        }
        


    }
    function onClickDeleteScreenshot(ev){
        setState({...state,screenshots:[...state.screenshots].filter((screenshot)=>screenshot!==ev)});
        setStateVisual({...stateVisual,visual:false})
    
    }

    //store
    function onChangestoreVideogame(ev){
        if(!state.store.includes(ev.target.value)){
            if(ev.target.value!=="All"){
                setState({...state,store:[...state.store,ev.target.value]});
            setStore({...store,name:ev.target.value});
            setStateVisual({...stateVisual,visual:false,name:false,price:false,description:false,rating:false,video:false,image:false,screenshots:false,store:true})
        if(state.name){
            setStateVisual({...stateVisual,visual:false,name:true,price:false,description:false,rating:false,video:false,image:false,screenshots:false,store:true})
        }
        if(state.price){
            setStateVisual({...stateVisual,visual:false,name:false,price:true,description:false,rating:false,video:false,image:false,screenshots:false,store:true})
        }
        if(state.description){
            setStateVisual({...stateVisual,visual:false,name:false,price:false,description:true,rating:false,video:false,image:false,screenshots:false,store:true})
        }
        if(state.rating){
            setStateVisual({...stateVisual,visual:false,name:false,price:false,description:false,rating:true,video:false,image:false,screenshots:false,store:true})
        }
        if(state.video.length!=0){
            setStateVisual({...stateVisual,visual:false,name:false,price:false,description:false,rating:false,video:true,image:false,screenshots:false,store:true})
        }
        if(state.image){
            setStateVisual({...stateVisual,visual:false,name:false,price:false,description:false,rating:false,video:false,image:true,screenshots:false,store:true})
        }
        if(state.screenshots.length!=0){
            setStateVisual({...stateVisual,visual:false,name:false,price:false,description:false,rating:false,video:false,image:false,screenshots:true,store:true})
        }
        if(state.name && state.price){
            setStateVisual({...stateVisual,visual:false,name:true,price:true,description:false,rating:false,video:false,image:false,screenshots:false,store:true})
        }
        if(state.name && state.description){
            setStateVisual({...stateVisual,visual:false,name:true,price:false,description:true,rating:false,video:false,image:false,screenshots:false,store:true})
        }
        if(state.name && state.rating){
            setStateVisual({...stateVisual,visual:false,name:true,price:false,description:false,rating:true,video:false,image:false,screenshots:false,store:true})
        }
        if(state.name && state.video.length!=0){
            setStateVisual({...stateVisual,visual:false,name:true,price:false,description:false,rating:false,video:true,image:false,screenshots:false,store:true})
        }
        if(state.name && state.image){
            setStateVisual({...stateVisual,visual:false,name:true,price:false,description:false,rating:false,video:false,image:true,screenshots:false,store:true})
        }
        if(state.name && state.screenshots.length!=0){
            setStateVisual({...stateVisual,visual:false,name:true,price:false,description:false,rating:false,video:false,image:false,screenshots:true,store:true})
        }
        if(state.price && state.description){
            setStateVisual({...stateVisual,visual:false,name:false,price:true,description:true,rating:false,video:false,image:false,screenshots:false,store:true})
        }
        if(state.price && state.rating){
            setStateVisual({...stateVisual,visual:false,name:false,price:true,description:false,rating:true,video:false,image:false,screenshots:false,store:true})
        }
        if(state.price && state.video.length!=0){
            setStateVisual({...stateVisual,visual:false,name:false,price:true,description:false,rating:false,video:true,image:false,screenshots:false,store:true})
        }
        if(state.price && state.image){
            setStateVisual({...stateVisual,visual:false,name:false,price:true,description:false,rating:false,video:false,image:true,screenshots:false,store:true})
        }
        if(state.price && state.screenshots.length!=0){
            setStateVisual({...stateVisual,visual:false,name:false,price:true,description:false,rating:false,video:false,image:false,screenshots:true,store:true})
        }
        if(state.description && state.rating){
            setStateVisual({...stateVisual,visual:false,name:false,price:false,description:true,rating:true,video:false,image:false,screenshots:false,store:true})
        }
        if(state.description && state.video.length!=0){
            setStateVisual({...stateVisual,visual:false,name:false,price:false,description:true,rating:false,video:true,image:false,screenshots:false,store:true})
        }
        if(state.description && state.image){
            setStateVisual({...stateVisual,visual:false,name:false,price:false,description:true,rating:false,video:false,image:true,screenshots:false,store:true})
        }
        if(state.description && state.screenshots.length!=0){
            setStateVisual({...stateVisual,visual:false,name:false,price:false,description:true,rating:false,video:false,image:false,screenshots:true,store:true})
        }
        if(state.rating && state.video.length!=0){
            setStateVisual({...stateVisual,visual:false,name:false,price:false,description:false,rating:true,video:true,image:false,screenshots:false,store:true})
        }
        if(state.rating && state.image){
            setStateVisual({...stateVisual,visual:false,name:false,price:false,description:false,rating:true,video:false,image:true,screenshots:false,store:true})
        }
        if(state.rating && state.screenshots.length!=0){
            setStateVisual({...stateVisual,visual:false,name:false,price:false,description:false,rating:true,video:false,image:false,screenshots:true,store:true})
        }
        if(state.video.length!=0 && state.image){
            setStateVisual({...stateVisual,visual:false,name:false,price:false,description:false,rating:false,video:true,image:true,screenshots:false,store:true})
        }
        if(state.video.length!=0 && state.screenshots.length!=0){
            setStateVisual({...stateVisual,visual:false,name:false,price:false,description:false,rating:false,video:true,image:false,screenshots:true,store:true})
        }
        if(state.name && state.price && state.description){
            setStateVisual({...stateVisual,visual:false,name:true,price:true,description:true,rating:false,video:false,image:false,screenshots:false,store:true})
        }
        if(state.name && state.price && state.rating){
            setStateVisual({...stateVisual,visual:false,name:true,price:true,description:false,rating:true,video:false,image:false,screenshots:false,store:true})
        }
        if(state.name && state.price && state.video.length!=0){
            setStateVisual({...stateVisual,visual:false,name:true,price:true,description:false,rating:false,video:true,image:false,screenshots:false,store:true})
        }
        if(state.name && state.price && state.image){
            setStateVisual({...stateVisual,visual:false,name:true,price:true,description:false,rating:false,video:false,image:true,screenshots:false,store:true})
        }
        if(state.name && state.price && state.video.length!=0){
            setStateVisual({...stateVisual,visual:false,name:true,price:true,description:false,rating:false,video:false,image:false,screenshots:true,store:true})
        }
        if(state.name && state.description && state.rating){
            setStateVisual({...stateVisual,visual:false,name:true,price:false,description:true,rating:true,video:false,image:false,screenshots:false,store:true})
        }        
        if(state.name && state.description && state.video.length!=0){
            setStateVisual({...stateVisual,visual:false,name:true,price:false,description:true,rating:false,video:true,image:false,screenshots:false,store:true})
        }
        if(state.name && state.description && state.image){
            setStateVisual({...stateVisual,visual:false,name:true,price:false,description:true,rating:false,video:false,image:true,screenshots:false,store:true})
        }
        if(state.name && state.description && state.screenshots.length!=0){
            setStateVisual({...stateVisual,visual:false,name:true,price:false,description:true,rating:false,video:false,image:false,screenshots:true,store:true})
        }
        if(state.name && state.rating && state.video.length!=0){
            setStateVisual({...stateVisual,visual:false,name:true,price:false,description:false,rating:true,video:true,image:false,screenshots:false,store:true})
        }
        if(state.name && state.rating && state.image){
            setStateVisual({...stateVisual,visual:false,name:true,price:false,description:false,rating:true,video:false,image:true,screenshots:false,store:true})
        }
        if(state.name && state.rating && state.screenshots.length!=0){
            setStateVisual({...stateVisual,visual:false,name:true,price:false,description:false,rating:true,video:false,image:false,screenshots:true,store:true})
        }
        if(state.name && state.video.length!=0 && state.image ){
            setStateVisual({...stateVisual,visual:false,name:true,price:false,description:false,rating:false,video:true,image:true,screenshots:false,store:true})
        }
        if(state.name && state.video.length!=0 && state.screenshots.length!=0 ){
            setStateVisual({...stateVisual,visual:false,name:true,price:false,description:false,rating:false,video:true,image:false,screenshots:true,store:true})
        }
        if(state.name && state.image && state.screenshots.length!=0){
            setStateVisual({...stateVisual,visual:false,name:true,price:false,description:false,rating:false,video:false,image:true,screenshots:true,store:true})
        }
        if(state.price && state.description && state.rating){
            setStateVisual({...stateVisual,visual:false,name:false,price:true,description:true,rating:true,video:false,image:false,screenshots:false,store:true})
        }
        if(state.price && state.description && state.video.length!=0){
            setStateVisual({...stateVisual,visual:false,name:false,price:true,description:true,rating:false,video:true,image:false,screenshots:false,store:true})
        }
        if(state.price && state.description && state.image){
            setStateVisual({...stateVisual,visual:false,name:false,price:true,description:true,rating:false,video:false,image:true,screenshots:false,store:true})
        }
        if(state.price && state.description && state.screenshots.length!=0){
            setStateVisual({...stateVisual,visual:false,name:false,price:true,description:true,rating:false,video:false,image:false,screenshots:true,store:true})
        }
        if(state.price && state.rating && state.video.length!=0){
            setStateVisual({...stateVisual,visual:false,name:false,price:true,description:false,rating:true,video:true,image:false,screenshots:false,store:true})
        }
        if(state.price && state.rating && state.image){
            setStateVisual({...stateVisual,visual:false,name:false,price:true,description:false,rating:true,video:false,image:true,screenshots:false,store:true})
        }
        if(state.price && state.rating && state.screenshots.length!=0){
            setStateVisual({...stateVisual,visual:false,name:false,price:true,description:false,rating:true,video:false,image:false,screenshots:true,store:true})
        }
        if(state.price && state.video.length!=0 && state.image){
            setStateVisual({...stateVisual,visual:false,name:false,price:true,description:false,rating:false,video:true,image:true,screenshots:false,store:true})
        }
        if(state.price && state.video.length!=0 && state.screenshots.length!=0){
            setStateVisual({...stateVisual,visual:false,name:false,price:true,description:false,rating:false,video:true,image:false,screenshots:true,store:true})
        }
        if(state.price && state.image!=0 && state.screenshots.length!=0){
            setStateVisual({...stateVisual,visual:false,name:false,price:true,description:false,rating:false,video:false,image:true,screenshots:true,store:true})
        }
        if(state.description && state.rating && state.video.length!=0){
            setStateVisual({...stateVisual,visual:false,name:false,price:false,description:true,rating:true,video:true,image:false,screenshots:false,store:true})
        }
        if(state.description && state.rating && state.image){
            setStateVisual({...stateVisual,visual:false,name:false,price:false,description:true,rating:true,video:false,image:true,screenshots:false,store:true})
        }
        if(state.description && state.rating && state.screenshots.length!=0){
            setStateVisual({...stateVisual,visual:false,name:false,price:false,description:true,rating:true,video:false,image:false,screenshots:true,store:true})
        }
        if(state.description && state.video.length!=0 && state.image){
            setStateVisual({...stateVisual,visual:false,name:false,price:false,description:true,rating:false,video:true,image:true,screenshots:false,store:true})
        }
        if(state.description && state.video.length!=0 && state.screenshots.length!=0){
            setStateVisual({...stateVisual,visual:false,name:false,price:false,description:true,rating:false,video:true,image:false,screenshots:true,store:true})
        }
        if(state.description && state.image && state.screenshots.length!=0){
            setStateVisual({...stateVisual,visual:false,name:false,price:false,description:true,rating:false,video:false,image:true,screenshots:true,store:true})
        }
        if(state.rating && state.video.length!=0 && state.image){
            setStateVisual({...stateVisual,visual:false,name:false,price:false,description:false,rating:true,video:true,image:true,screenshots:false,store:true})
        }
        if(state.rating && state.video.length!=0 && state.screenshots.length!=0){
            setStateVisual({...stateVisual,visual:false,name:false,price:false,description:false,rating:true,video:true,image:false,screenshots:true,store:true})
        }
        if(state.video.length!=0 && state.image && state.screenshots.length!=0){
            setStateVisual({...stateVisual,visual:false,name:true,price:false,description:false,rating:false,video:true,image:true,screenshots:true,store:true})
        }
        if(state.name&&state.price && state.description && state.rating){
            setStateVisual({...stateVisual,visual:false,name:true,price:true,description:true,rating:true,video:false,image:false,screenshots:false,store:true})
        }
        if(state.name&& state.price && state.rating && state.video.length!=0){
            setStateVisual({...stateVisual,visual:false,name:true,price:true,description:false,rating:true,video:false,image:true,screenshots:false,store:true})
        }
        if(state.name&& state.price && state.video.length!=0 && state.image){
            setStateVisual({...stateVisual,visual:false,name:true,price:true,description:false,rating:false,video:true,image:true,screenshots:false,store:true})
        }
        if(state.name&& state.price && state.image && state.screenshots.length!=0){
            setStateVisual({...stateVisual,visual:false,name:true,price:true,description:false,rating:false,video:false,image:true,screenshots:true,store:true})
        }
        if(state.name&&state.description && state.rating && state.video.length!=0){
            setStateVisual({...stateVisual,visual:false,name:true,price:false,description:true,rating:true,video:true,image:false,screenshots:false,store:true})
        }
        if(state.name&&state.description  && state.video.length!=0&& state.image){
            setStateVisual({...stateVisual,visual:false,name:true,price:false,description:true,rating:false,video:true,image:true,screenshots:false,store:true})
        }
        if(state.name&&state.description  && state.image && state.screenshots.length!=0){
            setStateVisual({...stateVisual,visual:false,name:true,price:false,description:true,rating:false,video:false,image:true,screenshots:true,store:true})
        }

        if(state.name && state.rating && state.video.length!=0 && state.image){
            setStateVisual({...stateVisual,visual:false,name:true,price:false,description:false,rating:true,video:true,image:true,screenshots:false,store:true})
        }
        if(state.name && state.rating && state.video.length!=0 && state.screenshots.length!=0){
            setStateVisual({...stateVisual,visual:false,name:true,price:false,description:false,rating:true,video:true,image:false,screenshots:true,store:true})
        }
        if(state.name  && state.video.length!=0 && state.image && state.screenshots.length!=0){
            setStateVisual({...stateVisual,visual:false,name:true,price:false,description:false,rating:false,video:true,image:true,screenshots:true,store:true})
        }

        if(state.price&&state.description && state.rating && state.video.length!=0){
            setStateVisual({...stateVisual,visual:false,name:false,price:true,description:true,rating:true,video:true,image:false,screenshots:false,store:true})
        }
        if(state.price&&state.description && state.video.length!=0 && state.image){
            setStateVisual({...stateVisual,visual:false,name:false,price:true,description:true,rating:false,video:true,image:true,screenshots:false,store:true})
        }
        if(state.price&&state.description && state.video.length!=0 && state.screenshots.length!=0){
            setStateVisual({...stateVisual,visual:false,name:false,price:true,description:true,rating:false,video:true,image:false,screenshots:true,store:true})
        }
        if(state.price&&state.rating && state.video.length!=0 && state.image){
            setStateVisual({...stateVisual,visual:false,name:false,price:true,description:false,rating:true,video:true,image:true,screenshots:false,store:true})
        }
        if(state.price&&state.rating && state.video.length!=0 && state.screenshots.length!=0){
            setStateVisual({...stateVisual,visual:false,name:false,price:true,description:false,rating:true,video:true,image:false,screenshots:true,store:true})
        }
        if(state.description&&state.rating && state.video.length!=0 && state.image){
            setStateVisual({...stateVisual,visual:false,name:false,price:false,description:true,rating:true,video:true,image:true,screenshots:false,store:true})
        }
        if(state.description&&state.rating && state.video.length!=0 && state.screenshots.length!=0){
            setStateVisual({...stateVisual,visual:false,name:false,price:false,description:true,rating:true,video:true,image:false,screenshots:true,store:true})
        }
        if(state.rating && state.video.length!=0&&state.image && state.screenshots.length!=0){
            setStateVisual({...stateVisual,visual:false,name:false,price:false,description:false,rating:true,video:true,image:true,screenshots:true,store:true})
        }

        if(state.name&&state.price&&state.description && state.rating && state.video.length!=0){
            setStateVisual({...stateVisual,visual:false,name:true,price:true,description:true,rating:true,video:true,image:false,screenshots:false,store:true})
        }
        if(state.name&&state.price&& state.rating && state.video.length!=0&&state.image ){
            setStateVisual({...stateVisual,visual:false,name:true,price:true,description:false,rating:true,video:true,image:true,screenshots:false,store:true})
        }
        if(state.name&&state.price&& state.rating && state.video.length!=0&&state.screenshots.length!=0 ){
            setStateVisual({...stateVisual,visual:false,name:true,price:true,description:false,rating:true,video:true,image:false,screenshots:true,store:true})
        }
        if(state.price&&state.description&& state.rating && state.video.length!=0&&state.image){
            setStateVisual({...stateVisual,visual:false,name:false,price:true,description:true,rating:true,video:true,image:true,screenshots:false,store:true})
        }
        if(state.price&&state.description&& state.rating && state.video.length!=0&&state.screenshots.length!=0){
            setStateVisual({...stateVisual,visual:false,name:false,price:true,description:true,rating:true,video:true,image:false,screenshots:true,store:true})
        }
        if(state.name&&state.price&&state.description && state.rating && state.video.length!=0 && state.image){
            setStateVisual({...stateVisual,visual:false,name:true,price:true,description:true,rating:true,video:true,image:true,screenshots:false,store:true})
        }
        if(state.name&&state.price&&state.description && state.rating && state.video.length!=0 && state.image && state.screenshots.length!=0){
            setStateVisual({...stateVisual,visual:false,name:true,price:true,description:true,rating:true,video:true,image:true,screenshots:true,store:true})
        }
            }
        }
    }
    function onClickDeleteStore(ev){
        setState({...state,store:[...state.store].filter((store)=>store!==ev)});
        setStateVisual({...stateVisual,visual:false})

    }

    // developers
    function onChangedevelopersVideogame(ev){
        setDeveloper({...developer,name:ev.target.value});
        setError({...error,developers:false});

    }
    function onClickAgregarDeveloper(){
        if(!state.developers.includes(developer.name)){
            if(developer.name!==""){
        setState({...state,developers:[...state.developers,developer.name]});
        setStateVisual({...stateVisual,visual:false})
        // setStateVisual({...stateVisual,visual:false,name:false,price:false,description:false,rating:false,video:false,image:false,screenshots:false,store:false,developers:true})
        // if(state.name&&state.price&&state.description && state.rating && state.video.length!=0 && state.image && state.screenshots.length!=0 && state.store.length!=0){
        //     setStateVisual({...stateVisual,visual:false,name:true,price:true,description:true,rating:true,video:true,image:true,screenshots:true,store:true,developers:true})
        // }
        }
        }
    }
    function onClickDeletedeveloper(ev){
        setState({...state,developers:[...state.developers].filter((developer)=>developer!==ev)});
        setStateVisual({...stateVisual,visual:false})
    
    }
    function onBlurDeveloperVideogame(ev){
        validarExpresiones(ev);
    }
    function onKeyUpDeveloperVidegame(ev){
        validarExpresiones(ev);
    }

    // publishers
    function onChangepublishersVideogame(ev){
        // setState({...state,publishers:[ev.target.value]});
        setPublisher({...publisher,name:ev.target.value});
        setError({...error,publishers:false});
    }
    function onClickAgregarPublishers(){
        if(!state.publishers.includes(publisher.name)){
            if(publisher.name!==""){
        setState({...state,publishers:[...state.publishers,publisher.name]});
        setStateVisual({...stateVisual,visual:false})
        // setStateVisual({...stateVisual,visual:false,name:false,price:false,description:false,rating:false,video:false,image:false,screenshots:false,store:false,developers:false,publishers:true})
        // if(state.name&&state.price&&state.description && state.rating && state.video.length!=0 && state.image && state.screenshots.length!=0 && state.store.length!=0 && state.developers.length!=0){
        //     setStateVisual({...stateVisual,visual:false,name:true,price:true,description:true,rating:true,video:true,image:true,screenshots:true,store:true,developers:true, publishers:true})
        // }
        }
    }
    }
    function onClickDeletePublishers(ev){
        setState({...state,publishers:[...state.publishers].filter((publisher)=>publisher!==ev)});
        setStateVisual({...stateVisual,visual:false})
    }
    function onBlurPublishersVideogame(ev){
        validarExpresiones(ev);
    }
    function onKeyUpPublishersVidegame(ev){
        validarExpresiones(ev);
    }

    // website
    function onChangewebsiteVideogame(ev){
        setState({...state,website:ev.target.value});
        setError({...error,website:false});
        setStateVisual({...stateVisual,visual:false})
        // setStateVisual({...stateVisual,visual:false,name:false,price:false,description:false,rating:false,video:false,image:false,screenshots:false,store:false,developers:false,publishers:false,website:true})
        // if(state.name&&state.price&&state.description && state.rating && state.video.length!=0 && state.image && state.screenshots.length!=0 && state.store.length!=0 && state.developers.length!=0 && state.publishers.length!=0){
        //     setStateVisual({...stateVisual,visual:false,name:true,price:true,description:true,rating:true,video:true,image:true,screenshots:true,store:true,developers:true, publishers:true,website:true})
        // }
    }
    function onBlurWebSiteVideogame(ev){
        validarExpresiones(ev);
    }
    function onKeyUpPWebSiteVidegame(ev){
        validarExpresiones(ev);
    }

    // releaseDate
    function onChangereleaseDateVideogame(ev){
        setState({...state,releaseDate:ev.target.value});
        setError({...error,releaseDate:false});
        setStateVisual({...stateVisual,visual:false})
        // setStateVisual({...stateVisual,visual:false,name:false,price:false,description:false,rating:false,video:false,image:false,screenshots:false,store:false,developers:false,publishers:false,website:false,releaseDate:true})
        // if(state.name&&state.price&&state.description && state.rating && state.video.length!=0 && state.image && state.screenshots.length!=0 && state.store.length!=0 && state.developers.length!=0 && state.publishers.length!=0 && state.website){
        //     setStateVisual({...stateVisual,visual:false,name:true,price:true,description:true,rating:true,video:true,image:true,screenshots:true,store:true,developers:true, publishers:true,website:true,releaseDate:true})
        // }
    }
    function onBlurReleaseDateVideogame(ev){
        validarExpresiones(ev);
    }
    function onKeyUpReleaseDateVidegame(ev){
        validarExpresiones(ev);
    }

    // metacritic
    function onChangemetacriticVideogame(ev){
        setState({...state,metacritic:ev.target.value});
        setError({...error,metacritic:false});
        setStateVisual({...stateVisual,visual:false})
        // setStateVisual({...stateVisual,visual:false,name:false,price:false,description:false,rating:false,video:false,image:false,screenshots:false,store:false,developers:false,publishers:false,website:false,releaseDate:false,metacritic:true})
        // if(state.name&&state.price&&state.description && state.rating && state.video.length!=0 && state.image && state.screenshots.length!=0 && state.store.length!=0 && state.developers.length!=0 && state.publishers.length!=0 && state.website && state.releaseDate){
        //     setStateVisual({...stateVisual,visual:false,name:true,price:true,description:true,rating:true,video:true,image:true,screenshots:true,store:true,developers:true, publishers:true,website:true,releaseDate:true,metacritic:true})
        // }
    }
    function onBlurMetacriticVideogame(ev){
        validarExpresiones(ev);
    }
    function onKeyUpMetacriticVidegame(ev){
        validarExpresiones(ev);
    }

    // esrb_rating
    function onChangeesrb_ratingVideogame(ev){
        setState({...state,esrb_rating:ev.target.value});
        setError({...error,esrb_rating:false});
        setStateVisual({...stateVisual,visual:false})
        // setStateVisual({...stateVisual,visual:false,name:false,price:false,description:false,rating:false,video:false,image:false,screenshots:false,store:false,developers:false,publishers:false,website:false,releaseDate:false,metacritic:false,esrb_rating:true})
        // if(state.name&&state.price&&state.description && state.rating && state.video.length!=0 && state.image && state.screenshots.length!=0 && state.store.length!=0 && state.developers.length!=0 && state.publishers.length!=0 && state.website && state.releaseDate && state.metacritic){
        //     setStateVisual({...stateVisual,visual:false,name:true,price:true,description:true,rating:true,video:true,image:true,screenshots:true,store:true,developers:true, publishers:true,website:true,releaseDate:true,metacritic:true,esrb_rating:true})
        // }
    }
    function onBluresrRatingVideogame(ev){
        validarExpresiones(ev);
    }
    function onKeyUpesrRatingVidegame(ev){
        validarExpresiones(ev);
    }

    // platforms
    function onChangeplatformsVideogame(ev){
        if(!state.platforms.includes(ev.target.value)){
            if(ev.target.value!=="All"){
                setState({...state,platforms:[...state.platforms,ev.target.value]});
            // setError({...error,diet:false})
            setPlatform({...platform,name:ev.target.value});
            setStateVisual({...stateVisual,visual:false})
            // setStateVisual({...stateVisual,visual:false,name:false,price:false,description:false,rating:false,video:false,image:false,screenshots:false,store:false,developers:false,publishers:false,website:false,releaseDate:false,metacritic:false,esrb_rating:false,platforms:true})
            // if(state.name&&state.price&&state.description && state.rating && state.video.length!=0 && state.image && state.screenshots.length!=0 && state.store.length!=0 && state.developers.length!=0 && state.publishers.length!=0 && state.website && state.releaseDate && state.metacritic && state.esrb_rating){
            // setStateVisual({...stateVisual,visual:false,name:true,price:true,description:true,rating:true,video:true,image:true,screenshots:true,store:true,developers:true, publishers:true,website:true,releaseDate:true,metacritic:true,esrb_rating:true,platforms:true})
            // }

            }
        }
    }
    //Platform => ELIMINAR
    function onClickDeletePlatform(ev){
        setState({...state,platforms:[...state.platforms].filter((platform)=>platform!==ev)});
        
    
    } 


    // tag
    function onChangetagVideogame(ev){
        if(!state.tags.includes(ev.target.value)){
            if(ev.target.value!=="All"){
                setState({...state,tags:[...state.tags,ev.target.value]});
            // setError({...error,diet:false})
            setTag({...tag,name:ev.target.value});
            setStateVisual({...stateVisual,visual:false})
            // setStateVisual({...stateVisual,visual:false,name:false,price:false,description:false,rating:false,video:false,image:false,screenshots:false,store:false,developers:false,publishers:false,website:false,releaseDate:false,metacritic:false,esrb_rating:false,platforms:false,tags:true})
            // if(state.name&&state.price&&state.description && state.rating && state.video.length!=0 && state.image && state.screenshots.length!=0 && state.store.length!=0 && state.developers.length!=0 && state.publishers.length!=0 && state.website && state.releaseDate && state.metacritic && state.esrb_rating && state.developers.length!=0){
            // setStateVisual({...stateVisual,visual:false,name:true,price:true,description:true,rating:true,video:true,image:true,screenshots:true,store:true,developers:true, publishers:true,website:true,releaseDate:true,metacritic:true,esrb_rating:true,platforms:true,tags:true})
            // }

            }
        }
    }
    //tag => ELIMINAR
    function onClickDeleteTag(ev){
        setState({...state,tags:[...state.tags].filter((tag)=>tag!==ev)});
        setStateVisual({...stateVisual,visual:false})

    } 

    // genre
    function onChangegenreVideogame(ev){
        if(!state.genres.includes(ev.target.value)){
            if(ev.target.value!=="All"){
                setState({...state,genres:[...state.genres,ev.target.value]});
            // setError({...error,diet:false})
            setGenre({...genre,name:ev.target.value});
            setStateVisual({...stateVisual,visual:false})

            // setStateVisual({...stateVisual,visual:false,name:false,price:false,description:false,rating:false,video:false,image:false,screenshots:false,store:false,developers:false,publishers:false,website:false,releaseDate:false,metacritic:false,esrb_rating:false,platforms:false,tags:false,genres:true})
            // if(state.name&&state.price&&state.description && state.rating && state.video.length!=0 && state.image && state.screenshots.length!=0 && state.store.length!=0 && state.developers.length!=0 && state.publishers.length!=0 && state.website && state.releaseDate && state.metacritic && state.esrb_rating && state.developers.length!=0&& state.tags.length!=0){
            // setStateVisual({...stateVisual,visual:false,name:true,price:true,description:true,rating:true,video:true,image:true,screenshots:true,store:true,developers:true, publishers:true,website:true,releaseDate:true,metacritic:true,esrb_rating:true,platforms:true,tags:true,genres:true})
            // }

            }
        }
    }
    //genre => ELIMINAR
    function onClickDeleteGenres(ev){
        setState({...state,genres:[...state.genres].filter((genre)=>genre!==ev)});
        setStateVisual({...stateVisual,visual:false})

    } 

    // onclickSubmit
    function onClickSubmit(){
        dispatch(postVideoGame(state));
        alert("Se ha creado correctamente");
        handleRegresar();
    }

    // Para el detalle
    function stars(number) {
        if (number >= 1 && number < 2) {
            return "⭐"
        }
        else if (number >= 2 && number < 3) {
            return "⭐⭐"
        }
        else if (number >= 3 && number < 4) {
            return "⭐⭐⭐"
        }
        else if (number >= 4 && number < 5) {
            return "⭐⭐⭐⭐"
        }
        else if (number == 5) {
            return "⭐⭐⭐⭐⭐"
        }
    }

    return(
        <div className='container-createVideogames'>
            <div className="subContainer-createVideogames">
                <div className="subContainer01">
                    <div>
                        <img width={150} src='https://img2.thejournal.ie/inline/1881369/original/?width=630&version=1881369' alt='imagen de perfil'></img>
                    </div>
                    <div>
                        <button><span >CREATE VIDEOGAME</span></button> 
                        <button><span >EDIT VIDEOGAME</span></button> 
                        <button><span> SETTINGS </span></button>
                    </div>
                </div>
                <div className="subContainer02">
                    <div className="divcontainer01">
                        {/* Formulario de Crear Videogames */}
                        <h2 className="h2">Create Videogame</h2>
                        {/*Name*/}
                        <div className="create-name">
                            <label>Name: </label>
                            <input type="text" onChange={(ev)=>onChangeNameVideogame(ev)} name="name" value={state.name} placeholder="Enter the name of the game" onBlur={(ev)=>{onBlurNameVideogame(ev)}} onKeyUp={(ev)=>onKeyUpVideogame(ev)}/>
                                {
                                    (error.name && !validate.name )&& (
                                        <p className="error-name">No dejar los espacios en blanco</p>
                                    )
                                }
                                {
                                    validate.name && (
                                        <p className="validatee-name">Debe contener caracteres correctamente</p>
                                    )
                                }
                        </div>
                        {/* Precio */}
                        <div className="create-price">
                            <label>Price: </label>
                            <input type="text" onChange={(ev)=>onChangePriceVideogame(ev)} value={state.price} name="price" placeholder="$/. " onBlur={(ev)=>{onBlurPriceVideogame(ev)}} onKeyUp={(ev)=>onKeyUpPriceVidegame(ev)}/>
                                {
                                    (error.price && !validate.price )&& (
                                        <p className="error-name">No dejar los espacios en blanco</p>
                                    )
                                }
                                {
                                    validate.price && (
                                        <p className="validatee-name">Debe contener caracteres correctamente</p>
                                    )
                                }
                        </div>
                        {/* Descripcion */}
                        <div className="create-description">
                            <label>Description: </label>
                            <textarea cols="50" rows="7" placeholder="Write some description..." onChange={(ev)=>onChangeDescriptionVideogame(ev)} value={state.description} name="description" onBlur={(ev)=>onBlurDescriptionVideogame(ev)} onKeyUp={(ev)=>onKeyUpDescriptionVidegame(ev)}></textarea>
                                {
                                    (error.description && !validate.description )&& (
                                        <p className="error-name">No dejar los espacios en blanco</p>
                                    )
                                }
                                {
                                    validate.description && (
                                        <p className="validatee-name">Debe contener caracteres correctamente</p>
                                    )
                                }
                        </div>
                        {/* Rating */}
                        <div className="create-rating">
                            <label>Rating: </label>
                            <input type="text" onChange={(ev)=>onChangeRatingVideogame(ev)} value={state.rating} name="rating" placeholder="Enter the Rating" onBlur={(ev)=>onBlurRatingVideogame(ev)} onKeyUp={(ev)=>onKeyUpRatingVidegame(ev)}/>
                                {
                                    (error.rating && !validate.rating )&& (
                                        <p className="error-name">No dejar los espacios en blanco</p>
                                    )
                                }
                                {
                                    validate.rating && (
                                        <p className="validatee-name">Debe contener caracteres correctamente</p>
                                    )
                                }
                        </div>
                        {/* Video */}
                        <div className="create-video">
                            <label>Movie: </label>
                            <input type="text" onChange={(ev)=>onChangeMovieVideogame(ev)} value={movie.name}/>
                            <input type="submit" value="+" onClick={()=>onClickAgregarMovie()}/>
                            {/* <input type="file" name="adjunto" accept=".mp4,.jpg,.png" multiple /> */}
                                {
                                    state.video?.map((video)=>{
                                        return(
                                            <div key={video} className="ccvideo">
                                                <p>{video}</p>
                                                <input type="submit" onClick={()=>onClickDeleteVideo(video)} value="X"/>
                                            </div>
                                            )
                                    })
                                }
                        </div>
                        {/* Imagen */}
                        <div className="create-image">
                            <label>Image: </label>
                            <input type="text" onChange={(ev)=>onChangeImageVideogame(ev)} value={state.image}/>
                            {/* <input type="file" name="adjunto" accept=".mp4,.jpg,.png" multiple /> */}
                        </div>
                        {/* screenshots */}
                        <div className="create-screenshots">
                            <label>Screenshots: </label>
                            <input type="text" onChange={(ev)=>onChangescreenshotVideogame(ev)} value={screenshot.name}/>
                            <input type="submit" value="+" onClick={()=>onClickAgregarScreenshot()}/>
                            {/* <input type="file" name="adjunto" accept=".mp4,.jpg,.png" multiple /> */}
                                {
                                    state.screenshots?.map((screenshot)=>{
                                        return(
                                            <div key={screenshot} className="ccscren">
                                                <p>{screenshot}</p>
                                                <input type="submit" onClick={()=>onClickDeleteScreenshot(screenshot)} value="X"/>
                                            </div>
                                            )
                                    })
                                }
                        </div>
                        {/* store */}
                        <div className="create-store">
                            <label>Store: </label>
                            {/* <input type="text" onChange={(ev)=>onChangestoreVideogame(ev)} value={state.store}/> */}
                            <select onChange={(ev)=>onChangestoreVideogame(ev)} value={store.name}>
                                <option value="All">Select Store: </option>
                                <option value="Steam">Steam</option>
                                <option value="PlayStation Store">PlayStation Store</option>
                                <option value="Xbox Store">Xbox Store</option>
                                <option value="App Store">App Store</option>
                                <option value="GOG">GOG</option>
                                <option value="Nintendo Store">Nintendo Store</option>
                                <option value="Xbox 360 Store">Xbox 360 Store</option>
                                <option value="Google Play">Google Play</option>
                                <option value="itch.io">itch.io</option>
                                <option value="Epic Games">Epic Games</option>
                            </select>
                            <div>
                                {
                                    state.store?.map((store)=>{
                                        return(
                                            <div key={store} className="ccstore">
                                                <p>{store}</p>
                                                <input type="submit" onClick={()=>onClickDeleteStore(store)} value="X"/>
                                            </div>
                                            )
                                    })
                                }
                            </div> 
                        </div>
                        {/* Developers */}
                        <div className="create-developers">
                            <label>Developers: </label>
                            <input type="text" onChange={(ev)=>onChangedevelopersVideogame(ev)} value={developer.name} name="developers" placeholder="Enter to Developers" onBlur={(ev)=>onBlurDeveloperVideogame(ev)} onKeyUp={(ev)=>{onKeyUpDeveloperVidegame(ev)}}/>
                            <input type="submit" value="+" onClick={()=>onClickAgregarDeveloper()}/>
                                {
                                    state.developers?.map((developer)=>{
                                        return(
                                            <div key={developer} className="ccdevelop">
                                                <p>{developer}</p>
                                                <input type="submit" onClick={()=>onClickDeletedeveloper(developer)} value="X"/>
                                            </div>
                                            )
                                    })
                                }
                                {
                                    (error.developers && !validate.developers )&& (
                                        <p className="error-name">No dejar los espacios en blanco</p>
                                    )
                                }
                                {
                                    validate.developers && (
                                        <p className="validatee-name">Debe contener caracteres correctamente</p>
                                    )
                                }
                        </div>
                        {/* Publishers */}
                        <div className="create-publishers">
                            <label>Publishers: </label>
                            <input type="text" onChange={(ev)=>onChangepublishersVideogame(ev)} value={publisher.name} name="publishers" placeholder="Enter to Publishers" onBlur={(ev)=>onBlurPublishersVideogame(ev)} onKeyUp={(ev)=>{onKeyUpPublishersVidegame(ev)}}/>
                            <input type="submit" value="+" onClick={()=>onClickAgregarPublishers()}/>
                                {
                                    state.publishers?.map((publisher)=>{
                                        return(
                                            <div key={publisher} className="ccpubli">
                                                <p>{publisher}</p>
                                                <input type="submit" onClick={()=>onClickDeletePublishers(publisher)} value="X"/>
                                            </div>
                                            )
                                    })
                                }
                                {
                                    (error.publishers && !validate.publishers )&& (
                                        <p className="error-name">No dejar los espacios en blanco</p>
                                    )
                                }
                                {
                                    validate.publishers && (
                                        <p className="validatee-name">Debe contener caracteres correctamente</p>
                                    )
                                }
                        </div>
                        {/* website */}
                        <div className="create-website">
                            <label>WebSite: </label>
                            <input type="text" onChange={(ev)=>onChangewebsiteVideogame(ev)} value={state.website} placeholder="Enter the WebSite" name="website" onBlur={(ev)=>onBlurWebSiteVideogame(ev)} onKeyUp={(ev)=>{onKeyUpPWebSiteVidegame(ev)}}/>
                            {
                                    (error.website && !validate.website )&& (
                                        <p className="error-name">No dejar los espacios en blanco</p>
                                    )
                                }
                                {
                                    validate.website && (
                                        <p className="validatee-name">Debe contener caracteres correctamente</p>
                                    )
                                }
                        </div>
                        {/* releasteDate */}
                        <div className="create-releasedate">
                            <label>Release Date: </label>
                            <input type="text" onChange={(ev)=>onChangereleaseDateVideogame(ev)} value={state.releaseDate} name="releaseDate" placeholder="Enter to Release Date" onBlur={(ev)=>onBlurReleaseDateVideogame(ev)} onKeyUp={(ev)=>{onKeyUpReleaseDateVidegame(ev)}}/>
                            {
                                    (error.releaseDate && !validate.releaseDate )&& (
                                        <p className="error-name">No dejar los espacios en blanco</p>
                                    )
                                }
                                {
                                    validate.releaseDate && (
                                        <p className="validatee-name">Debe contener caracteres correctamente</p>
                                    )
                                }
                        </div>
                        {/* metacritic */}
                        <div className="create-metacritic">
                            <label>Metacritic: </label>
                            <input type="text" onChange={(ev)=>onChangemetacriticVideogame(ev)} value={state.metacritic} name="metacritic" placeholder="Enter to Metacritic" onBlur={(ev)=>onBlurMetacriticVideogame(ev)} onKeyUp={(ev)=>{onKeyUpMetacriticVidegame(ev)}}/>
                            {
                                    (error.metacritic && !validate.metacritic )&& (
                                        <p className="error-name">No dejar los espacios en blanco</p>
                                    )
                                }
                                {
                                    validate.metacritic && (
                                        <p className="validatee-name">Debe contener caracteres correctamente</p>
                                    )
                                }
                        </div>
                        {/* esrb_rating */}
                        <div className="create-esrb_rating">
                            <label>Esrb_rating: </label>
                            <input type="text" onChange={(ev)=>onChangeesrb_ratingVideogame(ev)} value={state.esrb_rating} name="esrb_rating" placeholder="Enter to esrb_rating" onBlur={(ev)=>onBluresrRatingVideogame(ev)} onKeyUp={(ev)=>{onKeyUpesrRatingVidegame(ev)}}/>
                            {
                                    (error.esrb_rating && !validate.esrb_rating )&& (
                                        <p className="error-name">No dejar los espacios en blanco</p>
                                    )
                                }
                                {
                                    validate.esrb_rating && (
                                        <p className="validatee-name">Debe contener caracteres correctamente</p>
                                    )
                                }
                        </div>
                        {/* Platforms */}
                        <div className="create-platform">
                            <label>Platforms: </label>
                            <select name="" id="" onChange={(ev)=>onChangeplatformsVideogame(ev)} value={platform.name}>
                                <option value="All">Select Plataform: </option>
                                {
                                    platforms?.map((platform)=>{
                                        return(
                                            <option key={platform.id}>{platform.name}</option>
                                        )
                                    })
                                }
                            </select>
                            <div>
                                {
                                    state.platforms?.map((platform)=>{
                                        return(
                                            <div key={platform} className="ccstore">
                                                <p>{platform}</p>
                                                <input type="submit" onClick={()=>onClickDeletePlatform(platform)} value="X"/>
                                            </div>
                                            )
                                    })
                                }
                            </div>
                        </div>
                        {/* Tags */}
                        <div className="create-tag">
                            <label>Tags: </label>
                            <select name="" id="" onChange={(ev)=>onChangetagVideogame(ev)} value={tag.name}>
                                <option value="All">Select Tag: </option>
                                {
                                    tags?.map((tag)=>{
                                        return(
                                            <option key={tag.id}>{tag.name}</option>
                                        )
                                    })
                                }
                            </select>
                            <div>
                                {
                                    state.tags?.map((tag)=>{
                                        return(
                                            <div key={tag} className="ccstore">
                                                <p>{tag}</p>
                                                <input type="submit" onClick={()=>onClickDeleteTag(tag)} value="X"/>
                                                
                                            </div>
                                            )
                                    })
                                }
                            </div>
                        </div>
                        {/* genres */}
                        <div className="create-genre">
                            <label>Genres: </label>
                            <select name="" id="" onChange={(ev)=>onChangegenreVideogame(ev)} value={genre.name}>
                                <option value="All">Select Genre: </option>
                                {
                                    genres?.map((genre)=>{
                                        return(
                                            <option key={genre.id}>{genre.name}</option>
                                        )
                                    })
                                }
                            </select>
                            <div>
                                {
                                    state.genres?.map((genre)=>{
                                        return(
                                            <div key={genre} className="ccstore">
                                                <p>{genre}</p>
                                                <input type="submit" onClick={()=>onClickDeleteGenres(genre)} value="X"/>

                                            </div>
                                            )
                                    })
                                }
                            </div>    
                        </div>
                        <div className="botoncreate">
                            <input type="submit" onClick={()=>onClickSubmit()} value="Create" className="buttonCreate"/>

                        </div>
                    </div>
                    <div className="divcontainer02">
                                {
                                    (stateVisual.visual==true)?(stateVisual.visual && (
                                        <div className="container-preview">
                                            <p className="preview">Preview</p>
                                        </div>
                                    )):(<div className="container-visual">
                                        {
                                            (stateVisual.name)&&(
                                                <h2 className="containers-name">{state.name}</h2>
                                            )
                                        }
                                        {
                                           (stateVisual.price)&&(
                                            <p className="containers-price">Price: $/.{state.price}</p>
                                            ) 
                                        }
                                        {
                                            (stateVisual.description)&&(
                                            <p className="containers-description">{state.description}</p>
                                            )
                                        }
                                        {
                                            (stateVisual.rating)&&(
                                            <p className="containers-rating">{stars(state.rating)} {state.rating}</p>
                                            )
                                        }
                                        {
                                            (stateVisual.video)&&
                                                (
                                                    <>
                                                    
                                                    < ReactPlayer
                                                        className="containers-video"
                                                        url={state.video}
                                                        width="100%"
                                                        height="250px"
                                                        controls
                                                        playing
                                                        loop
                                                        muted
                                                    /></>
                                                )  
                                        }
                                        {
                                            (stateVisual.image)&&(
                                                <div className="containers-img">
                                                    <img src={state.image} alt="NOT FOUND" />
                                                </div>
                                            )
                                        }
                                        {
                                            (stateVisual.screenshots)&&(
                                                <div className="container-screenshot">
                                                <div className="subcontain1">
                                                {state.screenshots?.map(ev=>{
                                                    return(
                                                        <div key={ev} className="screenshot-img">
                                                            <img src={ev} alt="NOT FOUND" />
                                                        </div>
                                                    );
                                                })}
                                            </div>
                                        </div>
                                            )
                                        }
                                        {
                                            (stateVisual.store) && (
                                                <>
                                                    <p>STORES: </p>
                                                    <div className="container-store">
                                                        <p>{state.store?.join(", ")}</p>
                                                    </div>
                                                </>
                                            )
                                        }
                                        {
                                            (stateVisual.developers) &&(
                                                <>
                                                    <p>DEVELOPERS: </p>
                                                    <div className="container-developers">
                                                    <p>{state.developers?.join(", ")}</p>
                                                    </div>
                                                </>
                                            )
                                        }
                                        {
                                            (stateVisual.publishers)&&(
                                                <>
                                                <p>PUBLISHERS: </p>
                                                <div className="container-publishers">
                                                    <p>{state.publishers?.join(", ")}</p>
                                                </div>
                                                </>
                                            )
                                        }
                                        {
                                            (stateVisual.website)&&(
                                                <>
                                                <p>WEBSITE: </p>
                                                <p>{state.website}</p>
                                                </>
                                            )
                                        }
                                        {
                                            (stateVisual.releaseDate)&&(
                                                <>
                                                <p>RELEASEDATE: </p>
                                                <p>{state.releaseDate}</p>
                                                </>
                                            )
                                        }
                                        {
                                             (stateVisual.metacritic)&&(
                                                <>
                                                <p>METACRITIC: </p>
                                                <p>{state.metacritic}</p>
                                                </>
                                            )
                                        }
                                        {
                                            (stateVisual.esrb_rating)&&(
                                                <>
                                                <p>ESRB_RATNG:</p>
                                                <p>{state.esrb_rating}</p>
                                                </>
                                            )
                                        }
                                        {
                                            (stateVisual.platforms)&&(
                                                <>
                                                <p>PLATFORMS: </p>
                                                <div className="container-platforms">
                                                <p>{state.platforms?.join(", ")}</p>
                                                </div>
                                                </>
                                            )
                                        }
                                        {
                                            (stateVisual.tags)&&(
                                                <>
                                                <p>TAGS: </p>
                                                <div className="container-tags">
                                                <p>{state.ntags?.join(", ")}</p>
                                                </div>
                                                </>
                                            )
                                        }
                                        {
                                            (stateVisual.genres)&&(
                                                <>
                                                <p>GENRES: </p>
                                                <div className="container-genres">
                                                <p>{state.genres?.join(", ")}</p>
                                                </div>
                                                </>
                                            )
                                        }
                                    </div>)
                                }

                
                        
                                

                    </div>
                </div>
                
            </div>
       
    </div>
    )
}