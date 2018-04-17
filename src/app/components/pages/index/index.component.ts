import { Component, OnInit } from '@angular/core';
import { Simple } from '../../../interfaces/items/simple';
import { ItemService } from '../../../services/item/item.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {

  slides : Array<Simple>;
  slideConfig : Object;  

  constructor(private itemService : ItemService) { }

  async ngOnInit() {

    await this.itemService.get((response)=>{
      this.slides = response.data;
    })

    this.slideConfig = {
      "slidesToShow": 5,
      "slidesToScroll": 1,
      "autoplay": true,
      "autoplaySpeed": 2000 
    };

  }

}
