const { Router } = require("express")
const { Platforms } = require("../db")
// const { getAllVideogamesApiAndDB } = require("../handlers/convineAllVideogames")
const { getAllVideoGames, getVideogamesByName, getVideogamesByGenre, getVideogamesByPlatforms, getVideogamesByTag } = require("../handlers/getAllVideoGames")
const { findGameById } = require("../handlers/getGamesDetail")
// const { getVideogamesApi } = require("../handlers/getVideoGamesApi")
const { createNewGame } = require("../handlers/postNewGame")
// const { getVideogames } = require("../handlers/routeGetVideogamesApi")

const router = Router()

router.get("/", async(req,res)=>{
    try{
        const {name,genre,platform,tag}=req.query;
        if(name){
            return res.status(200).json(await getVideogamesByName(name));
         }else if(genre){
            return res.status(200).json(await getVideogamesByGenre(genre));
         }else if(platform){
            return res.status(200).json(await getVideogamesByPlatforms(platform));
         }else if(tag){
            return res.status(200).json(await getVideogamesByTag(tag));
         }
        else{
            return res.status(200).json(await getAllVideoGames());
        }
    }catch(error){
        return res.status(404).send(error.message);
    }
    
})
// router.get("/:gameId", findGameById)
// router.post("/", createNewGame)

module.exports = router