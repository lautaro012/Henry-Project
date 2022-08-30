import React from "react";
import User from '../../Style/Imagenes/User.jpg'
import './UserPop.css'
import { Link } from "react-router-dom";
import { Modal, ModalHeader, ModalBody, ModalFooter, FormGroup, Input, Label } from 'reactstrap'
const {
    REACT_APP_API
  } = process.env;


export default function Pop({ modal, setModal }) {

    function handleClick(e) {
        // e.preventDefault()
        window.open(`${REACT_APP_API}/auth/google`, "_self")

    }

    function handleLinkClick(e) {
        setModal(false)
    }

    const toggle = () => setModal(false);

    return (
        <Modal isOpen={modal} fade={true} toggle={toggle} className="UserPop">
            <ModalHeader toggle={toggle}>
                <img src={User} alt="User" />
                Bienvenido
            </ModalHeader>
            <ModalBody>
                <FormGroup>
                    <Label>Usuario</Label>
                    <Input type="text" id="Usuario"></Input>
                </FormGroup>
                <FormGroup>
                    <Label>Contraseña</Label>
                    <Input type="password" id="Pass"></Input>
                </FormGroup>
            </ModalBody>
            <ModalFooter className="MODAL-FOOTER">
                <button toggle={toggle}>Iniciar sesion</button>
            </ModalFooter>
            <ModalFooter className="MODAL-FOOTER">
                <button onClick={(e) => handleClick(e)} className='login-with-google-btn' >Ingresar con cuenta de Google</button>
            </ModalFooter>
            <ModalFooter>
                Are you new ? <Link to='/register' onClick={(e) => handleLinkClick(e)} toggle={toggle}> Register free now ! </Link>
            </ModalFooter>
        </Modal>
    )
}