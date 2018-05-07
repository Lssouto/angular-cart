import { Component, OnInit } from '@angular/core';
import { CartService } from '../../../services/cart/cart.service';
import { Simple } from '../../../interfaces/items/simple';
import swal from 'sweetalert2';


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
    this.cartService.pay(response=>{
      if(response.status){
        swal({
          title: '<h2>Pagamento Realizado</h2>',
          type: 'success',
          confirmButtonText:
          'Finalizar'
        })
        this.items = [];
      }
      else
        swal({
          title: '<h2>Ocorreu um erro</h2>',
          type: 'error',
          confirmButtonText:
          'Finalizar'
        })
    })
  }

  cleanCart(){
    swal({
      title: '<h2>Deseja remover todos os produtos?</h2>',
      text: "A ação não poderá ser revertida.",
      type: 'warning',
      confirmButtonText:
      'Remover',
      showCancelButton: true,
      cancelButtonText: 
      'Cancelar'
    }).then(async result =>{
      if(result.value)
      await this.cartService.clean(response=>{
        if(response.status){
          this.items = [];
        }
      })
    })
  }
  
  deleteOne(idItem,event){
    swal({
      title: '<h2>Deseja remover o item?</h2>',
      text: "O item será removido do seu carrinho!",
      type: 'warning',
      confirmButtonText:
      'Remover',
      showCancelButton: true,
      cancelButtonText: 
      'Cancelar'
    }).then(async result =>{
      if(result.value)
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
    })
  }

}
