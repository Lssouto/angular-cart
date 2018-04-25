import { Component, OnInit } from '@angular/core';
import { LoadedRouterConfig } from '@angular/router/src/config';
import { PainelComponent } from '../painel.component';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss']
})
export class MessagesComponent implements OnInit {


  constructor(private painelComp : PainelComponent) { }

  ngOnInit() {
    this.painelComp.routerUrl = 'messages'
  }

}
