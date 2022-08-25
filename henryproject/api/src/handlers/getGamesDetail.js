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




// /*
// {
//             name: data.name,
//             description: data.description,
//             image: data.background_image,
//             realeaseDate: data.released,
//             rating: data.rating,
//             website: data.website,
//             alternativeGames: data.alternative_games
        
//         }

// */

// function getGameInfo(data, datita, videito, screens) {
//     return{
//         name: data.name,
//         description: data.description,
//         metacritic:data.metacritic,
//         stores:data.stores.map((e)=>e.store.name),
//         developers:data.developers.map((e)=>e.name),
//         genres:data.genres.map((e)=>e.name),
//         tags:data.tags.map((e)=>e.name),
//         publishers:data.publishers,
//         esrb_rating:data.esrb_rating,
//         image: data.background_image,
//         realeaseDate: data.released,
//         rating: data.rating,
//         ratingMoreInfo: data.ratings,
//         platforms: data.platforms,
//         website: data.website,
//         series: datita.results.map((e) => [{id: e.id, name: e.name, released: e.released, image: e.background_image}]),
//         videos: videito.results===[]?videito.results.map((e) => e.data.max):videito.results,
//         // videos: console.log(videito.results===[]?videito.results:"asd"),
//         screenshots: screens.results.map((e) => e.image)   
//         }
// }

// const findGameById = async (req, res) => {
//     let {gameId} = req.params
//     let gameInfo = [];
//     if (gameId) {
//         const info = await axios(`https://api.rawg.io/api/games/${gameId}?key=${API_KEY}`)
//         const infoDos = await axios(`https://api.rawg.io/api/games/${gameId}/game-series?key=${API_KEY}`)
//         const infoVideo = await axios(`https://api.rawg.io/api/games/${gameId}/movies?key=${API_KEY}`)
//         const infoScreens = await axios(`https://api.rawg.io/api/games/${gameId}/screenshots?key=${API_KEY}`)
//         const screens = infoScreens.data
//         const videito = infoVideo.data
//         const datita = infoDos.data
//         let data = info.data
//         gameInfo.push(getGameInfo(data, datita, videito, screens))
//         return res.send(gameInfo)        

//         // console.log(gameInfo)
//     }
//     return res.json({err: `No se pudo encontrar el detalle del videojuego`})
// }

module.exports = {
    findGameById
}