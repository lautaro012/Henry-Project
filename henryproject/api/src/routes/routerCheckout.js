const {Router} = require('express');
const { default: Stripe } = require('stripe');
const { Orders, Games } = require('../db');
// const { Orders } = require('../db');
const {KEY_CHECK}= process.env;

const stripe= new Stripe(KEY_CHECK);

const router = Router();
router.post("/", async(req,res)=>{
    try {
        const {id,amount, mail, arr, userIdName}=req.body;
        
            const payment = await stripe.paymentIntents.create({
            amount: amount,
            receipt_email: mail,
            currency: "USD", //la moneda
            description: "Videogames", //descripcion de producto
            payment_method: id, //id del fronted
            confirm: true, //confirm the payment at the same time
            receipt_email:'lautaro0121@gmail.com'
            });
            console.log(payment)
            try {
                let order =  await Orders.create({
                id_Orders: id,
                payment: 'card',
                subTotal: amount/100,
                paid: true,
                userMail: mail,
                userIdName: userIdName
                })
                
                let games = await Games.findAll({where: {name: (arr.flat())}})
                await order.addGames(games);
                // console.log(games);
                console.log(order);
            } catch(err) {console.log(err)}
           
        
         res.status(200).json({message: "Successful Payment"});
            
    } catch (error) {
        return res.status(404).json(error.raw.message);
    }
});

module.exports=router;
