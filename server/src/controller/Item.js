const model = require('../model/data');

module.exports = {
    read : (req,res)=>{
        try{
            res.send({
                status: true,
                data : model.items,
                msg: 'Items Ok'
            });
        }catch(e){
            res.send({
                status : false,
                error : ''+ e
            })
        }
    },
    readOne : (req,res)=>{
        try{
            const id = req.params.id;
            const item = (model.items).filter(item =>{
                return item.id == id;
            })
            if(item.length){
                res.send({
                    status: true,
                    data : item,
                    msg: 'Item Found'
                })
            }else{
                throw 'Item not Found';
            }
        }catch(e){
            res.send({
                status: false,
                error: '' + e 
            })
        }
    }
}