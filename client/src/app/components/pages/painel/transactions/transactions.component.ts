import { Component, OnInit } from '@angular/core';
import { PainelComponent } from '../painel.component';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.scss']
})
export class TransactionsComponent implements OnInit {

  constructor(private painelComp : PainelComponent) { }

  ngOnInit() {
    this.painelComp.routerUrl = 'transactions';
  }

}
