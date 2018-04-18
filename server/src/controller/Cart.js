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
            let cart = null;
            let existUserCart = false;
            const idUser = req.params.id;

            if(model.cartList.length)
                 existUserCart = (model.cartList).find(cart =>{
                    return cart.idUser == idUser;
                });

            if(existUserCart){
                cart = existUserCart;
            }
            else{
                cart = new model.Cart( model.cartList.length, idUser );
            }
            
            const item = (model.items).find(item =>{
                return req.body.itemId == item.id
            });
            
            cart.addItem(item)

            if(existUserCart){
                model.cartList.splice(
                    existUserCart.id-1,
                    1,
                    cart
                );
            }
            else{
                model.cartList.push(cart);
            }
            
            res.send({
                status: true,
                data: null,
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
            const idUser = req.params.id
            let userCart;
            
            if(model.cartList.length)
                userCart = (model.cartList).find(cart =>{
                    return cart.idUser == idUser;
                });
            else{
                throw 'Carrinho Inexistente';
            }

            res.send({
                status: true,
                data: userCart,
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