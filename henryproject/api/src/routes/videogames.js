const { Router } = require("express")
const { getAllVideoGames } = require("../handlers/getAllVideoGames")
const { findGameById } = require("../handlers/getGamesDetail")
const { createNewGame } = require("../handlers/postNewGame")
// const { getVideogames } = require("../handlers/routeGetVideogamesApi")

const router = Router()

router.get("/", getAllVideoGames)
router.get("/:gameId", findGameById)
router.post("/", createNewGame)

module.exports = router