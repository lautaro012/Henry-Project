const {Router} = require ('express');
const { createNewUser } = require('../handlers/postNewUser');
const { getUsers } = require('../handlers/getUsers');
const { singUp } = require('../handlers/authHandler');
const { putUser } = require("../handlers/putUser")
const { deleteUser } = require("../handlers/deleteUser")
const router = Router();

router.post('/', singUp)
router.get("/",async(req,res)=>{
    return res.status(200).json(await getUsers());
})
router.put("/:id_name", putUser)
router.delete("/:id_name", deleteUser)

module.exports = router