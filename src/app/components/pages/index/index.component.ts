import { Component, OnInit } from '@angular/core';
import { Simple } from '../../../interfaces/items/simple';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {
  slides : Array<Simple>;
  slideConfig : Object;  

  constructor() { }

  ngOnInit() {
    this.slides = [];
    for( let index = 0; index < 5; index++){
      let item : Simple = {
        id: index,
        title : 'titulo ' + index,
        image : "http://placehold.it/350x150/" + index * 12345,
        price : index * 123
      };

    this.slides.push(item);
  }
  
    this.slideConfig = {
      "slidesToShow": 4,
      "slidesToScroll": 1,
      "autoplay": true,
      "autoplaySpeed": 2000 
    };
  }

}
