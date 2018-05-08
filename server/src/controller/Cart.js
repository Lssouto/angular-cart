const model = require('../model/data')

const findUserCart = id =>{
    try {
        let userCartList,userCart;

        if(model.cartList.length)
            userCartList = (model.cartList).filter(cart =>{
                return cart.idUser == id;
            });
        else{
            throw 'Carrinho Inexistente';
        }

        userCart = userCartList.find(cart=>{
            return cart.status == 'open'
        });

        return userCart;    
    }catch(e){
        return null;    
    }
    
}

module.exports = {
    get: (req,res)=>{
        try{
            const idUser = req.params.id;
            
            const userCart = findUserCart(idUser)
            
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

            const userCart = findUserCart(idUser);

            const removedCart = (userCart.updateStatus('cancel'));

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
    pay(req,res){
        try{
            const idUser = req.params.id;
            
            const userCart = findUserCart(idUser);
            
            userCart.updateStatus('finish');

            res.send({
                status: true,
                msg: 'Pagamento realizado.'
            })
        }catch(e){
            res.send({
                status: false,
                error : '' + e
            })
        }
    },
    addItem: (req,res) =>{
        try{
            let cart = null;
            const idUser = req.params.id;

            cart = findUserCart(idUser);

            if(!cart){
                cart = new model.Cart( model.cartList.length, idUser );
            }
            
            const item = (model.items).find(item =>{
                return req.body.itemId == item.id
            });
            
            item['qtd'] = parseInt(req.body.itemQtd)

            cart.addItem(item)

            if(cart){
                model.cartList.splice(
                    cart.id-1,
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