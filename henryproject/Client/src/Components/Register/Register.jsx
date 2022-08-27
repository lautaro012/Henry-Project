import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { postNewUser } from '../../redux/Actions/Index'
import "./Register.css"

const Register = () => {
    const dispatch= useDispatch()

    const [newUser, setNewUser] = useState({
        userName: "",
        name: "",
        lastName: "",
        mail: "",
        address: "",
        password: ""

    })

    function handleChange(e) {
        e.preventDefault(e)
        if(e.target.name) {
            let usuario = {...newUser}
            usuario[e.target.name] = e.target.value
            setNewUser({...newUser, [e.target.name]: e.target.value})
        } else {
            return console.log('falta enviar datos')
        }

    }

    function handleSubmit(e) {
        e.preventDefault()
        dispatch(postNewUser(newUser))
    }



  return (
    <div className='divFormRegister'>
        <form className='formRegister' onSubmit={(e) => handleSubmit(e)} >
            <label type="text" >UserName:</label>
            <input name="userName" onChange={(e) => handleChange(e)}></input>
            <label type="text" >Name:</label>
            <input name="name" onChange={(e) => handleChange(e)} ></input>
            <label type="text" >LastName:</label>
            <input name="lastName" onChange={(e) => handleChange(e)} ></input>
            <label type="text" >Mail:</label>
            <input name="mail" onChange={(e) => handleChange(e)} ></input>
            <label>Profile Photo:</label>
            <input name="image" type="file"></input>
            <label>password:</label>
            <input name="password" type="text"  onChange={(e) => handleChange(e)}></input>
            <label>address:</label>
            <input name="address" type="text"  onChange={(e) => handleChange(e)}></input>
            <button type="submit" className='buttonFormRegister'> REGISTER </button>

        </form>
    </div>
  )
}

export default Register