let _usuarios = [
        { id : 1, login: 'admin', password: 'admin'},
        { id : 2, login: 'lucas', password: '123'},
        { id : 3, login: 'diego', password: '123'},
        { id : 4, login: 'teste', password: '123'}
    ];
let _items = [
    {
        id: 1,
        title: 'Celular',
        image: "http://placehold.it/350x150/000000",
        price: 1000
    },
    {
        id: 2,
        title: 'Carro',
        image: "http://placehold.it/350x150/111111",
        price: 100000
    },
    {
        id: 3,
        title: 'Moto',
        image: "http://placehold.it/350x150/222222",
        price: 1000
    },
    {
        id: 4,
        title: 'Celular novo',
        image: "http://placehold.it/350x150/333333",
        price: 800
    },
    {
        id: 5,
        title: 'Casa',
        image: "http://placehold.it/350x150/444444",
        price: 125000
    },
    {
        id: 6,
        title: 'Celular 2',
        image: "http://placehold.it/350x150/555555",
        price: 1000
    },
    {
        id: 7,
        title: 'Carro 2',
        image: "http://placehold.it/350x150/666666",
        price: 100000
    },
    {
        id: 8,
        title: 'Moto 3',
        image: "http://placehold.it/350x150/777777",
        price: 1000
    },
    {
        id: 9,
        title: 'Celular novo',
        image: "http://placehold.it/350x150/121212",
        price: 800
    },
    {
        id: 10,
        title: 'Apartamento',
        image: "http://placehold.it/350x150/232323",
        price: 125000
    }

];
let _cartList = [];

//CartModel
class Cart {

    constructor(idCart,idUser){
        this.idCart = idCart;
        this.idUser = idUser;
        this.items = [];
    }

    addItem(array){
        this.items.push(array);
    }
}

//ItemModel
// class Item {
//     id;
//     title;
//     image = "http://placehold.it/350x150/";
//     price;
// }

module.exports = { 
    usuarios : _usuarios,
    items : _items,
    cartList: _cartList,
    Cart
};