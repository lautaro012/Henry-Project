const { Router } = require("express")
const { getAllGenres } = require("../controllers/controllerGenres.js");

const router = Router();

router.get("/",async(req,res)=>{
    return res.status(200).json(await getAllGenres());
})

module.exports=router;
