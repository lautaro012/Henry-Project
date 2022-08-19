const { Router } = require("express")
const { getVideogames } = require("../handlers/routeGetVideogamesApi")

const router = Router()

router.get("/", getVideogames)

module.exports = router