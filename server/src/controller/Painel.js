const model = require('../model/data')

module.exports = {
    getTransactions(req,res){
        try{
            res.send({
                status: true,
                data: model.transactions,
                msg: 'Realizado!!'
            })
        }catch(e){
            res.send({
                status : false,
                error : e + ''
            })
        }
    }
}