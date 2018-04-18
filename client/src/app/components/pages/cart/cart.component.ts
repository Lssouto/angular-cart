import { Component, OnInit } from '@angular/core';
import { CartService } from '../../../services/cart/cart.service';
import { Simple } from '../../../interfaces/items/simple';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  items : Array<Simple>;
  idCart : Number;
  orderBy: String;

  constructor(private cartService : CartService) {
    this.items = [];  
  }

   async ngOnInit() {
    await this.cartService.get( response =>{
      console.log(response)
      this.idCart = response.data.idCart
      this.items = response.data.items;
    });
  }

  changeOrder() : void{
    console.log(123)
  }
}
