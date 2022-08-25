const {Router} = require ('express');
const { createNewUser } = require('../handlers/postNewUser');

const router = Router();

router.post('/', createNewUser)
 
module.exports = router