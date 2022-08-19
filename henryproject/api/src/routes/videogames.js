const { Router } = require("express")
const { getAllVideoGames } = require("../handlers/getAllVideoGames")
const { createNewGame } = require("../handlers/postNewGame")
// const { getVideogames } = require("../handlers/routeGetVideogamesApi")

const router = Router()

router.get("/", getAllVideoGames)
router.post("/", createNewGame)

module.exports = router