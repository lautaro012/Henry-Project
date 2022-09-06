const { Newsletter, Games } = require("../db")



const getMailsNewsLetter = async (req, res) => {
    try {
        let allMails = await Newsletter.findAll()
        res.send(allMails)
    }
    catch (err) {
        console.log(err)
    }
   
}

const sendNewsletter = async (req, res) => {
    let {mail} = req.body
    try{    
        let news = await Newsletter.findOrCreate({
            where: {
                mail: mail
            },
            defaults: {
                mail: mail
            }
        })
        res.send(news)
    } catch(err) {
        console.log(err)
    }
}



module.exports={
    getMailsNewsLetter,
    sendNewsletter
}