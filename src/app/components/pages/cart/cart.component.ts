import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  id: number;

  constructor(private router : ActivatedRoute) { }

  ngOnInit() {
    this.router.params.subscribe(params => {
      this.id = +params['id'];
   });
  }

}
