import React from "react"
import { useDispatch, useSelector } from "react-redux"
import './CreateVideogame.css'
 import { useEffect, useState } from 'react';
import { getGenres, getPlatforms, createvideogame, getAllGames } from "../../redux/Actions/Index"

export default function CreateVideogame () {
    const dispatch= useDispatch()
    let genres = useSelector(state => state.genres)
    let platforms = useSelector(state => state.platforms)

    useEffect(()=>{
        dispatch(getGenres());
        dispatch(getPlatforms());
    },[dispatch])
    console.log(genres)
     //estados
     const [state,setState]=useState({
         name:"",
         price: 0,
         description: '',
         rating: 1 ,
         image: '',
         videoTrailer: '' ,
         platforms: [],
         genres: [],
         
     })
     const[errors,setErrors]=useState({
        name:false,
        price: false,
        description: false,
        rating: false ,
        image: false,
        videoTrailer: false ,
        platforms: false,
        genres: false,
        
    })
    const[validate,setValidate]=useState({
        name:false,
        price: false,
        description: false,
        rating: false ,
        
        
    })
    //function name
    function onChangeName(e){
     
    }
    function onBlurName(e){

    }
    function onKeyUp(e){

    }
    function onChangePrice(e){

    }
    function onBlurPrice(e){

    }
    function onKeyUpPrice(e){

    }
    function onChangeDescription(e){

    }
    function onBlurDescription(e){

    }
    function onKeyUpDescription(e){

    }
    function onChangeRating(e){

    }
    function onBlurRating(e){

    }
    function onKeyUpRating(e){

    }
    function onChangeGenre(e){

    }
    function onChangePlatform(e){

    }
    return(
        <div className="div">
       <form className="videogame-form">
        {/* componente name */}
        <div>
         <label>Name</label>
         <input type="text" onChange={(e)=>onChangeName(e)}name="name" value={state.name} onBlur={(e)=>onBlurName(e)} onKeyUp={(e)=>onKeyUp} placeholder="ingresar nombre"></input>
         {
                     (errors.name && !validate.name )&& (
                        <p>No dejar los espacios en blanco</p>
                     )
                 }
                {
                     validate.name && (
                         <p>Debe contener caracteres correctamente</p>
                     )
                }
        </div>
        <div>
         <label>Price</label>
         <input type="text" onChange={(e)=>onChangePrice(e)}name="price" value= {state.price} onBlur={(e)=>onBlurPrice(e)} onKeyUp={(e)=>onKeyUpPrice(e)} placeholder="ingresar precio"></input>
         {
                     (errors.price && !validate.price )&& (
                        <p>No dejar los espacios en blanco</p>
                     )
                 }
                {
                     validate.price && (
                         <p>Debe contener caracteres correctamente</p>
                     )
                }
        </div>
        <div>
         <label>Description</label>
         <input type="text" onChange={(e)=>onChangeDescription(e)}name="description" value= {state.description} onBlur={(e)=>onBlurDescription(e)} onKeyUp={(e)=>onKeyUpDescription(e)} placeholder="ingresar description"></input>
         {
                     (errors.description && !validate.description )&& (
                        <p>No dejar los espacios en blanco</p>
                     )
                 }
                {
                     validate.description && (
                         <p>Debe contener caracteres correctamente</p>
                     )
                }
        </div>
        <div>
         <label>Rating</label>
         <input type="text" onChange={(e)=>onChangeRating(e)}name="rating" value= {state.rating} onBlur={(e)=>onBlurRating(e)} onKeyUp={(e)=>onKeyUpRating(e)} placeholder="ingresar rating"></input>
         {
                     (errors.price && !validate.price )&& (
                        <p>No dejar los espacios en blanco</p>
                     )
                 }
                {
                     validate.price && (
                         <p>Debe contener caracteres correctamente</p>
                     )
                }
        </div>
        <div>
         <label>Imagen</label>
         <input type="image"></input>
         {/* {
                     (errors.price && !validate.price )&& (
                        <p>No dejar los espacios en blanco</p>
                     )
                 }
                {
                     validate.price && (
                         <p>Debe contener caracteres correctamente</p>
                     )
                } */}
        </div>
        <div>
        <label>Video</label>
        <input type="video"></input>
        </div>
        <div>
        <label>Genres</label>
        <select onChange={(e)=>onChangeGenre(e)}>
        <option>Seleccionar Genero</option>
        {genres.map(e=>{
            return(
                <option value={genres.name} key={genres.id}>{genres.name} </option>
            )
        })}
        </select>
        </div>
        <div>
        <label>Platforms</label>
        <select onChange={(e)=>onChangePlatform(e)}>
        <option>Seleccionar Plataforma</option>
        {platforms.map(e=>{
            return(
                <option value={platforms.name} key={platforms.id}>{platforms.name} </option>
            )
        })}
        </select>
        </div>
       

        </form>
        {/* visualizar */}

        <div>
         <h1>{state.name}</h1>
         <h3>{state.image}</h3>
         <p>{state.description}</p>
         <p>{state.price}</p>
        </div>
        </div>
    )

    //const dispatch = useDispatch()
    //let genres = useSelector(state => state.genres)
    //let platforms = useSelector(state => state.platforms)

    //useEffect(() => {
       // if(genres.length === 0) {
          //  dispatch(getGenres())
        //}
        //if(platforms.length === 0) {
            //dispatch(getPlatforms())
        //}
    //}, [])

//     console.log(genres);

//     const [game, setGame] = useState({
//         name: '',
//         price: 0,
//         description: '',
//         rating: 1 ,
//         image: '',
//         videoTrailer: '' ,
//         platforms: [],
//         genres: [],

//     })
//     const [error,setError]=useState({
//         name: false,
//         price: true,
//         description: false,
//         // rating: false,
//         image: false,
//         videoTrailer: false ,
//         // platforms: [],
//         // genres: [],
//     });
//     const [validate,setValidate]=useState({
//         name: false,
//         price: true,
//         description: false,
//         // rating: false,
//         image: false,
//         videoTrailer: false ,
//     })



//     //validar los campos
//     //Expresiones
//     const expresiones={
//         name: /^[a-zA-ZñÑ]{1,16}$/,
//         price:/^[0-9]{}$/,
//         description: /^[a-zA-ZñÑ]{1,40}$/,
//         image: /^[a-zA-Z0-9ñÑ ]{1,1000}$/,
//         videoTrailer: /^[a-zA-Z0-9ñÑ ]{1,1000}$/,
//     }
// //Funcion expresion
// function validarExpresiones(ev){
//     switch (ev.target.name) {
//         case "name":
//             if(ev.target.value===""){
//                 setError({...error,name:true});
//                 setValidate({...validate,name:false});
//             }else{
//                 if(expresiones.name.test(ev.target.value)){
//                     setValidate({...validate,name:false});
//                 }else{
//                     setValidate({...validate,name:true});
//                 }
//             }
//             break;
//         default:
//             break;
//     }
// }




// function handleSubmit(e) {
//         e.preventDefault()
//         dispatch(createvideogame(game))
//         alert('VIDEOJUEGO CREADO !! ')
//         setGame({
//             name: '',
//             price: 0,
//             description: '',
//             rating: 1 ,
//             image: '',
//             videoTrailer: '' ,
//             platforms: [],
//             genres: [],
//         })
//     }


//     function handleChange(e) {
//         setGame({
//             ...game,
//             [e.target.name]: e.target.value
//         })
//     }
//     //validacion
//     function handleChangeName(e){
//         setGame({
//             ...game,
//             [e.target.name]: e.target.value
//         })
//         setError({...error,name:false});
//     }

//     function onBlurName(e){
//         validarExpresiones(e);
//     }
//     function onKeyName(e){
//         validarExpresiones(e);
//     }


//     function handleGenre(e) {
//         setGame([{
//             ...game,
//             genres:[...game.genres, e.target.value]
//         }
//         ])
//     }

//     function handlePlatform (e){
//         setGame([{
//             ...game,
//             platforms:[...game.platforms, e.target.value]
//         }
//         ])
//     }
 
//     function onChangeDeleteGenres(e){
//         setGame([{
//            ...game,
//            genres:[...game.genres,e.target.value]
//         }
//         ])

        
//     }


//     return (
//         <div className="div">
//             <form className="videogame-form" onSubmit={(e) => handleSubmit(e)}>
//                 <label>Name</label>
//                 <input type="text" name='name' onChange={(e) => handleChangeName(e)} onBlurName={(e)=>onBlurName(e)} onKeyName={(e)=>onKeyName(e)}></input>
//                 {
//                     (error.name && !validate.name )&& (
//                         <p>No dejar los espacios en blanco</p>
//                     )
//                 }
//                 {
//                     validate.name && (
//                         <p>Debe contener caracteres correctamente</p>
//                     )
//                 }
//                 <label>Price</label>
//                 <input type="text" name='price' onChange = {(e) => handleChange(e)} ></input>
//                 {
//                     (error.price && !validate.price )&& (
//                         <p>No dejar los espacios en blanco</p>
//                     )
//                 }
//                 {
//                     validate.price && (
//                         <p>Debe contener caracteres correctamente</p>
//                     )
//                 }
//                 <label>Description</label>
//                 <input type="text" name='description' onChange={(e) => handleChange(e)}></input>
//                 {
//                     (error.description && !validate.description )&& (
//                         <p>No dejar los espacios en blanco</p>
//                     )
//                 }
//                 {
//                     validate.description && (
//                         <p>Debe contener caracteres correctamente</p>
//                     )
//                 }
//                 <label>Image</label>
//                 <input type="text" name='image' onChange={(e) => handleChange(e)}></input>
//                 {
//                     (error.name && !validate.name )&& (
//                         <p>No dejar los espacios en blanco</p>
//                     )
//                 }
//                 <label>Video Trailer</label>
//                 <input type="text" name= 'videoTrailer' onChange={(e) => handleChange(e)}></input>
//                 {
//                     (error.name && !validate.name )&& (
//                         <p>No dejar los espacios en blanco</p>
//                     )
//                 }
//                 <label>Genres</label>
//                 <select onChange={(e) => handleGenre(e)}>
//                     <option>Select Genre</option>
//                     {
//                         genres.map(genre => {
//                             return(
//                                 <option
//                                 value={genre.name}
//                                 key={genre.id}
//                                 >{genre.name}</option>
//                             )
//                         })
//                     }
//                 </select>
//                     <div>
                       
//                     {
//                             genres?.map((c)=>{
//                                 return(
//                                     <div key={c.id} >
//                                         <p>{c.name}</p>
//                                         <button onChange={()=>onChangeDeleteGenres(c.name)}>X</button>
//                                     </div>
//                                     )
//                             })
//                     }
//                     </div>

//                 <label>Platforms</label>
//                 <select onChange={(e) => handlePlatform(e)}>
//                     <option>Select Platform</option>
//                     {
//                         platforms.map(platform => {
//                             return(<option key={platform.id} value={platform.name}>{platform.name}</option>)
//                         })
//                     }
//                 </select>
//                 <button type="submit" >Add Videogame</button>
            
//             </form>
//         </div>
//     )
}