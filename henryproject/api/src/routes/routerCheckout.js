const {Router} = require('express');
const checkout = require('../handlers/checkout');

const router = Router();
router.post("/", async(req,res)=>{
    try {
        const {id,amount}=req.body;
        return res.status(200).json(await checkout(id,amount));
    } catch (error) {
        return res.status(404).json({ message: error.raw.message });
    }
});

module.exports=router;
