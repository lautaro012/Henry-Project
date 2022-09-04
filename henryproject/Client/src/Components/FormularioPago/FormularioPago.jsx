import React from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import axios from "axios";
import './formularioPago.css';
import Cart from "../Cart/Cart";
import { useState } from "react";

import { useNavigate } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { deleteItemFromCart } from "../../redux/Actions/Index";
import { useEffect } from "react";
import CardHover from "../NewCard/CardHover";

const {
  REACT_APP_API
} = process.env;




export const FormularioPago = () => {
  // const elements=useElements();
   const dispatch = useDispatch()
  const stripe = useStripe();
  const elements = useElements();
  const [loading, setLoading] = useState(false)
  const cart = useSelector(state => state.cart)

  const precioTotal = JSON.parse(localStorage.getItem("precioTotal"));
  const items = JSON.parse(localStorage.getItem("products"))
  const user = JSON.parse(localStorage.getItem("user"))
  const mail = user.user.mail
  const userIdName = user.user.id_name

   const arr = [items.map(e => e.name)]

  // console.log(arr[0])


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
          amount: precioTotal*100,
          mail,
          arr,
          userIdName

        })
        console.log(data);
        alert(`You have pay $ ${precioTotal} successfully`)
        
        dispatch(deleteItemFromCart('All'))
        history("/")

      } catch (error) {
        alert(error)
      }
      setLoading(false)
    }
  }

  useEffect(() => {
    localStorage.setItem("products", JSON.stringify(cart))
  }, [cart])

  return (
      <div className="container">

        <div className="divElementsFromCartPayment">
          {items && items.length ? items.map(game => {
            return (
              <CardHover image={game.image} price={game.price} name={game.name}></CardHover>

            )
          }) : <div>no tiene elementos seleccionados</div>}
        </div>
        <hr />
        <span className="spanFormPayment">
            <h2 className="tituloTarjeta">Metodo de Pago : Tarjeta de Crédito o Débito</h2>
          <p className="pTarjeta">Monto Total a Pagar: ${precioTotal}</p>
          <div className="divFormPayment">
              <div className="cardTarjeta">
              <CardElement className="cardElement" />
            </div>
            <div className="subcontainerPagar">
              <button onClick={(e) => handleRegresar(e)} className="ButtonPagar">Regresar</button>
              <button onClick={(e) => handleSubmit(e)} className="ButtonPagar" disabled={loading ? true : false}>
                {loading ? "Cargando" : "Pagar"}
              </button>
            </div>
          </div>
        </span>
        
        
      </div>
  )

}