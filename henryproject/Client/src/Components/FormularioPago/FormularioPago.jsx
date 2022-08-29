import React from "react";
import {CardElement,useStripe,useElements} from "@stripe/react-stripe-js";
import axios from "axios";
import './formularioPago.css';
import Cart from "../Cart/Cart";
import { useState } from "react";
import {useNavigate  } from "react-router-dom";



export const FormularioPago=()=>{
    // const elements=useElements();
    const stripe=useStripe();
    const elements=useElements();
    // const [state,setState]=useState({
    //   card:false,
    //   // name:""
    // });

  
    const precioTotal = JSON.parse(localStorage.getItem("precioTotal"));
// console.log(precioTotal);
let history=useNavigate();
  const handleRegresar=()=>{
    history("/cart")
  }  

  // function onChangecard(ev){
  //   console.log(ev.target.value)
  // //   setState({...state,name:e.target.value})
  // // console.log(state.name);
    
  // }

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

    return(
        <div className="container">
            <h2 className="tituloTarjeta">Metodo de Pago : Tarjeta de Crédito o Débito</h2>
            <p className="pTarjeta">Monto Total a Pagar: ${precioTotal}</p>
            <div className="cardTarjeta">
            <CardElement className="cardElement"/>
            </div>
            <div className="subcontainerPagar">
              <button onClick={(e)=>handleRegresar(e)} className="ButtonPagar">Regresar</button>

                <button onClick={(e)=>handleSubmit(e)} className="ButtonPagar">PAGAR</button>
            </div>
        </div>
    )
}