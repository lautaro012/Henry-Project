
const axios = require("axios")
const {API_KEY} = process.env;
/*
{
            name: data.name,
            description: data.description,
            image: data.background_image,
            realeaseDate: data.released,
            rating: data.rating,
            website: data.website,
            alternativeGames: data.alternative_games
        
        }

*/

function getGameInfo(data) {
    return{
        name: data.name,
        description: data.description,
        image: data.background_image,
        realeaseDate: data.released,
        rating: data.rating,
        website: data.website,
        alternativeGames: data.alternative_games
    }
}

const findGameById = async (req, res) => {
    let {gameId} = req.params
    let gameInfo = [];
    if (gameId) {
        const info = await axios(`https://api.rawg.io/api/games/${gameId}?key=${API_KEY}`)
        let data = info.data
        gameInfo.push(getGameInfo(data))
        return res.send(gameInfo)        // console.log(gameInfo)
    }
    return res.json({err: `No se pudo encontrar el detalle del videojuego`})
}

module.exports = {
    findGameById
}