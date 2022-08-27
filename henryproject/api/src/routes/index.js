const { Router } = require('express');
// Importar todos los routers;
const videogameRouter = require("./routervideogames");
const genresRouter=require("./routerGenre.js");
const plataformsRouter=require("./routerPlataform.js");
const filterRoute =require('./routerFilters.js');
const tagsRoute = require('./routerTags')
const authRoute = require('./routerAuth')
const userRouter = require('./routerNewUser')
const checkoutRouter=require("./routerCheckout");
const router = Router();


// Configurar los routers

router.use("/videogames", videogameRouter)
router.use("/genres",genresRouter)
router.use("/plataforms",plataformsRouter);
router.use("/filter",filterRoute);
router.use("/tags", tagsRoute);
router.use("/newUser", userRouter)
router.use('/checkout', checkoutRouter)



router.use("/auth", authRoute)

module.exports = router;
