import React from "react";
import {CardElement,useStripe,useElements} from "@stripe/react-stripe-js";
import axios from "axios";
import './formularioPago.css';
import Cart from "../Cart/Cart";
import { useState } from "react";

export const FormularioPago=()=>{
    // const elements=useElements();
    const stripe=useStripe();
    const elements=useElements();

  


    //AGREGAMOS LA FUNCION
    async function handleSubmit (e){
        e.preventDefault();

        const {error,paymentMethod}= await stripe.createPaymentMethod({ //Tieme objetos que debe de completar
            type:"card",  //type de pago: metodo de tarjeta
            card: elements.getElement(CardElement) //Selecciona el input element de la tarjeta
          });
          console.log(paymentMethod);

          if(!error){
            const {id}=paymentMethod
            try {
                const data=await axios.post("http://localhost:3001/checkout",{
                  id,
                  amount: 10000
                })
                console.log(data);
                alert("Se ah pagado con exito")
              
            } catch (error) {
              alert("Error al Pagar")
            }
          }

    }

    return(
        <div className="container">
            <h2 className="tituloTarjeta">Metodo de Pago : Tarjeta de Crédito o Débito</h2>
            <p className="pTarjeta">Monto Total a Pagar: $ </p>
            {/* <Cart/> */}
            <div className="cardTarjeta">
            <CardElement className="cardElement"/>
            </div>
            <div className="subcontainerPagar">
                <button onClick={(e)=>handleSubmit(e)} className="ButtonPagar">PAGAR</button>
            </div>
        </div>
    )
}