const { getVideoGamesDB } = require("./getGamesDB")
const { getVideogamesApi } = require("./getVideoGamesApi")


const findGameById = async (req, res) => {
    let {gameId} = req.params

    let dbGames = await getVideoGamesDB()
    let apiGames = await getVideogamesApi()
    let allGames = [...dbGames, ...apiGames]
    if (gameId) {
        let searchByGameId = allGames.filter(e => e.id == gameId)
        return res.json(searchByGameId)
    }
    return res.json({err: `No se pudo encontrar el detalle del videojuego`})
}

module.exports = {
    findGameById
}