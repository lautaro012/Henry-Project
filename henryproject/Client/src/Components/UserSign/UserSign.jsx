import React, { useState } from "react";
import './UserSign.css'
import Icon from '../../Style/Imagenes/Icon.PNG'
import Modal from "react-modal";
import axios from 'axios'
import { useDispatch } from "react-redux";
const {
  REACT_APP_API
} = process.env;


export default function UserSign({toggleModal, isOpen, setUserLogged, changeModal}) {


    let dispatch = useDispatch()
    const [render, setRender] = useState('')
    const[loading, setLoading] = useState(false)
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
        setLoading(true)
          axios.post(`/login`, input)
          .then(resp => resp.data)
          .then(resp => {
              setUserLogged(true)
              console.log('logueado con', input)
              localStorage.setItem('user', JSON.stringify(resp))
              window.location.reload()
              setInput({
              mail: '',
              password: ''
              })    
              toggleModal()
              setLoading(false)
          })
          .catch(error => {
            alert(error.response.data.msg ? error.response.data.msg : error.response.data)
            console.log('el error fue', error.response)
            setLoading(false)
          })
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
                <input onChange={handleChange} type="password" id="password" name='password' autocomplete="off" ></input>
                {loading ? <button type="submit" disabled={true} > Loading.. </button> : <button type="submit"> Loggin </button>}
                {/* <button type="submit"> Loggin </button> */}
            </form>
        </div>
        
        <button onClick={(e) => handleClick(e)} className='login-with-google-btn' >Ingresar con cuenta de Google</button>
        Are you new ?  <button onClick={changeModal}>Register free now !</button>

      </Modal>

    </div>
  );
}