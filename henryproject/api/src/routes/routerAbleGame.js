const {Router} = require('express');
const { Games } = require('../db');
const router = Router();


router.put('/:id', async (req, res) => {
    try{
        const {id} = req.params
        const ableGame = await Games.update(
        {disabled: false},
        {where: {
            id: id
        }}
        )
        if(ableGame) {
            res.send(ableGame)
        } else {
            res.json({err: 'error'})
        }
    } catch(err) {
        console.log(err)
    }
    
} )



module.exports=router;