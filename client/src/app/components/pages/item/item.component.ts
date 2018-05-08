import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Simple } from '../../../interfaces/items/simple';
import { ItemService } from '../../../services/item/item.service';
import { CartService } from '../../../services/cart/cart.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})

export class ItemComponent implements OnInit {

  id : number;
  item : Simple;
  qtd : number = 1;

  constructor(
    private activatedRouter : ActivatedRoute, 
    private router : Router, 
    private itemService : ItemService,
    private cartService : CartService) {
      this.item = new Simple ('',0,0,'');
  }

  async ngOnInit() {
    
    this.activatedRouter.params.subscribe(params => {
      this.id = +params['id'];
    });

    await this.itemService.getOne(this.id,(response)=>{
      const item = response.data[0];
      this.item = new Simple(item.title,item.price,item.id,item.image);
    })

  }

  addItemToCart(qtd : number){
    this.cartService.addItem({
      id : this.id,
      qtd : qtd
    }, (response)=>{
      console.log(response)
      if(response.status)
        swal({
          title: '<h2>Item Adicionado</h2>',
          confirmButtonText:
          'Ir Para o carrinho',
          showCancelButton: true,
          cancelButtonText: 
          'Continuar comprando'
        }).then(result =>{
          if(result.value)
            this.router.navigate(['cart'])
        })
      else
        swal('Error')
    })
  }

  back() : void {
    this.router.navigate(['index']);
  }

}
