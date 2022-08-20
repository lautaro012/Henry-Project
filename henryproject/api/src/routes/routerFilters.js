const {Router} = require('express');
const filterGenres = require('../handlers/filterGenres');
const filterRating = require('../handlers/filterRating');
const router = Router();

router.get('/rating/:rating', filterRating);
// router.get('/genres/:genre', filterGenres);
router.get("/genres", filterGenres)
module.exports=router;