const { Router } = require('express');
// Importar todos los routers;
const videogameRouter = require("./videogames");
const genresRouter=require("./routerGenre.js");
const plataformsRouter=require("./routerPlataform.js");

const router = Router();

// Configurar los routers

router.use("/videogames", videogameRouter)
router.use("/genres",genresRouter)
router.use("/plataforms",plataformsRouter);

module.exports = router;
