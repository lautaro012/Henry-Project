const Stripe = require("stripe");
const {KEY_CHECK}=require("../db.js");

const stripe=new Stripe(KEY_CHECK);

const checkout=async(id,amount)=>{
      const payment = await stripe.paymentIntents.create({
        amount,
        currency: "USD", //la moneda
        description: "Gaming Keyboard", //descripcion de producto
        payment_method: id, //id del fronted
        confirm: true, //confirm the payment at the same time
      });
      console.log(payment);
      return { message: "Successful Payment" }
}

module.exports=checkout;