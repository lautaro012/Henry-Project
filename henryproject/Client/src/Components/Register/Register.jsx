import React from 'react'
import { useDispatch } from 'react-redux'
import "./Register.css"

const Register = () => {
    const dispatch= useDispatch()


  return (
    <div className='divFormRegister'>
        <form className='formRegister'>
            <label>UserName:</label>
            <input></input>
            <label>Name:</label>
            <input></input>
            <label>LastName:</label>
            <input></input>
            <label>Mail:</label>
            <input></input>
            <label>Profile Photo:</label>
            <input type="file"></input>
            <label>Adress:</label>
            <input></input>
            <button type='submit' className='buttonFormRegister'> REGISTER </button>

        </form>
    </div>
  )
}

export default Register