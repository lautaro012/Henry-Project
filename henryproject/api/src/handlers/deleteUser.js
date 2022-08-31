const { Users } = require("../db");

const deleteUser = async (req, res) => {
    let { id_name } = req.params
    try {
        await Users.destroy({
            where: {
                id
            }
        })
        return res.status(200).json("User deleted")
    } catch(err) {
        console.log(err)
    }
}

module.exports = {
    deleteUser
}