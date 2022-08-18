const { getVideogamesApi } = require("./getVideoGamesApi")

const getVideogames = async (req, res, next) => {
    try {
        videogameAPI = await getVideogamesApi()
        return res.status(200).json(videogameAPI)
    }
    catch(err) {
        next(err)
    }
}

module.exports = {
    getVideogames
}