const model = require('../model/data')

module.exports = {
    clean: (req,res)=>{
        const idUser = req.params.id;
        const UserCart = (model.cartList).find(cartItem =>{
            return idUser == cartItem.idUser
        })
    },
    addItem: (req,res) =>{
        try{
            const idUser = req.params.id;
            console.log(req.params.id)
            const newCart = new model.Cart(0,idUser);

            const item = (model.items).find(item =>{
                return req.body.itemId == item.id
            });
            
            newCart.addItem(item)

            model.cartList.push(newCart);

            res.send({
                status: true,
                data: model.cartList,
                msg: "Adicionado"
            })
        }catch(e){
            res.send({
                status: false,
                data: null,
                msg: "" + e
            })
        }
    },
    get: (req,res)=>{
        try{
            // const idUser = req.params.id
            // const cart = (model.cartList).find(cart=>{
            //     return idUser == cart.id
            // });
            res.send({
                status: true,
                data: model.cartList,
                msg: "Adicionado"
            })
        }catch(e){
            res.send({
                status: false,
                data: null,
                msg: "" + e
            })
        }
    }
}