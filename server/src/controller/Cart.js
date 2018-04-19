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
    },
    delete : (req,res)=>{
        try{
            const idUser = req.params.id;
            const userIndex = (model.cartList).findIndex(cart=>{
                return cart.idUser == idUser;
            })

            const removedCart = model.cartList.splice(userIndex,1);

            res.send({
                status: true,
                data: removedCart,
                msg: 'Mensagem Removida com sucesso'

            })
        }
        catch(e){
            res.send({
                status: false,
                error: '' + e 
            })   
        }
    },
    deleteItem : (req,res)=>{
        try{
            const idUser = req.params.idUser;
            const idItem = req.params.idItem;
            
            const userCartIndex = (model.cartList).findIndex(cart=>{
                return cart.idUser == idUser;
            });

            const itemIndex = (model.cartList[userCartIndex]['items']).findIndex(item => {
                return item.id == idItem;
            })

            const removedItem = model.cartList[userCartIndex]['items'].splice(itemIndex,1)

            res.send({
                status: true,
                data: itemIndex,
                msg: 'Item removido com sucesso.'
            });

        }catch(e){
            res.send({
                status: false,
                error: '' + e
            })
        }
    }
}