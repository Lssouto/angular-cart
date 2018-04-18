import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Simple } from '../../../interfaces/items/simple';
import { ItemService } from '../../../services/item/item.service';
import { CartService } from '../../../services/cart/cart.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {

  id : number;
  item : Simple;

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

  async addItemToCart(){
    this.cartService.addItem(this.id, (response)=>{
      console.log(response)
    })
  }

  back(){
    this.router.navigate(['Index']);
  }

}
