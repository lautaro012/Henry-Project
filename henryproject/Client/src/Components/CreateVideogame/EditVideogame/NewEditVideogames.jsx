import React from "react"
import { useDispatch, useSelector } from "react-redux"
 import { useEffect, useState } from 'react';
import { getGenres, getPlatforms, getTags, postVideoGame } from "../../redux/Actions/Index"
import { Carousel } from 'react-responsive-carousel';
import ReactPlayer from 'react-player'
import { useNavigate } from "react-router-dom";

export default function NewEditVideogames(){
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

const [buttons,setButtons]=useState(true);



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
                if(state.video.length<=0){
                    if(!input[keys]) errores[keys] = `${keys} is required`
                }
                if(state.screenshots.length<=0){
                    if(!input[keys]) errores[keys] = `${keys} is required`
                }
                if(state.developers.length<=0){
                    if(!input[keys]) errores[keys] = `${keys} is required`
                }
                if(state.publishers.length<=0){
                    if(!input[keys]) errores[keys] = `${keys} is required`
                }
        }
    }
        return errores
}
function handleChange(ev){
    ev.preventDefault();
    if(ev.target.name=="video"){
        setMovie({...movie,name:ev.target.value});
        setError(validateFields({...error,[ev.target.name]: ev.target.value}))
        setValidate(validateFields({...validate,[ev.target.name]: ev.target.value}))

    }else if(ev.target.name=="screenshot"){
        setScreenshot({...screenshot,name:ev.target.value});
        setError(validateFields({...error,[ev.target.name]: ev.target.value}))
        setValidate(validateFields({...validate,[ev.target.name]: ev.target.value}))
    }else if(ev.target.name=="store"){
        if(!state.store.includes(ev.target.value)){
            if(ev.target.value!=="All"){
                setState({...state,store:[...state.store,ev.target.value]});
            setStore({...store,name:ev.target.value});
            }
        }
    }else if(ev.target.name=="developer"){
        setDeveloper({...developer,name:ev.target.value});
        setError(validateFields({...error,[ev.target.name]: ev.target.value}))
        setValidate(validateFields({...validate,[ev.target.name]: ev.target.value}))
    }else if(ev.target.name=="publisher"){
        setPublisher({...publisher,name:ev.target.value});
        setError(validateFields({...error,[ev.target.name]: ev.target.value}))
        setValidate(validateFields({...validate,[ev.target.name]: ev.target.value}))
    }else if(ev.target.name=="platform"){
        if(!state.platforms.includes(ev.target.value)){
            if(ev.target.value!=="All"){
                setState({...state,platforms:[...state.platforms,ev.target.value]});
            setPlatform({...platform,name:ev.target.value});
            }
        }
    }else if(ev.target.name=="tag"){
        if(!state.tags.includes(ev.target.value)){
            if(ev.target.value!=="All"){
                setState({...state,tags:[...state.tags,ev.target.value]});
            setTag({...tag,name:ev.target.value});
            }
        }
    }else if(ev.target.name=="genre"){
        if(!state.genres.includes(ev.target.value)){
            if(ev.target.value!=="All"){
                setState({...state,genres:[...state.genres,ev.target.value]});
            setGenre({...genre,name:ev.target.value});
            }
        }
    }else{
        setState({...state,[ev.target.name]: ev.target.value})
        setError(validateFields({...error,[ev.target.name]: ev.target.value}))
        setValidate(validateFields({...validate,[ev.target.name]: ev.target.value}))
        
    }
}

function onClickAgregarMovie(){
    if(!state.video.includes(movie.name)){
        if(movie.name!==""){
            setState({...state,video:[...state.video,movie.name]});
        }
    }
}

function onClickDeleteVideo(ev){
    setState({...state,video:[...state.video].filter((video)=>video!==ev)});
}

function onClickAgregarScreenshot(){
    if(!state.screenshots.includes(screenshot.name)){
        if(screenshot.name!==""){
            setState({...state,screenshots:[...state.screenshots,screenshot.name]});
        }
    }
}


