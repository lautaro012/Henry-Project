const { Users }= require('../db');

const getMails= async() => {
    console.log("hola")
    const users= await Users.findAll()
    console.log(users)
//    try {
//     const users= await Users.findAll();
//     console.log(users)
//     return users;
    
//     } catch (error) {
//         console.log('error en traer usuarios',error)
//     }
}
module.exports= getMails