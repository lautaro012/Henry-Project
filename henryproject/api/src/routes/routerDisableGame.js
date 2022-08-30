const {Router} = require('express');
const { Games } = require('../db');
const router = Router();


router.put('/:id', async (req, res) => {
    try{
        const {id} = req.params
        const disableGame = await Games.update(
        {disabled: true},
        {where: {
            id: id
        }}
        )
        if(disableGame) {
            res.send(disableGame)
        } else {
            res.json({err: 'error'})
        }
    } catch(err) {
        console.log(err)
    }
    
} )



module.exports=router;