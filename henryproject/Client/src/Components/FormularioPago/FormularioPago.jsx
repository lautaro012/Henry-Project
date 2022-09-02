import React from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import axios from "axios";
import './formularioPago.css';
import Cart from "../Cart/Cart";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const {
  REACT_APP_API
} = process.env;


export const FormularioPago = () => {
  // const elements=useElements();
  const stripe = useStripe();
  const elements = useElements();
  // const [state,setState]=useState({
  //   card:false,
  //   // name:""
  // });


  const precioTotal = JSON.parse(localStorage.getItem("precioTotal"));
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
    console.log(paymentMethod);

    if (!error) {
      const { id } = paymentMethod
      try {
        const data = await axios.post(`${REACT_APP_API}/checkout`, {
          id,
          amount: precioTotal,
        })
        console.log(data);
        alert(`You have pay $ ${precioTotal} successfully`)
        // localStorage.setItem("precioTotal", JSON.stringify(precios));
        history("/")

      } catch (error) {
        alert("Error in payment")
      }
    }


  }

  return (
    <div className="container">
      <h2 className="tituloTarjeta">Payment : Credit or debit card</h2>
      <div className="cardTarjeta">
        <CardElement className="cardElement" />
      </div>
      <p className="pTarjeta">Total to pay: ${precioTotal}</p>
      <div className="subcontainerPagar">
        <button onClick={(e) => handleRegresar(e)} className="ButtonPagar">Back</button>

        <button onClick={(e) => handleSubmit(e)} className="ButtonPagar">Buy</button>
      </div>
    </div>
  )
}