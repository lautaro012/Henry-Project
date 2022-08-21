const {Router} = require('express');
<<<<<<< HEAD
=======
// const filterGenres = require('../handlers/filterGenres');
>>>>>>> Development
const filterRating = require('../handlers/filterRating');
const router = Router();

router.get('/rating/:rating', filterRating);
<<<<<<< HEAD

=======
// router.get('/genres/:genre', filterGenres);
// router.get("/genres", filterGenres)
>>>>>>> Development
module.exports=router;