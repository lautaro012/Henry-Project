const {Router} = require('express');


const filterRating = require('../handlers/filterRating');
const router = Router();

router.get('/rating/:rating', filterRating);

module.exports=router;