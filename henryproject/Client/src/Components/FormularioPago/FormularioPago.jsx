import React from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import axios from "axios";
import './formularioPago.css';
import Cart from "../Cart/Cart";
import { useState } from "react";

import { useNavigate } from "react-router-dom";

import { useDispatch } from "react-redux";
import { deleteItemFromCart } from "../../redux/Actions/Index";

const {
  REACT_APP_API
} = process.env;




export const FormularioPago = () => {
  // const elements=useElements();
  // const dispatch = useDispatch()
  const stripe = useStripe();
  const elements = useElements();
  const [loading, setLoading] = useState(false)


  const precioTotal = JSON.parse(localStorage.getItem("precioTotal"));
  const items = JSON.parse(localStorage.getItem("products"))
  // const user = JSON.parse(localStorage.getItem("user"))
  // const mail = user.user.emails[0].value

  // console.log(user.user.emails[0].value)

  // function eliminarDelCart(e) {
  //   console.log(e.target.value)

  //   dispatch(deleteItemFromCart(e.target.value))
  // }

  // console.log(precioTotal);
  let history = useNavigate();
  const handleRegresar = () => {

    history("/cart")
  }

  // function onChangecard(ev){
  //   console.log(ev.target.value)
  // //   setState({...state,name:e.target.value})
  // // console.log(state.name);

  // }

  //AGREGAMOS LA FUNCION
  async function handleSubmit(e) {
    e.preventDefault();


    const { error, paymentMethod } = await stripe.createPaymentMethod({ //Tieme objetos que debe de completar
      type: "card",  //type de pago: metodo de tarjeta
      card: elements.getElement(CardElement) //Selecciona el input element de la tarjeta
    });
    setLoading(true)
    console.log(paymentMethod);

    if (!error) {
      const { id } = paymentMethod
      try {

        const { data } = await axios.post(`/checkout`, {

          id,
          amount: precioTotal,

        })
        console.log(data);
        alert(`You have pay $ ${precioTotal} successfully`)
        // localStorage.setItem("precioTotal", JSON.stringify(precios));
        history("/")

      } catch (error) {
        alert(error)
      }
      setLoading(false)
    }
  }



  return (
    <div className="container">

      <div>
        {items && items.length ? items.map(game => {
          return (
            <div key={game.id}>
              <h3 style={{ color: "white" }}>{game.name}</h3>
              <img src={game.image} alt="imagen del juego" width="250" />
              {/* <button onClick={(e) => eliminarDelCart(e)} value={game.id}>X</button> */}
            </div>
          )
        }) : <div>no tiene elementos seleccionados</div>}
      </div>
      <hr />
      <h2 className="tituloTarjeta">Metodo de Pago : Tarjeta de Crédito o Débito</h2>
      <p className="pTarjeta">Monto Total a Pagar: ${precioTotal}</p>
      <div className="cardTarjeta">
        <CardElement className="cardElement" />
      </div>
      <div className="subcontainerPagar">
        <button onClick={(e) => handleRegresar(e)} className="ButtonPagar">Regresar</button>
        <button onClick={(e) => handleSubmit(e)} className="ButtonPagar" disabled={loading ? true : false}>
          {loading ? <p>CARGANDO</p> : <p>PAGAR</p>}
        </button>
      </div>
    </div>
  )

}