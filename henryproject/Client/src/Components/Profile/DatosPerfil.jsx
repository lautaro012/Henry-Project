import React from "react";

export default function DatosPerfil(data) {
    
    console.log("DATA DE PERFIL",data)
    let { name, lastName, image, address, mail, userName } = data.data

    return (
        <div>
            <h1>{name}</h1>
            <h1>{lastName}</h1>
            <h1>{address}</h1>
            <h1>{mail}</h1>
            <h1>{userName}</h1>
            <img src={image} alt={userName}></img>
        </div>
    )
}