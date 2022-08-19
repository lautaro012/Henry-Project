const {Games} = require('../db')

const createNewGame = async (req, res) => {
    let { name, price, description, rating, createdInDb, videoTrailer } = req.body;

    if (!name || !price || !description) return res.status(404).send("Falta enviar datos obligatorios")
    try {
        let gameCreated = await Games.create({
            name,
            price,
            description,
            rating,
            createdInDb,
            videoTrailer
        })

        res.send(gameCreated)

    } catch (error) {
        return res.status(404).send("Error en alguno de los datos provistos")
    }
}

module.exports = {
    createNewGame
}
  