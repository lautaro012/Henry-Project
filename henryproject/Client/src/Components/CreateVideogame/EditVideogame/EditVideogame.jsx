import React from "react"

export default function EditVideogame(){
    return(
       <div>
       <form onSubmit={e=>validar(e)}>
        {/* componente name */}
        <div>
         <label>Name</label>
         <input type="text" onChange={(e)=>onChangeName(e)}name="name" value={state.name} onBlur={(e)=>onBlurName(e)} onKeyUp={(e)=>onKeyUp} placeholder="ingresar nombre"></input>
         {
                     (errors.name && !validate.name )&& (
                        <p>nombre incorrecto</p>
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
         <input type="number" onChange={(e)=>onChangePrice(e)}name="price" value= {state.price} onBlur={(e)=>onBlurPrice(e)} onKeyUp={(e)=>onKeyUpPrice(e)} placeholder="ingresar precio"></input>
         {
                     (errors.price && !validate.price )&& (
                        <p>precio incorrecto</p>
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
         <textarea type="text" onChange={(e)=>onChangeDescription(e)}name="description" value= {state.description} onBlur={(e)=>onBlurDescription(e)} onKeyUp={(e)=>onKeyUpDescription(e)} placeholder="ingresar description"></textarea>
         {
                     (errors.description && !validate.description )&& (
                        <p>Descripcion incorrecta</p>
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
                     (errors.rating && !validate.rating )&& (
                        <p>Rating incorrecto</p>
                     )
                 }
                {
                     validate.rating && (
                         <p>Debe contener caracteres correctamente</p>
                     )
                }
        </div>
        <div>
         <label>Imagen</label>
         <input type="image"onChange={(e)=>onChangeImg(e)}name="image" value= {state.image} onBlur={(e)=>onBlurImg(e)} onKeyUp={(e)=>onKeyUpImg(e)} placeholder="ingresar imagen"></input>
         {
                     (errors.image && !validate.image )&& (
                        <p>{errors.image}</p>
                     )
                 }
                {
                     validate.image && (
                         <p>Debe contener caracteres correctamente</p>
                     )
                }
        </div>
        <div>
        <label>VideoTrailer</label>
        <input type="video" onChange={(e)=>onChangeVideo(e)}name="videoTrailer" value= {state.videoTrailer} onBlur={(e)=>onBlurVideo(e)} onKeyUp={(e)=>onKeyUpVideo(e)} placeholder="ingresar video"></input>
         {
                     (errors.videoTrailer && !validate.videoTrailer )&& (
                        <p>{errors.videoTrailer}</p>
                     )
                 }
                {
                     validate.videoTrailer && (
                         <p>Debe contener caracteres correctamente</p>
                     )
                }
        </div>
        <div>
        <label>Genres</label>
        <select name="genres" onChange={(e)=>onChangeGenre(e)}>
        <option selected disabled>Seleccionar Genero</option>
        {genres.map(genre=>{
            return(
                <option value={genre.name} key={genre.id}>{genre.name} </option>
            )
        })}
        </select>
        </div>
        <div>
         {state.genres.map(e=>{
             return(
                 <button onClick={(e)=>deleteGenre(e)} value={e}>{e}</button>
             )
         })}
        </div>
        {
                     (errors.genres && !validate.genres )&& (
                        <p>Debe seleccionar generos</p>
                     )
                 }
                {
                     validate.videoTrailer && (
                         <p>Debe contener caracteres correctamente</p>
                     )
                }
        <div>
        <label>Platforms</label>
        <select onChange={(e)=>onChangePlatform(e)}>
        <option>Seleccionar Plataforma</option>
        {platforms.map(e=>{
            return(
                <option value={e.name} key={e.id}>{e.name} </option>
            )
        })}
        </select>
        <div>
         {state.platforms.map(e=>{
             return(
                 <button onClick={(e)=>deletePlatform(e)} value={e}>{e}</button>
             )
         })}
        </div>
        {
                     (errors.platforms && !validate.platforms )&& (
                        <p>Debe seleccionar plataformas</p>
                     )
                 }
                {
                     validate.platforms && (
                         <p>Debe contener caracteres correctamente</p>
                     )
                }
        </div>
       <button type="submit">Submit</button>

        </form>
        {/* visualizar */}

        <div>
         <h1>{state.name}</h1>
         <h3>{state.image}</h3>
         <p>{state.description}</p>
         <p>{state.price}</p>
         <p>{state.rating}</p>
         <p>{state.videoTrailer}</p>
        </div>
        </div>
    )

    
}