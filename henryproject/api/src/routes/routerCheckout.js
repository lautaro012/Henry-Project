const {Router} = require('express');
const { default: Stripe } = require('stripe');
// const { Orders } = require('../db');
const {KEY_CHECK}= process.env;

const stripe= new Stripe(KEY_CHECK);

const router = Router();
router.post("/", async(req,res)=>{
    try {
        const {id,amount,games, mail}=req.body;
        //   const newOrder = await Orders.bulkCreate({
        //         payment: 'card',
        //         subtotal: 2546,
        //         paid: true
        //       })
        //   console.log(`NEW ORDER: ${newOrder}`)
        const payment = await stripe.paymentIntents.create({
            amount: amount,
            currency: "USD", //la moneda
            description: "Videogames", //descripcion de producto
            payment_method: id, //id del fronted
            confirm: true, //confirm the payment at the same time
          });
          console.log(payment)
         
         return res.status(200).json({message: "Successful Payment"});
    } catch (error) {
        return res.status(404).json(error.raw.message);
    }
});

module.exports=router;
