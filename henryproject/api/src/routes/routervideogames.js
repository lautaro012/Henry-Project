const { Router } = require("express")
const { Platforms,Games } = require("../db")
// const { getAllVideogamesApiAndDB } = require("../handlers/convineAllVideogames")
const { llVideoGamesApi, getVideogamesByName, getVideogamesByGenre, getVideogamesByPlatforms, getVideogamesByTag, getAllVideoGames } = require("../handlers/getAllVideoGames")
// const { getVideoGamesDB } = require('../handlers/getGamesDB')
const { findGameById } = require("../handlers/getGamesDetail")
// const { getVideogamesApi } = require("../handlers/getVideoGamesApi")
const { createNewGame } = require("../handlers/postNewGame")

// const { getVideogames } = require("../handlers/routeGetVideogamesApi")


const router = Router()

router.get("/", async(req,res)=>{
    try{
        const {name,genres,platforms,tag}=req.query;
        if(name){
            return res.status(200).json(await getVideogamesByName(name));
         }else if(genres){
            return res.status(200).json(await getVideogamesByGenre(genres));
         }else if(platforms){
            return res.status(200).json(await getVideogamesByPlatforms(platforms));
         }
        else if(tag){
            return res.status(200).json(await getVideogamesByTag(tag));
         }
        else{
            return res.status(200).json(await getAllVideoGames());
        }
    }catch(error){
        return res.status(404).send(error.message);
    }
    
})
router.get("/:gameId", findGameById)
router.post("/", createNewGame)



router.get("/changename/:gameId?",async(req,res,next)=>{
    const{gameId}=req.query
    await Games.update({name:newName},{where:{id:gameId}})
    console.log(await Games.findByPk(gameId))
    res.send()
})
router.put("/updategame/:gameId",async(req,res,next)=>{
    const{gameId}=req.params
    const{name,price,description,rating,video,image,screenshoots,store,developers,publishers,website,releaseDate,metacritic,esrb_rating,createdInDb}=req.body
    await Games.update({name:name,price:price,description:description,rating:rating,video:video,image,image,screenshoots:screenshoots,store:store,developers:developers,publishers:publishers,website:website,releaseDate:releaseDate,metacritic:metacritic,esrb_rating:esrb_rating,createdInDb:createdInDb})
    res.send()
})

module.exports = router