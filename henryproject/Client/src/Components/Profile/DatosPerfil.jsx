import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { deleteUser, modificarUser } from '../../redux/Actions/Index'

export default function DatosPerfil({setUserLogged, data}) {

    console.log("DATA DE PERFIL", data)
    console.log("SET USER LOGGED", setUserLogged)
    let { name, lastName, image, address, mail, userName, id_name } = data

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [errors, setErrors] = useState({ first: true })

    const [input, setInput] = useState({})

    function handleInput(event) {
        event.preventDefault()
        setInput({
            ...input,
            [event.target.name]: event.target.value
        })
        setErrors(validations({
            ...input,
            [event.target.name]: event.target.value
        }))
    }

    const validations = (input) => { // VARIABLE PARA GUARDAR UN MENSAJE EN CASO DE FALTANTES DEL INPUT
        let errors = {}
        for (const key in input) {
            if (!input[key]) {
                errors[key] = `Is ${key} required`
            }
            else if (input[key]?.trim().length < 3) { //el .trim() saca los espacios del inicio y el fin de la palabra
                errors[key] = "Must be at least 3 characters"
            }
            else if ((/[^a-zA-Z0-9 ]/.test(input[key]))) { //validacion para que el name no pueda contener caracteres especiales
                if (input[key] !== image) {
                    errors[key] = "Can't contain special characters"
                }
            }
        }

        return errors
    }

    const [todoOk, settodoOk] = useState(false)

    function handleSubmit(event) {
        event.preventDefault()
        for (const key in input) {
            if (!input[key]) {
                alert(`Completa el campo ${key}`)
            }
            else {
                dispatch(modificarUser(id_name, input))
                alert("User modify!")
                setInput({})
                settodoOk(false)
                setUserLogged(false)
                navigate("/home/games");
            }
        }
    }

    // function handleSubmit(event) {
    //     event.preventDefault()

    //     if (todoOk === true){
    //         dispatch(modificarUser(id_name, input))
    //         alert("User modify!")
    //         setInput({})
    //         settodoOk(false)
    //         navigate("/home/games");
    //     }
    //     else{
    //         for (const key in input) {
    //             if(!input[key]){
    //             alert(`Completa el campo ${key}`)
    //             }
    //             else if (input[key]?.trim().length < 3) { //el .trim() saca los espacios del inicio y el fin de la palabra
    //                 alert(`El campo ${key} debe tener al menos 3 caracteres`)
    //             }
    //             else {
    //                 settodoOk(true)
    //             }
    //         }
    //     }
    // }

    function deleteUserFromDB(id_name) {
        dispatch(deleteUser(id_name))
        alert("User deleted")
        navigate("/home/games");
    }

    const [form, setForm] = useState("")

    function abrirForm(event, nombreDelInput) {
        event.preventDefault()
        setForm(nombreDelInput)
    }

    return (
        <div className="modificar_perfil">
            <h1>My profile</h1>
            <img id="imagenPerfil" alt={name} src={image}></img>

            <form onSubmit={(event) => handleSubmit(event)} className="Form">


                <div className="Label">
                    <h3>Name</h3>
                    <label>{name}</label>
                    <button onClick={(event) => abrirForm(event, "name")}>Edit</button>
                    {
                        form && form === "name" ?
                            <div>
                                <input
                                    required
                                    id="Name"
                                    type='text'
                                    size="20"
                                    value={input.name}
                                    name='name'
                                    placeholder="Name..."
                                    onChange={(event) => handleInput(event)}
                                />
                                {
                                    !errors.name ? null : <span>{errors.name}</span>
                                }
                                <button onClick={(event) => abrirForm(event, "")}>X</button>
                            </div>
                            :
                            null
                    }

                </div>

                <div className="Label">
                    <h3>Last name</h3>
                    <label>{lastName}</label>
                    <button onClick={(event) => abrirForm(event, "last name")}>Edit</button>
                    {
                        form && form === "last name" ?
                            <div>
                                <input
                                    id="Last name"
                                    type='text'
                                    size="40"
                                    value={input.lastName}
                                    name='lastName'
                                    placeholder="Last name..."
                                    onChange={(event) => handleInput(event)}
                                />
                                {
                                    !errors.lastName ? null : <span>{errors.lastName}</span>
                                }
                                <button onClick={(event) => abrirForm(event, "")}>X</button>
                            </div>
                            :
                            null
                    }

                </div>

                <div className="Label">
                    <h3>User name</h3>
                    <label>{userName}</label>
                    <button onClick={(event) => abrirForm(event, "user name")}>Edit</button>
                    {
                        form && form === "user name" ?
                            <div>
                                <input
                                    id="User"
                                    type='text'
                                    size="20"
                                    value={input.userName}
                                    name='userName'
                                    placeholder="User..."
                                    onChange={(event) => handleInput(event)}
                                />
                                {
                                    !errors.userName ? null : <span>{errors.userName}</span>
                                }
                                <button onClick={(event) => abrirForm(event, "")}>X</button>
                            </div>
                            :
                            null
                    }

                </div>


                <div className="Label">
                    <h3>Address</h3>
                    <label>{address}</label>
                    <button onClick={(event) => abrirForm(event, "address")}>Edit</button>
                    {
                        form && form === "address" ?
                            <div>
                                <input
                                    id="Address"
                                    type='text'
                                    size="40"
                                    value={input.address}
                                    name='address'
                                    placeholder="Address..."
                                    onChange={(event) => handleInput(event)}
                                />
                                {
                                    !errors.userName ? null : <span>{errors.userName}</span>
                                }
                                <button onClick={(event) => abrirForm(event, "")}>X</button>
                            </div>
                            :
                            null
                    }
                </div>

                <div className="Label">
                    <h3>User image</h3>
                    <label>{image}</label>
                    <button onClick={(event) => abrirForm(event, "image")}>Edit</button>
                    {
                        form && form === "image" ?
                            <div>
                                <input
                                    type='text'
                                    size="80"
                                    value={input.image}
                                    name='image'
                                    placeholder="Insert a image URL"
                                    onChange={(event) => handleInput(event)}
                                />
                                {
                                    !errors.image ? null : <span>{errors.image}</span>
                                }
                                <button onClick={(event) => abrirForm(event, "")}>X</button>
                            </div>
                            :
                            null
                    }
                </div>

                <button id="submit" type="submit">Modify User</button>
            </form>

            <button onClick={() => deleteUserFromDB(id_name)}>Delete user</button>
        </div>
    )
}