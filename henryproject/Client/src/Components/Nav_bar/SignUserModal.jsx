import React, { useState } from "react";
import './SignUserModal.css'
import User from '../../Style/Imagenes/User.jpg'
import Modal from "react-modal";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { signin } from "../../redux/Actions/Index";


<<<<<<< HEAD
export default function UserSign({toggleModal, isOpen, setUserLogged }) {
=======
export default function UserSign({toggleModal, isOpen, userLogged, setUserLogged}) {
>>>>>>> Development

    let dispatch = useDispatch()
    const [input, setInput] = useState({
        mail: '',
        password: ''
    })

    function handleClick(e) {
        // e.preventDefault()
        window.open("http://localhost:3001/auth/google", "_self")
    }

    Modal.setAppElement("#root");

    function handleChange(e) {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
        // setErrors(validate({
        //     ...input,
        //     [e.target.name] : e.target.value
        // }))
    }


    function handleSubmit(e) {
        e.preventDefault()
        dispatch(signin(input));
        setInput({
        mail: '',
        password: ''
        })

        console.log('logueado con', input)
        setUserLogged(true)
    }

  return (
    <div>

      <Modal
        isOpen={isOpen}
        onRequestClose={toggleModal}
        contentlabel="My dialog"
        className="mymodal"
        overlayClassName="myoverlay"
        closeTimeoutMS={500}
      >
        <div className="modal-welcome">
          <img src={User} alt="User" />
                Bienvenido
        </div>
        <div>
            <form className="form-modal" onSubmit={handleSubmit}>
                <label> E-Mail:</label>
                <input onChange={handleChange} type="mail" id="mail" name='mail'></input>
                <label>Password:</label>   
                <input onChange={handleChange} type="password" id="password" name='password'></input>
                <button type="submit" onClick={toggleModal}> Loggin </button>
            </form>
        </div>
   
        <button onClick={(e) => handleClick(e)} className='login-with-google-btn' >Ingresar con cuenta de Google</button>
        Are you new ? <Link to='/register' onClick={toggleModal}> Register free now ! </Link>

      </Modal>

    </div>
  );
}