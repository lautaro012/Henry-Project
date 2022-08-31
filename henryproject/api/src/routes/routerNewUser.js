const {Router} = require ('express');
const { createNewUser } = require('../handlers/postNewUser');
const { getUsers } = require('../handlers/getUsers');
const { singUp } = require('../handlers/authHandler');
const { Users } = require('../db');
const router = Router();

// /newUser
router.post('/', singUp)
router.get("/",async(req,res)=>{
    return res.status(200).json(await getUsers());
})
router.put('/admin/:mail', async (req, res) => {
        try {
            const {mail} = req.params
            const setAdmin = await Users.update(
                {admin: true},
                {where:
                    {mail: mail}
                }
            )
            if(setAdmin) {
                console.log('user is admin')
                res.send(setAdmin)
            } else {
                res.json({err: 'error del admin'})
            }
        } catch (err) {
            console.log(`ERROR DEL CATCH: ${err}`)
        }
    
    
})

router.put('/noAdmin/:mail', async (req, res) => {
    try {
        const {mail} = req.params
        const disableAdmin = await Users.update(
            {admin: false},
            {where:
                {mail: mail}
            }
        )
        if(disableAdmin) {
            console.log('user is not admin')
            res.send(disableAdmin)
        } else {
            res.json({err: 'error del admin'})
        }
    } catch (err) {
        console.log(`ERROR DEL CATCH: ${err}`)
    }


})

module.exports = router