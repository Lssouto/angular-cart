import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-slick',
  templateUrl: './slick.component.html',
  styleUrls: ['./slick.component.scss']
})
export class SlickComponent implements OnInit {

  @Input() slides : String;
  @Input() test : String;
  slideConfig : Object;  
  
  constructor() { }

  ngOnInit() {
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
