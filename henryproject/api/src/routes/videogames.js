const { Router } = require("express")
const { getAllVideoGames } = require("../handlers/getAllVideoGames")
// const { getVideogames } = require("../handlers/routeGetVideogamesApi")

const router = Router()

router.get("/", getAllVideoGames)

module.exports = router