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
      if(response.data){
        this.idCart = response.data.idCart
        this.items = response.data.items;
      }
    });
  }

  changeOrder() : void{
    console.log(123)
  }

  payment(){

  }

  async cleanCart(){
    await this.cartService.clean(response=>{
      if(response.status){
        this.items = [];
      }
    })
  }
  
  async deleteOne(idItem,event){
    
    await this.cartService.deleteItem(idItem, response=>{
      if(response.status){
        const self = this;
        event.target.parentElement.classList.add('top-fade-out')
        setTimeout(function(){
          event.target.parentElement.classList.remove('top-fade-out')
          self.items.splice(response.data,1)
        },600)
      }
    })
  }

}
