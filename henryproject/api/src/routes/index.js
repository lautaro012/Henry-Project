const { Router } = require('express');
// Importar todos los routers;
const videogameRouter = require("./routervideogames");
const genresRouter=require("./routerGenre.js");
const plataformsRouter=require("./routerPlataform.js");
const filterRoute =require('./routerFilters.js');
const tagsRoute = require('./routerTags')
const router = Router();

// Configurar los routers

router.use("/videogames", videogameRouter)
router.use("/genres",genresRouter)
router.use("/plataforms",plataformsRouter);
router.use("/filter",filterRoute);
router.use("/tags", tagsRoute);
module.exports = router;