function onClickDeleteScreenshot(ev){
setState({...state,screenshots:[...state.screenshots].filter((screenshot)=>screenshot!==ev)});
}
 
 function onClickDeleteStore(ev){
    setState({...state,store:[...state.store].filter((store)=>store!==ev)});
}


function onClickAgregarDeveloper(){
        if(!state.developers.includes(developer.name)){
            if(developer.name!==""){
                setState({...state,developers:[...state.developers,developer.name]});
            }
        }
    }
  
  function onClickDeleteDeveloper(ev){
    setState({...state,developers:[...state.developers].filter((developer)=>developer!==ev)});
}


function onClickAgregarPublisher(){
        if(!state.publishers.includes(publisher.name)){
            if(publisher.name!==""){
                setState({...state,publishers:[...state.publishers,publisher.name]});
            }
        }
    }
    
    function onClickDeletePublisher(ev){
        setState({...state,publishers:[...state.publishers].filter((publisher)=>publisher!==ev)});
    }

    
    function onClickDeletePlatform(ev){
        setState({...state,platforms:[...state.platforms].filter((store)=>store!==ev)});
    }
    
    function onClickDeleteTag(ev){
        setState({...state,tags:[...state.tags].filter((store)=>store!==ev)});
    }
    
    function onClickDeleteGenres(ev){
        setState({...state,genres:[...state.genres].filter((store)=>store!==ev)});
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
    
    function onClickSubmit(){
        
        if(state.name=""){

        }
        dispatch(postVideoGame(state));
        
        
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
        <div className='container-createVideogames'>
            <div className="subContainer-createVideogames">
                <div className="divcontainer01">
                    {/* Formulario de Crear Videogames */}
                    <h2 className="h2">Create Videogame</h2>
                    {/*Name*/}
                    {/* <form  onSubmit={(e) => onClickSubmit(e)} > */}
                        {/* NAME */}
                        <div className="create-name">
                            <label type="text">Name: </label>
                            <input type="text" onChange={(ev)=>handleChange(ev)} name="name" required placeholder="Enter the name of the game" onBlur={(ev)=>{handleChange(ev)}} onKeyUp={(ev)=>handleChange(ev)} value={state.name}/>
                            <div>
                            {showError ? <span>{error.name}</span> || <span>{validate.name}</span> : <span>{error.name}</span>|| <span>{validate.name}</span>}
                            </div>
                        </div>
                        {/* PRICE */}
                        <div className="create-price">
                            <label type="text">Price: </label>
                            <input type="text" onChange={(ev)=>handleChange(ev)} name="price" required placeholder="$/. " onBlur={(ev)=>{handleChange(ev)}} onKeyUp={(ev)=>handleChange(ev)} value={state.price}/>
                            <div>
                            {showError ? <span>{error.price}</span> || <span>{validate.price}</span> : <span>{error.price}</span>|| <span>{validate.price}</span>}
                            </div>
                        </div>
                        {/* DESCRIPTION */}
                        <div className="create-description">
                            <label type="text">Price: </label>
                            <textarea cols="50" rows="7" placeholder="Write some description..." onChange={(ev)=>handleChange(ev)} name="description" required onBlur={(ev)=>handleChange(ev)} onKeyUp={(ev)=>handleChange(ev)} value={state.description}></textarea>
                            <div>
                            {showError ? <span>{error.description}</span> || <span>{validate.description}</span> : <span>{error.description}</span>|| <span>{validate.description}</span>}
                            </div>
                        </div>
                       {/* RATING */}
                       <div className="create-rating">
                            <label type="text">Rating: </label>
                            <input type="text" onChange={(ev)=>handleChange(ev)} name="rating" required placeholder="rating... " onBlur={(ev)=>{handleChange(ev)}} onKeyUp={(ev)=>handleChange(ev)} value={state.rating}/>
                            <div>
                            {showError ? <span>{error.rating}</span> || <span>{validate.rating}</span> : <span>{error.rating}</span>|| <span>{validate.rating}</span>}
                            </div>
                        </div>
                         {/* VIDEO */}
                         <div className="create-video">
                            <label type="text">Video: </label>
                            <input type="text" onChange={(ev)=>handleChange(ev)} required name="video" placeholder="video... "  value={movie.name} onBlur={(ev)=>{handleChange(ev)}} onKeyUp={(ev)=>handleChange(ev)} />
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
                            {showError ? <span>{error.video}</span> || <span>{validate.video}</span> : <span>{error.video}</span>|| <span>{validate.video}</span>}
                            </div>
                        </div>
                        {/* IMAGEN  */}
                        <div className="create-image">
                        <label type="text">Image: </label>
                            <input type="text" onChange={(ev)=>handleChange(ev)} required name="image" placeholder="image... " onBlur={(ev)=>{handleChange(ev)}} onKeyUp={(ev)=>handleChange(ev)} value={state.image}/>
                            {/* <input type="file" name="adjunto" accept=".mp4,.jpg,.png" multiple /> */}
                            <div>    
                            {showError ? <span>{error.image}</span> || <span>{validate.image}</span> : <span>{error.image}</span>|| <span>{validate.image}</span>}
                            </div>
                        </div>
                        {/* SCRENSHOT  */}
                        <div className="create-screenshots">
                            <label type="text">Screenshots: </label>
                            <input type="text" onChange={(ev)=>handleChange(ev)} required name="screenshot" placeholder="screenshot... "  value={screenshot.name} onBlur={(ev)=>{handleChange(ev)}} onKeyUp={(ev)=>handleChange(ev)}/>
                            <input type="submit" value="+" onClick={()=>onClickAgregarScreenshot()}/>
                            <div>
                            {
                                state.screenshots?.map((video)=>{
                                    return(
                                        <div key={video} className="ccscren">
                                            <p>{video}</p>
                                            <input type="submit" onClick={()=>onClickDeleteScreenshot(video)} value="X"/>
                                        </div>
                                        )
                                })
                            }
                            {showError ? <span>{error.screenshot}</span> || <span>{validate.screenshot}</span> : <span>{error.screenshot}</span>|| <span>{validate.screenshot}</span>}
                            </div>
                        </div>
                         {/* STORE */}
                        <div className="create-store">
                            <label type="text">Store: </label>
                            <select onChange={(ev)=>handleChange(ev)} value={store.name} name="store">
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
                        {/* DEVELOPERS */}
                        <div className="create-developers">
                            <label type="text">Developers: </label>
                            <input type="text" onChange={(ev)=>handleChange(ev)} required name="developer" placeholder="developers... "  value={developer.name} onBlur={(ev)=>{handleChange(ev)}} onKeyUp={(ev)=>handleChange(ev)}/>
                            <input type="submit" value="+" onClick={()=>onClickAgregarDeveloper()}/>
                            <div>
                            {
                                state.developers?.map((video)=>{
                                    return(
                                        <div key={video} className="ccdevelop">
                                            <p>{video}</p>
                                            <input type="submit" onClick={()=>onClickDeleteDeveloper(video)} value="X"/>
                                        </div>
                                        )
                                })
                            }
                            {showError ? <span>{error.developer}</span> || <span>{validate.developer}</span> : <span>{error.developer}</span>|| <span>{validate.developer}</span>}
                            </div>
                        </div>
                        {/* PUBLISHERS */}
                        <div className="create-publishers">
                            <label type="text">Publishers: </label>
                            <input type="text" onChange={(ev)=>handleChange(ev)} required name="publisher" placeholder="publisher... "  value={publisher.name} onBlur={(ev)=>{handleChange(ev)}} onKeyUp={(ev)=>handleChange(ev)}/>
                            <input type="submit" value="+" onClick={()=>onClickAgregarPublisher()}/>
                            <div>
                            {
                                state.publishers?.map((video)=>{
                                    return(
                                        <div key={video} className="ccpubli">
                                            <p>{video}</p>
                                            <input type="submit" onClick={()=>onClickDeletePublisher(video)} value="X"/>
                                        </div>
                                        )
                                })
                            }
                            {showError ? <span>{error.publisher}</span> || <span>{validate.publisher}</span> : <span>{error.publisher}</span>|| <span>{validate.publisher}</span>}
                            </div>
                        </div>
                        {/* WEBSITE */}
                        <div className="create-website">
                        <label type="text">WebSite: </label>
                            <input type="text" onChange={(ev)=>handleChange(ev)} required name="website" placeholder="website... " onBlur={(ev)=>{handleChange(ev)}} onKeyUp={(ev)=>handleChange(ev)} value={state.website}/>
                            {/* <input type="file" name="adjunto" accept=".mp4,.jpg,.png" multiple /> */}
                            <div>    
                            {showError ? <span>{error.website}</span> || <span>{validate.website}</span> : <span>{error.website}</span>|| <span>{validate.website}</span>}
                            </div>
                        </div>
                        {/* RELEASEDATE */}
                        <div className="create-releasedate">
                        <label type="text">Release Date: </label>
                            <input type="text" onChange={(ev)=>handleChange(ev)} name="releasedate" placeholder="releasedate... " onBlur={(ev)=>{handleChange(ev)}} onKeyUp={(ev)=>handleChange(ev)} />
                            {/* <input type="file" name="adjunto" accept=".mp4,.jpg,.png" multiple /> */}
                            <div>    
                            {showError ? <span>{error.releasedate}</span> || <span>{validate.releasedate}</span> : <span>{error.releasedate}</span>|| <span>{validate.releasedate}</span>}
                            </div>
                        </div>
                        {/* METACRITIC */}
                        <div className="create-metacritic">
                        <label type="text">Metacritic </label>
                            <input type="text" onChange={(ev)=>handleChange(ev)} required name="metacritic" placeholder="metacritic... " onBlur={(ev)=>{handleChange(ev)}} onKeyUp={(ev)=>handleChange(ev)} value={state.metacritic}/>
                            {/* <input type="file" name="adjunto" accept=".mp4,.jpg,.png" multiple /> */}
                            <div>    
                            {showError ? <span>{error.metacritic}</span> || <span>{validate.metacritic}</span> : <span>{error.metacritic}</span>|| <span>{validate.metacritic}</span>}
                            </div>
                        </div>
                         {/* ESRB_RATING */}
                         <div className="create-esrb_rating">
                        <label type="text">Esrb rating: </label>
                            <input type="text" onChange={(ev)=>handleChange(ev)} required name="esrb_rating" placeholder="esrb_rating... " onBlur={(ev)=>{handleChange(ev)}} onKeyUp={(ev)=>handleChange(ev)} value={state.esrb_rating}/>
                            {/* <input type="file" name="adjunto" accept=".mp4,.jpg,.png" multiple /> */}
                            <div>    
                            {showError ? <span>{error.esrb_rating}</span> || <span>{validate.esrb_rating}</span> : <span>{error.esrb_rating}</span>|| <span>{validate.esrb_rating}</span>}
                            </div>
                        </div>
                        {/* Platforms */}
                        <div className="create-platform">
                            <label type="text">Platforms: </label>
                            <select onChange={(ev)=>handleChange(ev)} value={platform.name} name="platform" >
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
                            <select name="" id="" onChange={(ev)=>handleChange(ev)} value={tag.name} name="tag">
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
                            <select name="" id="" onChange={(ev)=>handleChange(ev)} value={genre.name} name="genre">
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
                            {(buttons==false) ? (!buttons &&(<input type="submit" onClick={()=>onClickSubmit()} value="Create" className="buttonCreate" disabled={false}/>)):(buttons &&(<input type="submit" onClick={()=>onClickSubmit()} value="Create" className="buttonCreate" disabled={true}/>)) }
                        </div>        
                        {/* </form>   */}
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


