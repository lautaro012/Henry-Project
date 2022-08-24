const {Router} = require('express');
const router = Router();
const {Orders,Users,Games}=require("../db.js");

const randomstring = require("randomstring");

//SDK mercadopago
const mercadopago = require('mercadopago');
const { ACCESS_TOKEN_MP } = process.env;

//agrega credenciales
mercadopago.configure({
    access_token: ACCESS_TOKEN_MP
});

router.post("/",(req,res)=>{
    //cosas que deberia recibir por body
    const carrito = req.body
    const id_orden = carrito.map(e => e.id).join('-');
})