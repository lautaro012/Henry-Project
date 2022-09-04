import React from "react"
import { useDispatch, useSelector } from "react-redux"
import './EditVideogames.css'
 import { useEffect, useState } from 'react';
import { getGenres, getPlatforms, getTags, postVideoGame } from "../../redux/Actions/Index"
import { Carousel } from 'react-responsive-carousel';
import ReactPlayer from 'react-player'
import finalPropsSelectorFactory from "react-redux/es/connect/selectorFactory";
import { useNavigate } from "react-router-dom";

export default function EditVideogame(){
    const dispatch=useDispatch();
    const platforms=useSelector(state=>state.platforms);
    const genres=useSelector(state=>state.genres);
    const tags=useSelector(state=>state.tags);

    useEffect(()=>{
        dispatch(getPlatforms());
        dispatch(getGenres());
        dispatch(getTags());
    },[dispatch])

    let history=useNavigate();
  const handleRegresar=()=>{
    history("/admin")
  }
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

const [movie,setMovie]=useState({
    name:""
})

const [screenshot,setScreenshot]=useState({
    name:""
})

const [store,setStore]=useState({
    name:""
})

const [developer,setDeveloper]=useState({
    name:""
})
 
 const [publisher,setPublisher]=useState({
    name:""
})

const [platform,setPlatform]=useState({
    name:""
});

const [genre,setGenre]=useState({
    name:""
})

const [tag,setTag]=useState({
    name:""
})


const [error,setError]=useState({});

const [validate,setValidate]=useState({});

const [showError, setShowError] = useState(false); 


const expresiones={
    name: /^[a-zA-ZñÑ0-9 ]{1,40}$/,
    price:/^[0-9]{1,3}(([.]|[,])[0-9]+)?$/,
    description:/^[a-zA-Z0-9ñÑ \s+]{1,1000}$/,
    rating: /^[1-5]{1}(([.]|[,])[0-9]+)?$/,
    developers: /^[a-zA-ZñÑ0-9 ]{1,40}$/,
    publishers: /^[a-zA-ZñÑ0-9 ]{1,40}$/,
    metacritic: /^[0-9]{1,5}$/,
    esrb_rating:    /^[a-zA-ZñÑ0-9 ]{1,40}$/
}
function validateFields(input){
    const errores={};
    
    for(let keys in input) {
        switch(keys){
            case "name":
                if(keys=="name"){
                    if(!input[keys].match(expresiones.name)){
                        errores[keys] = `El ${keys} debe contener caracteres correctamente`;
                    }
                }
            case "price": 
                if(keys=="price"){
                    if(!input[keys].match(expresiones.price)){
                        errores[keys] = `El ${keys} debe contener caracteres correctamente`;
                    }
                }
            case "description": 
                if(keys=="description"){
                    if(!input[keys].match(expresiones.description)){
                        errores[keys] = `El ${keys} debe contener caracteres correctamente`;
                    }
                }
            case "rating": 
                if(keys=="rating"){
                    
                    
                        if(!input[keys].match(expresiones.rating)){
                            // if(input[keys]<0 || input[keys]>5){
                            errores[keys] = `El ${keys} debe contener caracteres correctamente`;
                            // }

                    }
                }
            default:
                if(!input[keys]) errores[keys] = `${keys} is required`
        }
    }
        return errores
}
function handleChange(ev){
    ev.preventDefault();
    setState({...state,[ev.target.name]: ev.target.value})
    setError(validateFields({...error,[ev.target.name]: ev.target.value}))
    setValidate(validateFields({...validate,[ev.target.name]: ev.target.value}))
}
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
function onClickSubmit(e){
    e.preventDefault();
    dispatch(postVideoGame(state));
    alert("Se ha creado correctamente");
    handleRegresar();
}
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
    <div className='container-editVideogames'>
        <div className="subContainer-editVideogames">
            <div className="divcontainer01">
                {/* Formulario de Crear Videogames */}
                <h2 className="h2">Edit Videogame</h2>
                {/*Name*/}
                <form  onSubmit={(e) => onClickSubmit(e)} >
                    {/* NAME */}
                    <div className="edit-name">
                        <label type="text">Name: </label>
                        <input type="text" onChange={(ev)=>handleChange(ev)} name="name" required placeholder="Enter the name of the game" onBlur={(ev)=>{handleChange(ev)}} onKeyUp={(ev)=>handleChange(ev)}/>
                        <div>
                        {showError ? <span>{error.name}</span> || <span>{validate.name}</span> : <span>{error.name}</span>|| <span>{validate.name}</span>}
                        </div>
                    </div>
                    {/* PRICE */}
                    <div className="edit-price">
                            <label type="text">Price: </label>
                            <input type="text" onChange={(ev)=>handleChange(ev)} name="price" required placeholder="$/. " onBlur={(ev)=>{handleChange(ev)}} onKeyUp={(ev)=>handleChange(ev)}/>
                            <div>
                            {showError ? <span>{error.price}</span> || <span>{validate.price}</span> : <span>{error.price}</span>|| <span>{validate.price}</span>}
                            </div>
                        </div>
                        {/* DESCRIPTION */}
                        <div className="edit-description">
                            <label type="text">Price: </label>
                            <textarea cols="50" rows="7" placeholder="Write some description..." onChange={(ev)=>handleChange(ev)} name="description" required onBlur={(ev)=>handleChange(ev)} onKeyUp={(ev)=>handleChange(ev)}></textarea>
                            <div>
                            {showError ? <span>{error.description}</span> || <span>{validate.description}</span> : <span>{error.description}</span>|| <span>{validate.description}</span>}
                            </div>
                        </div>
                        {/* RATING */}
                        <div className="edit-rating">
                            <label type="text">Rating: </label>
                            <input type="text" onChange={(ev)=>handleChange(ev)} name="rating" required placeholder="rating... " onBlur={(ev)=>{handleChange(ev)}} onKeyUp={(ev)=>handleChange(ev)}/>
                            <div>
                            {showError ? <span>{error.rating}</span> || <span>{validate.rating}</span> : <span>{error.rating}</span>|| <span>{validate.rating}</span>}
                            </div>
                        </div>
                        {/* VIDEO */}
                        <div className="edit-video">
                            <label type="text">Video: </label>
                            <input type="text" onChange={(ev)=>onChangeMovieVideogame(ev)} name="video" required placeholder="video... " onBlur={(ev)=>{handleChange(ev)}} onKeyUp={(ev)=>handleChange(ev)} value={movie.name}/>
                            <input type="submit" value="+" onClick={()=>onClickAgregarMovie()}/>
                            <div>
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
                            {showError ? <span>{error.rating}</span> || <span>{validate.rating}</span> : <span>{error.rating}</span>|| <span>{validate.rating}</span>}
                            </div>
                        </div>
                        {/* IMAGEN  */}
                    </form>  
                </div>
                {/* Visualizar componentes */}
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
    )
}