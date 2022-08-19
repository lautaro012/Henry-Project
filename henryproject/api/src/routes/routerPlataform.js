const { Router } = require("express")
const { getAllPlataforms } = require("../controllers/controllerPlataforms.js");

const router = Router();

router.get("/",async(req,res)=>{
    return res.status(200).json(await getAllPlataforms());
})

module.exports=router;