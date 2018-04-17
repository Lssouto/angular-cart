const data = require('../model/data')
// const jwt = require('jsonwebtoken')
// const config = require('../config')

// function jwtSignUser (user){
//     const ONE_WEEK = 60*60*24*7
//     return jwt.sign(user, config.data.authentication.jwtSecret,{
//         expiresIn:ONE_WEEK
//     })
// }

const _verify = (value)=>{

    let user = (data.usuarios).find(function(pos){
        return pos.login == value.login
    })
    if(user == undefined || user == null) 
        return false;
    return {
        status: user.password === value.password,
        user: user
    }
    
}

module.exports = { 
    login : (req,res) => {
        try {
            let verifyResult = _verify(req.body) 
            if(verifyResult.status)
                res.send({
                    status: true,
                    msg: "Login Realizado" ,  
                    user: verifyResult.user.user
                })
            else
                res.send({
                    status: false,
                    msg: "Login Incorreto" ,  
                    user: req.body
                })
        } catch (e) {
            res.status(500).send("Ocorreu um erro ao tentar logar: " + e)
        }
    }
}
