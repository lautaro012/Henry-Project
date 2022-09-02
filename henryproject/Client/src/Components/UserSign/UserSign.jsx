import React, { useState } from "react";
import './UserSign.css'
import Icon from '../../Style/Imagenes/Icon.PNG'
import Modal from "react-modal";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { signin } from "../../redux/Actions/Index";
const {
  REACT_APP_API
} = process.env;


export default function UserSign({toggleModal, isOpen, setUserLogged, changeModal}) {


    let dispatch = useDispatch()
    const [render, setRender] = useState('')
    const [input, setInput] = useState({
        mail: '',
        password: ''
    })

    function handleClick(e) {
        // e.preventDefault()
        window.open(`http://localhost:3001/auth/google`, "_self")
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
        setUserLogged(true)
        console.log('logueado con', input)
        setRender(render, 'hola')
        // window.location.reload()
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
        <img src={Icon} className='iconito-de-sergio' alt='iconito de Sergio'/>
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
        Are you new ?  <button onClick={changeModal}>Register free now ! </button>

      </Modal>

    </div>
  );
}