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
      "autoplaySpeed": 2000 ,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 5
          }
        },
        {
          breakpoint: 900,
          settings: {
            slidesToShow: 3
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1
          }
        }
      ]
    };

  }

}
