const {Router} = require ('express');
const { createNewUser } = require('../handlers/postNewUser');
const { getUsers } = require('../handlers/getUsers');
const { singUp } = require('../handlers/authHandler');
const router = Router();

router.post('/', singUp)
router.get("/",async(req,res)=>{
    return res.status(200).json(await getUsers());
})
module.exports = router