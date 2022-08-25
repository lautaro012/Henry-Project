// const {Users} = require('../db')

// const createNewUser = async (req, res) => {
//     let { name, lastName, mail, adress, userName, image } = req.body;

//     if (!userName || !name || !lastName || !mail) return res.status(404).send("Falta enviar datos obligatorios")
//     try {
//         let newUser = await Users.create({
//             name,
//             lastName,
//             mail,
//             adress,
//             userName,
//             image
//         })

//         res.send(newUser)

//     } catch (error) {
//         return res.status(404).send("Error en alguno de los datos provistos")
//     }
// }



// module.exports = {
//     createNewUser
// }
  