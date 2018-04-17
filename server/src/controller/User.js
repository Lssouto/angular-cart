const data = require('../model/data')

const _verify = (value)=>{
    
    const user = (data.usuarios).find(function(pos){
        return pos.user == value.user
    })
    if(user == undefined || user == null) 
        return false;
    return {
        status: user.password === value.password,
        user: user
    }
}
const _findUserIndex = (value) =>{
    const index = (data.usuarios).findIndex(function(user){
        return user.id == value
    })
    return index;
}

module.exports = {
    create : (req,res)=>{
        try {
            const verifyStatus = _verify(req.body)
            
            if(!verifyStatus){
                req.body.id = ((data.usuarios[data.usuarios.length-1].id) + 1);
                (data.usuarios).push(req.body)
                res.send({
                    status: true,
                    msg: "Novo usuário Cadastrado",
                }) 
            }
            else{
                res.send({
                    status: false,
                    msg: "Usuário já cadastrado"
                })
            }
        } catch (e) {
            console.log(e)
            res.send({
                status: false,
                error: e + ""
            }) 
        }
    },
    read : (req,res)=>{
        try {
            const searchKey = req.query.searchKey
            if(searchKey){ 
                let user =  (data.usuarios).filter((user)=>{
                    return ((user.user).indexOf(searchKey) !== -1 || user.id == searchKey); 
                })
                res.send({
                    status: true,
                    values: user
                })
            }
            else{
                res.send({
                    status: true,
                    values: data.usuarios
                }) 
            }
        } catch (e) {
            res.send({
                status: false,
                error: e + ""
            })
        }
    },
    update : (req,res)=>{
        try {
            const position = _findUserIndex(req.params.id);
            if(position === -1)
                throw "Usuário não encontrado"
            
            data.usuarios[position] = req.body;
            
            res.send({
                status: true,
                msg: 'Usuário atualizado'
            })
        } catch (e) {
            res.send({
                status: false,
                error: e + ""
            })
        }
    },
    del : (req,res)=>{
        try {
            const position = _findUserIndex(req.params.id)
            
            if(position === -1)
                throw "Usuário não localizado"
                
            data.usuarios.splice(position,1)
            res.send({
                status: true,
                msg: "Usuário Removido"
            }) 
        } catch (e) {
            res.send({
                status: false,
                error: e + ""
            }) 
        }
    }
}