const { Router } = require("express")
const filterRating = require("../handlers/filterRating")
const { getAllVideoGames, getGamesByName } = require("../handlers/getAllVideoGames")
const { findGameById } = require("../handlers/getGamesDetail")
const { createNewGame } = require("../handlers/postNewGame")
// const { getVideogames } = require("../handlers/routeGetVideogamesApi")

const router = Router()

router.get("/", getGamesByName)
router.get("/:gameId", findGameById)
router.post("/", createNewGame)

module.exports = router