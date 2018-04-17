export interface ISimple {
    title: String,
    price: Number,
    id: Number,
    image: String
}

export class Simple implements ISimple {

    title: String;
    price: Number;
    id: Number;
    image: String;

    constructor( title: String,price: Number, id: Number, image: String){
        this.title = title;
        this.price = price;
        this.id = id;
        this.image = image;

    }
}