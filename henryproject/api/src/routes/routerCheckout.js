const {Router} = require('express');
const { default: Stripe } = require('stripe');
// const { Orders } = require('../db');
const {KEY_CHECK}= process.env;

const stripe= new Stripe(KEY_CHECK);

const router = Router();
router.post("/", async(req,res)=>{
    try {
        const {id,amount}=req.body;

        const payment = await stripe.paymentIntents.create({
            amount,
            currency: "USD", //la moneda
            description: "Videogames", //descripcion de producto
            payment_method: id, //id del fronted
            confirm: true //confirm the payment at the same time
          });
          console.log(`PAYMENT: ${payment}`);
         
         return res.status(200).json({message: "Successful Payment"});
    } catch (error) {
        return res.status(404).json({ message: error.raw.message });
    }
});

module.exports=router;
