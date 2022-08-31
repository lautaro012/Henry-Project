const { Users } = require("../db");

const putUser = async (req, res) => {
    let { id_name } = req.params
    let { name, lastName, password, mail, address, admin, userName, image } = req.body
    try {
        let response = await Users.update(
            { name, lastName, password, mail, address, admin, userName, image }, 
            { where: {id_name}
        })
        return res.status(200).json(response)
    } catch(err) {
        console.log(err)
    }
}

module.exports = {
    putUser
}