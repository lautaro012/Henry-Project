import React, { useEffect, useRef } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getGameById, getGenres, getPlatforms, getTags, putVideogame } from "../../../redux/Actions/Index";

export default function EditVideogames(){
    const dispatch=useDispatch();
    const detailsVideogames=useSelector(state => state.game);
    const platforms=useSelector(state=>state.platforms);
    const genres=useSelector(state=>state.genres);
    const tags=useSelector(state=>state.tags);
    const { id } = useParams();

    //Usamos UseEffect 
    useEffect(() => {
    dispatch(getGameById(id))
    dispatch(getPlatforms());
    dispatch(getGenres());
    dispatch(getTags());
}, [dispatch, id])
    
    //STATE VIDEOGAMES
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

    const [value,setValue]=useState({
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
    const [muestra,setMuestra]=useState({
        name:true,
        price:true,
        description:true,
        rating:true,
        video:true,
        image:true,
        screenshots:true,
        store:true,
        developers:true,
        publishers:true,
        website:true,
        releaseDate:true,
        metacritic:true,
        esrb_rating:true,
        platforms:true,
        tags:true,
        genres:true
    });
    const [mensaje,setMensaje]=useState({
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
    });

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
    const [error,setError]=useState({});
    // STATE VALIDATE
    const [validate,setValidate]=useState({});
    //STATE SHOWERROR
    const [showError, setShowError] = useState(false); 
    // STATE button
    const [buttons,setButtons]=useState(false);

    // stado para visualizar
    const [stateVisual,setStateVisual]=useState({
        visual:true
    })
    // ESTADO MODIFICA CAMPOS
    const[data,setData]=useState(true);

 //Expresiones
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

// VALIDATION
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
                            errores[keys] = `El ${keys} debe contener caracteres correctamente`;

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
    


    function onClickAgregarMovie(){
        if(!value.video.includes(movie.name)){
            if(movie.name!==""){
                if(detailsVideogames.video.length!=0){
                    setValue({...value,video:[...value.video,movie.name]});
                }
                // setStateVisual({...stateVisual,visual:false}); 
            }
        }
    }
    function onClickDeleteVideo(ev){
        setValue({...value,video:[...value.video].flat().filter((video)=>video!==ev)});
    }

    // FUNCIONES SCREENSHOTS
    function onClickAgregarScreenshot(){
        if(!value.screenshots.includes(screenshot.name)){
            if(screenshot.name!==""){
                if(detailsVideogames.screenshots.length!=0){
                    setValue({...value,screenshots:[...value.screenshots,screenshot.name]});
                }
                // setStateVisual({...stateVisual,visual:false}); 
            }
        }
    }

    // FUNCION SCREENSHOT DELETE
    function onClickDeleteScreenshot(ev){
        setValue({...value,screenshots:[...value.screenshots].flat().filter((video)=>video!==ev)});
    }

// FUNCTION ONCLICKDELETE
function onClickDeleteStore(ev){
    setValue({...value,store:[...value.store].flat().filter((video)=>video!==ev)});
}

    // FUNCIONES DEVELOPER
    function onClickAgregarDeveloper(){
        if(!value.developers.includes(developer.name)){
            if(developer.name!==""){
                if(detailsVideogames.developers.length!=0){
                    setValue({...value,developers:[...value.developers,developer.name]});
                }
                // setStateVisual({...stateVisual,visual:false}); 
            }
        }
    }

    // FUNCION DEVELOPER DELETE
    function onClickDeleteDeveloper(ev){
        setValue({...value,developers:[...value.developers].flat().filter((video)=>video!==ev)});
    }

    // FUNCIONES PUBLISHERS
    function onClickAgregarPublisher(){
        if(!value.publishers.includes(publisher.name)){
            if(publisher.name!==""){
                if(detailsVideogames.publishers.length!=0){
                    setValue({...value,publishers:[...value.publishers,publisher.name]});
                }
                // setStateVisual({...stateVisual,visual:false}); 
            }
        }
    }

    // FUNCION PUBLISHERS DELETE
    function onClickDeletePublisher(ev){
        setValue({...value,publishers:[...value.publishers].flat().filter((video)=>video!==ev)});
    }
    // FUNCTION ONCLICKDELETE
    function onClickDeletePlatform(ev){
        setValue({...value,platforms:[...value.platforms].flat().filter((video)=>video!==ev)});
    }
    // FUNCTION ONCLICKDELETE
    function onClickDeleteTag(ev){
        setValue({...value,tags:[...value.tags].flat().filter((video)=>video!==ev)});
    }
    // FUNCTION ONCLICKDELETE
    function onClickDeleteGenres(ev){
        setValue({...value,genres:[...value.genres].flat().filter((video)=>video!==ev)});
    }

// FUNCION QUE NO SE VA A MODIFICAR
function handleChangeInput(ev){
    setMensaje({...mensaje,[ev.target.name]:true});
}


//FUNCION ONLCICK => NAME
function onClickName(){
    setMuestra({...muestra,name:false});
    setMensaje({...mensaje,name:false});
    setState({...state,name:detailsVideogames.name,price:detailsVideogames.price,description:detailsVideogames.description,rating:detailsVideogames.rating});
}
//FUNCION ONLCICK => PRICE
function onClickPrice(){
    setMuestra({...muestra,price:false});
    setMensaje({...mensaje,price:false});
    setState({...state,name:detailsVideogames.name,price:detailsVideogames.price,description:detailsVideogames.description,rating:detailsVideogames.rating});
}
// FUNCION ONLICK => DESCRIPCION
function onClickDescription(){
    setMuestra({...muestra,description:false});
    setMensaje({...mensaje,description:false});
    setState({...state,name:detailsVideogames.name,price:detailsVideogames.price,description:detailsVideogames.description,rating:detailsVideogames.rating});
}
// FUNCION ONCLICK => RATING
function onClickRating(){
    setMuestra({...muestra,rating:false});
    setMensaje({...mensaje,rating:false});
    setState({...state,name:detailsVideogames.name,price:detailsVideogames.price,description:detailsVideogames.description,rating:detailsVideogames.rating});
}
// FUNCION ONCLICK => VIDEO
// console.log(detailsVideogames.video);
function onClickVideo(){
    setMuestra({...muestra,video:false});
    setMensaje({...mensaje,video:false});
    setValue({...value,video:[...value.video,detailsVideogames.video]});
    
}

// FUNCION ONCLICK => IMAGE
function onClickImage(){
    setMuestra({...muestra,image:false});
    setMensaje({...mensaje,image:false});
    setState({...state,image:detailsVideogames.image});
}
// FUNCION ONCLICK => SCREENSHOT
function onClickScreenshot(){
    setMuestra({...muestra,screenshots:false});
    setMensaje({...mensaje,screenshots:false});
    setValue({...value,screenshots:[...value.screenshots,detailsVideogames.screenshots]}); 
}

// FUNCION ONCLICK => STORE
function onClickStore(){
    setMuestra({...muestra,store:false});
    setMensaje({...mensaje,store:false});
    setValue({...value,store:[...value.store,detailsVideogames.store]});
}

// FUNCION ONCLICK => DEVELOPERS
function onClickDevelopers(){
    setMuestra({...muestra,developers:false});
    setMensaje({...mensaje,developers:false});
    setValue({...value,developers:[...value.developers,detailsVideogames.developers]}); 
}
// FUNCION ONCLICK => PUBLISHERS
function onClickPublishers(){
    setMuestra({...muestra,publishers:false});
    setMensaje({...mensaje,publishers:false});
    setValue({...value,publishers:[...value.publishers,detailsVideogames.publishers]}); 
}

// FUNCION ONCLICK => WEBSITE
function onClickWebSite(){
    setMuestra({...muestra,website:false});
    setMensaje({...mensaje,website:false});
    setState({...state,website:detailsVideogames.website});
}

// FUNCION ONCLICK => RELEASEDATE
function onClickreleaseDate(){
    setMuestra({...muestra,releaseDate:false});
    setMensaje({...mensaje,releaseDate:false});
    setState({...state,releaseDate:detailsVideogames.releaseDate});
}

// FUNCION ONCLICK => METACRITIC
function onClickmetacritic(){
    setMuestra({...muestra,metacritic:false});
    setMensaje({...mensaje,metacritic:false});
    setState({...state,metacritic:detailsVideogames.metacritic});
}

// FUNCION ONCLICK => ESR_RATING
function onClickesr_rating(){
    setMuestra({...muestra,esrb_rating:false});
    setMensaje({...mensaje,esrb_rating:false});
    setState({...state,esrb_rating:detailsVideogames.esrb_rating});
}

// FUNCION ONCLICK => PLATFORMS
function onClickPlatforms(){
    setMuestra({...muestra,platforms:false});
    setMensaje({...mensaje,platforms:false});
    setValue({...value,platforms:[...value.platforms,detailsVideogames.platforms]});
}

// FUNCION ONCLICK => TAGS
function onClickTags(){
    setMuestra({...muestra,tags:false});
    setMensaje({...mensaje,tags:false});
    setValue({...value,tags:[...value.tags,detailsVideogames.tags]});
}

// FUNCION ONCLICK => GENRES
function onClickGenres(){
    setMuestra({...muestra,genres:false});
    setMensaje({...mensaje,genres:false});
    setValue({...value,genres:[...value.genres,detailsVideogames.genres]});
}


// FUNCION QUE SE VA A MODIFICAR
function handleChangeRespuesta(ev){
    if(ev.target.name=="video"){
        setMovie({...movie,name:ev.target.value});
        setError(validateFields({...error,[ev.target.name]: ev.target.value}))
        setValidate(validateFields({...validate,[ev.target.name]: ev.target.value}))
    }else if(ev.target.name=="screenshot"){
        setScreenshot({...screenshot,name:ev.target.value});
        setError(validateFields({...error,[ev.target.name]: ev.target.value}))
        setValidate(validateFields({...validate,[ev.target.name]: ev.target.value}))
    }else if(ev.target.name=="store"){
        if(!value.store.flat().includes(ev.target.value)){
            setStore({...store,name:ev.target.value});
            if(ev.target.value!=="All"){
                setValue({...state,store:[...value.store,ev.target.value]});
                setStore({...store,name:ev.target.value});
            }
        }
    }else if(ev.target.name=="developers"){
        setDeveloper({...developer,name:ev.target.value});
        setError(validateFields({...error,[ev.target.name]: ev.target.value}))
        setValidate(validateFields({...validate,[ev.target.name]: ev.target.value}))
    }else if(ev.target.name=="publishers"){
        setPublisher({...publisher,name:ev.target.value});
        setError(validateFields({...error,[ev.target.name]: ev.target.value}))
        setValidate(validateFields({...validate,[ev.target.name]: ev.target.value}))
    }else if(ev.target.name=="platforms"){
        if(!value.platforms.flat().includes(ev.target.value)){
            setPlatform({...platform,name:ev.target.value});
            if(ev.target.value!=="All"){
                setValue({...state,platforms:[...value.platforms,ev.target.value]});
                setPlatform({...platform,name:ev.target.value});
            }
        }
    }else if(ev.target.name=="tags"){
        if(!value.tags.flat().includes(ev.target.value)){
            setTag({...tag,name:ev.target.value});
            if(ev.target.value!=="All"){
                setValue({...state,tags:[...value.tags,ev.target.value]});
                setTag({...tag,name:ev.target.value});
            }
        }
    }else if(ev.target.name=="genres"){
        if(!value.genres.flat().includes(ev.target.value)){
            setGenre({...genre,name:ev.target.value});
            if(ev.target.value!=="All"){
                setValue({...state,genres:[...value.genres,ev.target.value]});
                setGenre({...genre,name:ev.target.value});
            }
        }
    }else{
    setValue({...value,[ev.target.name]: ev.target.value});
    setError(validateFields({...error,[ev.target.name]: ev.target.value}))
    setValidate(validateFields({...validate,[ev.target.name]: ev.target.value}))
    }
}

// MODIFICA TODO
const todoelvideogames={
        name:detailsVideogames.name,
        price:`${detailsVideogames.price}`,
        description:detailsVideogames.description,
        rating:`${detailsVideogames.rating}`,
        video:detailsVideogames.video,
        image:detailsVideogames.image,
        screenshots:detailsVideogames.screenshots,
        store:detailsVideogames.store,
        developers:detailsVideogames.developers,
        publishers:detailsVideogames.publishers,
        website:detailsVideogames.website,
        releaseDate:detailsVideogames.realeaseDate,
        metacritic:detailsVideogames.metacritic,
        esrb_rating:detailsVideogames.esrb_rating,
        platforms:detailsVideogames.platforms,
        tags:detailsVideogames.tags,
        genres:detailsVideogames.genres
}
// POR NAME
const todoelvideogamesName={
    name:value.name,
    price:`${detailsVideogames.price}`,
    description:detailsVideogames.description,
    rating:`${detailsVideogames.rating}`,
    video:detailsVideogames.video,
    image:detailsVideogames.image,
    screenshots:detailsVideogames.screenshots,
    store:detailsVideogames.store,
    developers:detailsVideogames.developers,
    publishers:detailsVideogames.publishers,
    website:detailsVideogames.website,
    releaseDate:detailsVideogames.realeaseDate,
    metacritic:detailsVideogames.metacritic,
    esrb_rating:detailsVideogames.esrb_rating,
    platforms:detailsVideogames.platforms,
    tags:detailsVideogames.tags,
    genres:detailsVideogames.genres
}
const todoelvideogamesPrice={
    name:detailsVideogames.name,
    price:`${value.price}`,
    description:detailsVideogames.description,
    rating:`${detailsVideogames.rating}`,
    video:detailsVideogames.video,
    image:detailsVideogames.image,
    screenshots:detailsVideogames.screenshots,
    store:detailsVideogames.store,
    developers:detailsVideogames.developers,
    publishers:detailsVideogames.publishers,
    website:detailsVideogames.website,
    releaseDate:detailsVideogames.realeaseDate,
    metacritic:detailsVideogames.metacritic,
    esrb_rating:detailsVideogames.esrb_rating,
    platforms:detailsVideogames.platforms,
    tags:detailsVideogames.tags,
    genres:detailsVideogames.genres
}
const todoelvideogamesDescription={
    name:detailsVideogames.name,
    price:`${detailsVideogames.price}`,
    description:value.description,
    rating:`${detailsVideogames.rating}`,
    video:detailsVideogames.video,
    image:detailsVideogames.image,
    screenshots:detailsVideogames.screenshots,
    store:detailsVideogames.store,
    developers:detailsVideogames.developers,
    publishers:detailsVideogames.publishers,
    website:detailsVideogames.website,
    releaseDate:detailsVideogames.realeaseDate,
    metacritic:detailsVideogames.metacritic,
    esrb_rating:detailsVideogames.esrb_rating,
    platforms:detailsVideogames.platforms,
    tags:detailsVideogames.tags,
    genres:detailsVideogames.genres
}

function onClickEditar(){
    // var data1=[]
        if(value.name=="" && value.price=="" && value.description=="" && value.rating=="" && value.video.length==0 && value.image =="" && value.screenshots.length==0 && value.store.length==0 && value.developers.length==0 && value.publishers.length==0 && value.website=="" && value.releaseDate=="" && value.metacritic=="" &&value.esrb_rating=="" && value.platforms.length==0 && value.tags.length==0 && value.genres.length==0){
            dispatch(putVideogame(id,todoelvideogames));
            alert("Se registro");

        }else if(value.name!="" && value.price=="" && value.description=="" && value.rating=="" && value.video.length==0 && value.image =="" && value.screenshots.length==0 && value.store.length==0 && value.developers.length==0 && value.publishers.length==0 && value.website=="" && value.releaseDate=="" && value.metacritic=="" &&value.esrb_rating=="" && value.platforms.length==0 && value.tags.length==0 && value.genres.length==0){
            dispatch(putVideogame(id,todoelvideogamesName))
            alert("Se registro");

        }else if(value.name=="" && value.price!="" && value.description=="" && value.rating=="" && value.video.length==0 && value.image =="" && value.screenshots.length==0 && value.store.length==0 && value.developers.length==0 && value.publishers.length==0 && value.website=="" && value.releaseDate=="" && value.metacritic=="" &&value.esrb_rating=="" && value.platforms.length==0 && value.tags.length==0 && value.genres.length==0){
            // Si el value.price cambio
            // dispatch(putVideogames({name:todoelvideogames.name,price:value.price,description:todoelvideogames.video, ...}))
        }else if(value.name=="" && value.price=="" && value.description!="" && value.rating=="" && value.video.length==0 && value.image =="" && value.screenshots.length==0 && value.store.length==0 && value.developers.length==0 && value.publishers.length==0 && value.website=="" && value.releaseDate=="" && value.metacritic=="" &&value.esrb_rating=="" && value.platforms.length==0 && value.tags.length==0 && value.genres.length==0){
            // ...
        }else if(value.name=="" && value.price=="" && value.description=="" && value.rating!="" && value.video.length==0 && value.image =="" && value.screenshots.length==0 && value.store.length==0 && value.developers.length==0 && value.publishers.length==0 && value.website=="" && value.releaseDate=="" && value.metacritic=="" &&value.esrb_rating=="" && value.platforms.length==0 && value.tags.length==0 && value.genres.length==0){
            console.log(todoelvideogames)
        }else if(value.name=="" && value.price=="" && value.description=="" && value.rating=="" && value.video.length!=0 && value.image =="" && value.screenshots.length==0 && value.store.length==0 && value.developers.length==0 && value.publishers.length==0 && value.website=="" && value.releaseDate=="" && value.metacritic=="" &&value.esrb_rating=="" && value.platforms.length==0 && value.tags.length==0 && value.genres.length==0){
            console.log(todoelvideogames)
        }else if(value.name=="" && value.price=="" && value.description=="" && value.rating=="" && value.video.length==0 && value.image !="" && value.screenshots.length==0 && value.store.length==0 && value.developers.length==0 && value.publishers.length==0 && value.website=="" && value.releaseDate=="" && value.metacritic=="" &&value.esrb_rating=="" && value.platforms.length==0 && value.tags.length==0 && value.genres.length==0){
            console.log(todoelvideogames)
        }else if(value.name=="" && value.price=="" && value.description=="" && value.rating=="" && value.video.length==0 && value.image =="" && value.screenshots.length!=0 && value.store.length==0 && value.developers.length==0 && value.publishers.length==0 && value.website=="" && value.releaseDate=="" && value.metacritic=="" &&value.esrb_rating=="" && value.platforms.length==0 && value.tags.length==0 && value.genres.length==0){
            console.log(todoelvideogames)
        }else if(value.name=="" && value.price=="" && value.description=="" && value.rating=="" && value.video.length==0 && value.image =="" && value.screenshots.length==0 && value.store.length!=0 && value.developers.length==0 && value.publishers.length==0 && value.website=="" && value.releaseDate=="" && value.metacritic=="" &&value.esrb_rating=="" && value.platforms.length==0 && value.tags.length==0 && value.genres.length==0){
            console.log(todoelvideogames)
        }else if(value.name=="" && value.price=="" && value.description=="" && value.rating=="" && value.video.length==0 && value.image =="" && value.screenshots.length==0 && value.store.length==0 && value.developers.length!=0 && value.publishers.length==0 && value.website=="" && value.releaseDate=="" && value.metacritic=="" &&value.esrb_rating=="" && value.platforms.length==0 && value.tags.length==0 && value.genres.length==0){
            console.log(todoelvideogames)
        }else if(value.name=="" && value.price=="" && value.description=="" && value.rating=="" && value.video.length==0 && value.image =="" && value.screenshots.length==0 && value.store.length==0 && value.developers.length==0 && value.publishers.length!=0 && value.website=="" && value.releaseDate=="" && value.metacritic=="" &&value.esrb_rating=="" && value.platforms.length==0 && value.tags.length==0 && value.genres.length==0){
            console.log(todoelvideogames)
        }else if(value.name=="" && value.price=="" && value.description=="" && value.rating=="" && value.video.length==0 && value.image =="" && value.screenshots.length==0 && value.store.length==0 && value.developers.length==0 && value.publishers.length==0 && value.website!="" && value.releaseDate=="" && value.metacritic=="" &&value.esrb_rating=="" && value.platforms.length==0 && value.tags.length==0 && value.genres.length==0){
            console.log(todoelvideogames)
        }else if(value.name=="" && value.price=="" && value.description=="" && value.rating=="" && value.video.length==0 && value.image =="" && value.screenshots.length==0 && value.store.length==0 && value.developers.length==0 && value.publishers.length==0 && value.website=="" && value.releaseDate!="" && value.metacritic=="" &&value.esrb_rating=="" && value.platforms.length==0 && value.tags.length==0 && value.genres.length==0){
            console.log(todoelvideogames)
        }else if(value.name=="" && value.price=="" && value.description=="" && value.rating=="" && value.video.length==0 && value.image =="" && value.screenshots.length==0 && value.store.length==0 && value.developers.length==0 && value.publishers.length==0 && value.website=="" && value.releaseDate=="" && value.metacritic!="" &&value.esrb_rating=="" && value.platforms.length==0 && value.tags.length==0 && value.genres.length==0){
            console.log(todoelvideogames)
        }else if(value.name=="" && value.price=="" && value.description=="" && value.rating=="" && value.video.length==0 && value.image =="" && value.screenshots.length==0 && value.store.length==0 && value.developers.length==0 && value.publishers.length==0 && value.website=="" && value.releaseDate=="" && value.metacritic=="" &&value.esrb_rating!="" && value.platforms.length==0 && value.tags.length==0 && value.genres.length==0){
            console.log(todoelvideogames)
        }else if(value.name=="" && value.price=="" && value.description=="" && value.rating=="" && value.video.length==0 && value.image =="" && value.screenshots.length==0 && value.store.length==0 && value.developers.length==0 && value.publishers.length==0 && value.website=="" && value.releaseDate=="" && value.metacritic=="" &&value.esrb_rating=="" && value.platforms.length!=0 && value.tags.length==0 && value.genres.length==0){
            console.log(todoelvideogames)
        }else if(value.name=="" && value.price=="" && value.description=="" && value.rating=="" && value.video.length==0 && value.image =="" && value.screenshots.length==0 && value.store.length==0 && value.developers.length==0 && value.publishers.length==0 && value.website=="" && value.releaseDate=="" && value.metacritic=="" &&value.esrb_rating=="" && value.platforms.length==0 && value.tags.length!=0 && value.genres.length==0){
            console.log(todoelvideogames)
        }else if(value.name=="" && value.price=="" && value.description=="" && value.rating=="" && value.video.length==0 && value.image =="" && value.screenshots.length==0 && value.store.length==0 && value.developers.length==0 && value.publishers.length==0 && value.website=="" && value.releaseDate=="" && value.metacritic=="" &&value.esrb_rating=="" && value.platforms.length==0 && value.tags.length==0 && value.genres.length!=0){
            console.log(todoelvideogames)
        }else{
            // Si todo cambia
        
        }
        
}

// console.log(value);
    return (
        <div className='container-createVideogames'>
            <div className="subContainer-createVideogames">
                <div className="divcontainer01">
                    <h2 className="h2">Edit Videogame</h2>
                        {/* NAME */}
                        <div className="create-name">
                            <label type="text">Name: </label>
                            {
                                (muestra.name)?(<>
                                    <input type="text" onChange={(ev)=>handleChangeInput(ev)} name="name" required value={detailsVideogames.name}/>
                                    <input type="submit" onClick={()=>onClickName()} value="Edit Name"/>
                                </>):(
                                    <>
                                    <input type="text" onChange={(ev)=>handleChangeRespuesta(ev)} onBlur={(ev)=>handleChangeRespuesta(ev)} onKeyUp={(ev)=>handleChangeRespuesta(ev)} name="name" required placeholder={state.name} value={value.name}/>
                                    </>
                                )
                            }
                            {
                                (mensaje.name)?(<p>Para modificar debe darle click en boton editar...</p>):null
                            }
                            <div>
                                {showError ? <span>{error.name}</span> || <span>{validate.name}</span> : <span>{error.name}</span>|| <span>{validate.name}</span>}
                            </div>
                        </div>
                        {/* PRICE */}
                        <div className="create-price">
                            <label type="text">Price: </label>
                            {
                                (muestra.price)?(<>
                                    <input type="text" onChange={(ev)=>handleChangeInput(ev)} name="price" required value={detailsVideogames.price}/>
                                    <input type="submit" onClick={()=>onClickPrice()} value="Edit Price"/>
                                </>):(
                                    <>
                                    <input type="text" onChange={(ev)=>handleChangeRespuesta(ev)} onBlur={(ev)=>handleChangeRespuesta(ev)} onKeyUp={(ev)=>handleChangeRespuesta(ev)} name="price" required placeholder={state.price} value={value.price}/>
                                    </>
                                )
                            }
                            {
                                (mensaje.price)?(<p>Para modificar debe darle click en boton editar...</p>):null
                            }
                            <div>
                            {showError ? <span>{error.price}</span> || <span>{validate.price}</span> : <span>{error.price}</span>|| <span>{validate.price}</span>}
                            </div>
                        </div>
                        {/* DESCRIPTION */}
                        <div className="create-description">
                            <label type="text">Description: </label>
                            {
                                (muestra.description)?(<>
                                    <textarea cols="50" rows="7" onChange={(ev)=>handleChangeInput(ev)} name="description" required value={detailsVideogames.description}></textarea>
                                    <input type="submit" onClick={()=>onClickDescription()} value="Edit Description"/>
                                </>):(
                                    <>
                                    <textarea cols="50" rows="7" onChange={(ev)=>handleChangeRespuesta(ev)} onBlur={(ev)=>handleChangeRespuesta(ev)} onKeyUp={(ev)=>handleChangeRespuesta(ev)} name="description" required placeholder={state.description} value={value.description}></textarea>
                                    {/* <input type="text" onChange={(ev)=>handleChangeRespuesta(ev)} onBlur={(ev)=>handleChangeRespuesta(ev)} onKeyUp={(ev)=>handleChangeRespuesta(ev)} name="price" required placeholder={state.price} value={value.price}/> */}
                                    </>
                                )
                            }
                            {
                                (mensaje.description)?(<p>Para modificar debe darle click en boton editar...</p>):null
                            }
                            <div>
                            {showError ? <span>{error.description}</span> || <span>{validate.description}</span> : <span>{error.description}</span>|| <span>{validate.description}</span>}
                            </div>
                        </div>
                        {/* RATING */}
                        <div className="create-rating">
                            <label type="text">Rating: </label>
                            {/* <input type="text" onChange={(ev)=>handleChange(ev)} name="rating" required placeholder="rating... " onBlur={(ev)=>{handleChange(ev)}} onKeyUp={(ev)=>handleChange(ev)} value={state.rating}/> */}
                            {
                                (muestra.rating)?(<>
                                    <input type="text" onChange={(ev)=>handleChangeInput(ev)} name="rating" required value={detailsVideogames.rating}/>
                                    <input type="submit" onClick={()=>onClickRating()} value="Edit Rating"/>
                                </>):(
                                    <>
                                    <input type="text" onChange={(ev)=>handleChangeRespuesta(ev)} onBlur={(ev)=>handleChangeRespuesta(ev)} onKeyUp={(ev)=>handleChangeRespuesta(ev)} name="rating" required placeholder={state.rating} value={value.rating}/>
                                    </>
                                )
                            }
                            {
                                (mensaje.rating)?(<p>Para modificar debe darle click en boton editar...</p>):null
                            }
                            <div>
                            {showError ? <span>{error.rating}</span> || <span>{validate.rating}</span> : <span>{error.rating}</span>|| <span>{validate.rating}</span>}
                            </div>
                        </div>
                        {/* VIDEO */}
                        <div className="create-video">
                            <label type="text">Video: </label>
                            <div>
                            {
                                (muestra.video)?(<>
                                <input type="text" onChange={(ev)=>handleChangeInput(ev)} required name="video" placeholder="videa... " value={""}/>
                                <input type="submit" value="+" onClick={()=>onClickAgregarMovie()}/>
                                {
                                    detailsVideogames.video?.map((video)=>{
                                    return(
                                        <div key={video} className="ccvideo">
                                            <p>{video}</p>
                                            <input type="submit" onClick={()=>onClickDeleteVideo(video)} value="X"/>
                                        </div>
                                        )
                                    })
                                }
                                <input type="submit" onClick={()=>onClickVideo()} value="Edit Name"/></>):(
                                    <>
                                    <input type="text" onChange={(ev)=>handleChangeRespuesta(ev)} required name="video" placeholder="video... "/>
                                    <input type="submit" value="+" onClick={()=>onClickAgregarMovie()}/>
                                    {value.video.flat()?.map((video)=>{
                                        return(
                                            <div key={video} className="ccvideo">
                                                <p>{video}</p>
                                                <input type="submit" onClick={()=>onClickDeleteVideo(video)} value="X"/>
                                            </div>
                                            )
                                        })
                                    }
                                    </>
                                )
                                
                            }
                            {
                                (mensaje.video)?(<p>Para modificar debe darle click en boton editar...</p>):null
                            }
                            {showError ? <span>{error.video}</span> || <span>{validate.video}</span> : <span>{error.video}</span>|| <span>{validate.video}</span>}
                            </div>
                        </div>
                        {/* IMAGE */}
                        <div className="create-image">
                        <label type="text">Image: </label>
                            {
                                (muestra.image)?(<>
                                    <input type="text" onChange={(ev)=>handleChangeInput(ev)} name="image" required value={detailsVideogames.image}/>
                                    <input type="submit" onClick={()=>onClickImage()} value="Edit Image"/>
                                </>):(
                                    <>
                                    <input type="text" onChange={(ev)=>handleChangeRespuesta(ev)} onBlur={(ev)=>handleChangeRespuesta(ev)} onKeyUp={(ev)=>handleChangeRespuesta(ev)} name="image" required placeholder={state.image} value={value.image}/>
                                    </>
                                )
                            }
                            {
                                (mensaje.image)?(<p>Para modificar debe darle click en boton editar...</p>):null
                            }
                            <div>    
                            {showError ? <span>{error.image}</span> || <span>{validate.image}</span> : <span>{error.image}</span>|| <span>{validate.image}</span>}
                            </div>
                        </div>
                        {/* SCRENSHOT  */}
                        <div className="create-screenshots">
                            <label type="text">Screenshots: </label>
                            <div>
                            {
                                (muestra.screenshots)?(<>
                                <input type="text" onChange={(ev)=>handleChangeInput(ev)} required name="screenshot" placeholder="screenshot... " value={""}/>
                                <input type="submit" value="+" onClick={()=>onClickAgregarScreenshot()}/>
                                {
                                    detailsVideogames.screenshots?.map((video)=>{
                                    return(
                                        <div key={video} className="ccscren">
                                            <p>{video}</p>
                                            <input type="submit" onClick={()=>onClickDeleteScreenshot(video)} value="X"/>
                                        </div>
                                        )
                                    })
                                }
                                <input type="submit" onClick={()=>onClickScreenshot()} value="Edit Screenshot"/></>):(
                                    <>
                                    <input type="text" onChange={(ev)=>handleChangeRespuesta(ev)} required name="screenshot" placeholder="screenshot... "/>
                                    <input type="submit" value="+" onClick={()=>onClickAgregarScreenshot()}/>
                                    {value.screenshots.flat()?.map((video)=>{
                                        return(
                                            <div key={video} className="ccscren">
                                                <p>{video}</p>
                                                <input type="submit" onClick={()=>onClickDeleteScreenshot(video)} value="X"/>
                                            </div>
                                            )
                                        })
                                    }
                                    </>
                                )
                                
                            }
                            {
                                (mensaje.screenshots)?(<p>Para modificar debe darle click en boton editar...</p>):null
                            }
                            {showError ? <span>{error.screenshot}</span> || <span>{validate.screenshot}</span> : <span>{error.screenshot}</span>|| <span>{validate.screenshot}</span>}
                            </div>
                        </div>
                        {/* STORE */}
                        <div className="create-store">
                            <label type="text">Store: </label>
                            {
                                (muestra.store)?(<>
                                <select onChange={(ev)=>handleChangeInput(ev)} value={store.name} name="store" >
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
                                    detailsVideogames.store?.map((store)=>{
                                        return(
                                            <div key={store} className="ccstore">
                                                <p>{store}</p>
                                                <input type="submit" onClick={()=>onClickDeleteStore(store)} value="X"/>
                                            </div>
                                            )
                                    })
                                }
                                </div> 
                                <input type="submit" onClick={()=>onClickStore()} value="Edit Store"/></>):(<>

                                    <select onChange={(ev)=>handleChangeRespuesta(ev)} value={store.name} name="store">
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
                                    {
                                        value.store.flat()?.map((store)=>{
                                            return(
                                                <div key={store} className="ccstore">
                                                    <p>{store}</p>
                                                    <input type="submit" onClick={()=>onClickDeleteStore(store)} value="X"/>
                                                </div>
                                                )
                                        })
                                    }
                                </>)
                            }
                            {
                                (mensaje.store)?(<p>Para modificar debe darle click en boton editar...</p>):null
                            }
                        </div>
                            {/* DEVELOPERS */}
                        <div className="create-developers">
                            <label type="text">Developers: </label>
                            <div>
                            {
                                (muestra.developers)?(<>
                                <input type="text" onChange={(ev)=>handleChangeInput(ev)} required name="developers" placeholder="developers... " value={""}/>
                                <input type="submit" value="+" onClick={()=>onClickAgregarScreenshot()}/>
                                {
                                    detailsVideogames.developers?.map((video)=>{
                                    return(
                                        <div key={video} className="ccdevelop">
                                            <p>{video}</p>
                                            <input type="submit" onClick={()=>onClickDeleteDeveloper(video)} value="X"/>
                                        </div>
                                        )
                                    })
                                }
                                <input type="submit" onClick={()=>onClickDevelopers()} value="Edit Developers"/></>):(
                                    <>
                                    <input type="text" onChange={(ev)=>handleChangeRespuesta(ev)} required name="developers" placeholder="developers... "/>
                                    <input type="submit" value="+" onClick={()=>onClickAgregarDeveloper()}/>
                                    {value.developers.flat()?.map((video)=>{
                                        return(
                                            <div key={video} className="ccdevelop">
                                                <p>{video}</p>
                                                <input type="submit" onClick={()=>onClickDeleteDeveloper(video)} value="X"/>
                                            </div>
                                            )
                                        })
                                    }
                                    </>
                                )
                                
                            }
                            {
                                (mensaje.developers)?(<p>Para modificar debe darle click en boton editar...</p>):null
                            }
                            {showError ? <span>{error.developers}</span> || <span>{validate.developers}</span> : <span>{error.developers}</span>|| <span>{validate.developers}</span>}
                            </div>
                        </div>
                        {/* PUBLISHERS */}
                        <div className="create-publishers">
                            <label type="text">Publishers: </label>
                            <div>
                            {
                                (muestra.publishers)?(<>
                                <input type="text" onChange={(ev)=>handleChangeInput(ev)} required name="publishers" placeholder="publishers... " value={""}/>
                                <input type="submit" value="+" onClick={()=>onClickAgregarPublisher()}/>
                                {
                                    detailsVideogames.publishers?.map((video)=>{
                                    return(
                                        <div key={video} className="ccdevelop">
                                            <p>{video}</p>
                                            <input type="submit" onClick={()=>onClickDeletePublisher(video)} value="X"/>
                                        </div>
                                        )
                                    })
                                }
                                <input type="submit" onClick={()=>onClickPublishers()} value="Edit Publishers"/></>):(
                                    <>
                                    <input type="text" onChange={(ev)=>handleChangeRespuesta(ev)} required name="publishers" placeholder="publishers... "/>
                                    <input type="submit" value="+" onClick={()=>onClickAgregarPublisher()}/>
                                    {value.publishers.flat()?.map((video)=>{
                                        return(
                                            <div key={video} className="ccpubli">
                                                <p>{video}</p>
                                                <input type="submit" onClick={()=>onClickDeletePublisher(video)} value="X"/>
                                            </div>
                                            )
                                        })
                                    }
                                    </>
                                )
                                
                            }
                            {
                                (mensaje.publishers)?(<p>Para modificar debe darle click en boton editar...</p>):null
                            }
                            {showError ? <span>{error.publishers}</span> || <span>{validate.publishers}</span> : <span>{error.publishers}</span>|| <span>{validate.publishers}</span>}
                            </div>
                        </div>
                        {/* WEBSITE */}
                        <div className="create-website">
                        <label type="text">WebSite: </label>
                            {
                                (muestra.website)?(<>
                                    <input type="text" onChange={(ev)=>handleChangeInput(ev)} name="website" required value={detailsVideogames.website}/>
                                    <input type="submit" onClick={()=>onClickWebSite()} value="Edit Website"/>
                                </>):(
                                    <>
                                    <input type="text" onChange={(ev)=>handleChangeRespuesta(ev)} onBlur={(ev)=>handleChangeRespuesta(ev)} onKeyUp={(ev)=>handleChangeRespuesta(ev)} name="website" required placeholder={state.website} value={value.website}/>
                                    </>
                                )
                            }
                            {
                                (mensaje.website)?(<p>Para modificar debe darle click en boton editar...</p>):null
                            }
                            <div>    
                            {showError ? <span>{error.website}</span> || <span>{validate.website}</span> : <span>{error.website}</span>|| <span>{validate.website}</span>}
                            </div>
                        </div>
                        {/* RELEASEDATE */}
                        <div className="create-releasedate">
                        <label type="text">ReleaseDate : </label>
                        {
                                (muestra.releaseDate)?(<>
                                    <input type="text" onChange={(ev)=>handleChangeInput(ev)} name="releaseDate" required value={detailsVideogames.realeaseDate}/>
                                    <input type="submit" onClick={()=>onClickreleaseDate()} value="Edit releaseDate"/>
                                </>):(
                                    <>
                                    <input type="text" onChange={(ev)=>handleChangeRespuesta(ev)} onBlur={(ev)=>handleChangeRespuesta(ev)} onKeyUp={(ev)=>handleChangeRespuesta(ev)} name="releaseDate" required placeholder={state.releaseDate} value={value.releaseDate}/>
                                    </>
                                )
                            }
                            {
                                (mensaje.releaseDate)?(<p>Para modificar debe darle click en boton editar...</p>):null
                            }
                            <div>    
                            {showError ? <span>{error.releaseDate}</span> || <span>{validate.releaseDate}</span> : <span>{error.releaseDate}</span>|| <span>{validate.releaseDate}</span>}
                            </div>
                        </div>
                        {/* METACRITIC */}
                        <div className="create-metacritic">
                        <label type="text">Metacritic </label>
                            {
                                (muestra.metacritic)?(<>
                                    <input type="text" onChange={(ev)=>handleChangeInput(ev)} name="metacritic" required value={detailsVideogames.metacritic}/>
                                    <input type="submit" onClick={()=>onClickmetacritic()} value="Edit metacritic"/>
                                </>):(
                                    <>
                                    <input type="text" onChange={(ev)=>handleChangeRespuesta(ev)} onBlur={(ev)=>handleChangeRespuesta(ev)} onKeyUp={(ev)=>handleChangeRespuesta(ev)} name="metacritic" required placeholder={state.metacritic} value={value.metacritic}/>
                                    </>
                                )
                            }
                            {
                                (mensaje.metacritic)?(<p>Para modificar debe darle click en boton editar...</p>):null
                            }
                            <div>    
                            {showError ? <span>{error.metacritic}</span> || <span>{validate.metacritic}</span> : <span>{error.metacritic}</span>|| <span>{validate.metacritic}</span>}
                            </div>
                        </div>
                        {/* ESRB_RATING */}
                        <div className="create-esrb_rating">
                        <label type="text">Esrb rating: </label>
                        {
                                (muestra.esrb_rating)?(<>
                                    <input type="text" onChange={(ev)=>handleChangeInput(ev)} name="esrb_rating" required value={detailsVideogames.esrb_rating}/>
                                    <input type="submit" onClick={()=>onClickesr_rating()} value="Edit esrb_rating"/>
                                </>):(
                                    <>
                                    <input type="text" onChange={(ev)=>handleChangeRespuesta(ev)} onBlur={(ev)=>handleChangeRespuesta(ev)} onKeyUp={(ev)=>handleChangeRespuesta(ev)} name="esrb_rating" required placeholder={state.esrb_rating} value={value.esrb_rating}/>
                                    </>
                                )
                            }
                            {
                                (mensaje.esrb_rating)?(<p>Para modificar debe darle click en boton editar...</p>):null
                            }
                            <div>    
                            {showError ? <span>{error.esrb_rating}</span> || <span>{validate.esrb_rating}</span> : <span>{error.esrb_rating}</span>|| <span>{validate.esrb_rating}</span>}
                            </div>
                        </div>
                        {/* Platforms */}
                        <div className="create-platform">
                            <label type="text">Platforms: </label>
                            {
                                (muestra.platforms)?(<>
                                <select onChange={(ev)=>handleChangeInput(ev)} value={platform.name} name="platforms" >
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
                                    detailsVideogames.platforms?.map((store)=>{
                                        return(
                                            <div key={store.name} className="ccstore">
                                                <p>{store.name}</p>
                                                <input type="submit" onClick={()=>onClickDeletePlatform(store.name)} value="X"/>
                                            </div>
                                            )
                                    })
                                }
                                </div> 
                                <input type="submit" onClick={()=>onClickPlatforms()} value="Edit Platform"/></>):(<>

                                    <select onChange={(ev)=>handleChangeRespuesta(ev)} value={platform.name} name="platforms">
                                        <option value="All">Select Plataform: </option>
                                        {
                                        platforms?.map((platform)=>{
                                        return(
                                            <option key={platform.id}>{platform.name}</option>
                                            )
                                        })
                                        }
                                    </select>
                                    {
                                        value.platforms.flat()?.map((store)=>{
                                            return(
                                                <div key={[store.name|| store]} className="ccstore">
                                                    <p>{[store.name|| store]}</p>
                                                    <input type="submit" onClick={()=>onClickDeletePlatform(store)} value="X"/>
                                                </div>
                                                )
                                        })
                                    }
                                </>)
                            }
                            {
                                (mensaje.platforms)?(<p>Para modificar debe darle click en boton editar...</p>):null
                            }
                        </div>
                        {/* Tags */}
                        <div className="create-tag">
                            <label>Tags: </label>
                            {
                                (muestra.tags)?(<>
                                <select onChange={(ev)=>handleChangeInput(ev)} value={tag.name} name="tags" >
                                <option value="All">Select Tags: </option>
                                        {
                                        tags?.map((platform)=>{
                                        return(
                                            <option key={platform.id}>{platform.name}</option>
                                            )
                                        })
                                        }
                                    </select>
                                <div>
                                {
                                    detailsVideogames.tags?.map((store)=>{
                                        return(
                                            <div key={store.name} className="ccstore">
                                                <p>{store.name}</p>
                                                <input type="submit" onClick={()=>onClickDeleteTag(store.name)} value="X"/>
                                            </div>
                                            )
                                    })
                                }
                                </div> 
                                <input type="submit" onClick={()=>onClickTags()} value="Edit Tag"/></>):(<>

                                    <select onChange={(ev)=>handleChangeRespuesta(ev)} value={tag.name} name="tags">
                                        <option value="All">Select Tag: </option>
                                        {
                                        tags?.map((platform)=>{
                                        return(
                                            <option key={platform.id}>{platform.name}</option>
                                            )
                                        })
                                        }
                                    </select>
                                    {
                                        value.tags.flat()?.map((store)=>{
                                            return(
                                                <div key={[store.name|| store]} className="ccstore">
                                                    <p>{[store.name|| store]}</p>
                                                    <input type="submit" onClick={()=>onClickDeleteTag(store)} value="X"/>
                                                </div>
                                                )
                                        })
                                    }
                                </>)
                            }
                            {
                                (mensaje.tags)?(<p>Para modificar debe darle click en boton editar...</p>):null
                            }
                        </div>
                        {/* genres */}
                        <div className="create-genre">
                            <label>Genres: </label>
                            {
                                (muestra.genres)?(<>
                                <select onChange={(ev)=>handleChangeInput(ev)} value={genre.name} name="genres" >
                                <option value="All">Select Genre: </option>
                                        {
                                        genres?.map((platform)=>{
                                        return(
                                            <option key={platform.id}>{platform.name}</option>
                                            )
                                        })
                                        }
                                    </select>
                                <div>
                                {
                                    detailsVideogames.genres?.map((store)=>{
                                        return(
                                            <div key={store.name} className="ccstore">
                                                <p>{store.name}</p>
                                                <input type="submit" onClick={()=>onClickDeleteGenres(store.name)} value="X"/>
                                            </div>
                                            )
                                    })
                                }
                                </div> 
                                <input type="submit" onClick={()=>onClickGenres()} value="Edit Genre"/></>):(<>

                                    <select onChange={(ev)=>handleChangeRespuesta(ev)} value={genre.name} name="genres">
                                        <option value="All">Select Genre: </option>
                                        {
                                        genres?.map((platform)=>{
                                        return(
                                            <option key={platform.id}>{platform.name}</option>
                                            )
                                        })
                                        }
                                    </select>
                                    {
                                        value.genres.flat()?.map((store)=>{
                                            return(
                                                <div key={[store.name||store]} className="ccstore">
                                                    <p>{[store.name|| store]}</p>
                                                    <input type="submit" onClick={()=>onClickDeleteGenres(store)} value="X"/>
                                                </div>
                                                )
                                        })
                                    }
                                </>)
                            }
                            {
                                (mensaje.genres)?(<p>Para modificar debe darle click en boton editar...</p>):null
                            }
                        </div>


                        {/* BUTTON */}
                        <button onClick={()=>onClickEditar()}>EDITAR</button>
                </div>
                <div className="divcontainer02">

                </div>
            </div>
        </div>
    )
}