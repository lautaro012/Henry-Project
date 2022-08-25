const axios = require("axios");
const { Games } = require("../db");
const {API_KEY} = process.env;

const findGameById = async (req, res) => {
    const {gameId} = req.params;
   try {
    const game = await Games.findByPk(gameId)
    if(!game){
        return res.json({err: `No se pudo encontrar el detalle del videojuego`})
    }else{
        return res.send(game)  
    }
   } catch (error) {
     console.log('error en requerir juegos por id',error)
   }
    
}


module.exports = {
    findGameById
}