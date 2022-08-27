const {Users} = require('../db');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

function validateAttributes(name, lastName, userName, mail){
    if (!name || (typeof name !== "string") || (name.length < 0) ){
        return "The User Name must exist and must be a character string"
    } else if (!lastName || (typeof lastName !== "string") || (lastName.length < 0) ){
        return "The User Name must exist and must be a character string"
    } else if (!userName || (typeof userName !== "string") || (userName.length < 0) ){
        return "The User userName must exist and must be a character string"
    } else if (!mail || (typeof mail !== "string") || (mail.length < 0) ){
        return "The User mail must exist and must be a character string"
    } else {
        return true;
    }
}
const singUp = async (req, res) =>    {
    if(req.body.password !== undefined)  
        {
        try {
       
        
        let password = bcrypt.hashSync(req.body.password, 8);
        const { name, lastName, userName, mail, address, image} = req.body
        
        const validation = validateAttributes(name, lastName, userName, mail, address);
        if (validation === true) {
    
          const [newUser, created] = await Users.findOrCreate({
            where: {
              mail
            },
            defaults: {
              name,
              lastName,
              userName,
              address,
              password,
              image
            },
          })
          let token = jwt.sign({ user: newUser }, 'aaa', {
            expiresIn: Math.floor(Date.now() / 1000) + (60 * 60)
        });

         if (!created ) res.status(201).send('There is already a user with that mail') 
         else {
          res.json({newUser,token})
         }
  
        } else {
          return res.status(404).send(validation)
        }
      }
      catch (error) {
        console.log(error)
        res.status(500).json(error)
      }
    };
}

const singIn=async (req,res) => {
    let { mail, password} = req.body;
    try {
        const user = await Users.findOne({
            where: {mail : mail}
        }) 
        if(!user){
            res.send(404).json({ msg: "Usuario con este correo no se encuentra" })
        }else{

            if(bcrypt.compareSync(password,user.password)){
                let token = jwt.sign({ user: user }, 'aaa', {
                    expiresIn: Math.floor(Date.now() / 1000) + (60 * 60)
                });
                res.json({user: user,token: token})
            }else{
                res.status(401).json({msg: "Contrasenia incorrecta"})
            }
        }
    } catch (error) {
        console.log('Error en inciar sesion',error)
    }
    


}
//singUp --> registrar
module.exports = {singUp,singIn}
// module.exports = {singIn}