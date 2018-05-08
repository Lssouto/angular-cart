import { Component, OnInit } from '@angular/core';
import { PainelComponent } from '../painel.component';
import { PainelService } from '../../../../services/painel/painel.service';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.scss']
})
export class TransactionsComponent implements OnInit {

  transactions : Array<Object> = [];

  constructor(private painelComp : PainelComponent, private painelService : PainelService) {}

  ngOnInit() {
    this.painelComp.routerUrl = 'transactions';
    this.painelService.getTransactions(response=>{
      this.transactions = response.data;
    })
  }

}
