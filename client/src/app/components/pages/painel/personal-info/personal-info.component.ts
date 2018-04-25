import { Component, OnInit } from '@angular/core';
import { PainelComponent } from '../painel.component';

@Component({
  selector: 'app-personal-info',
  templateUrl: './personal-info.component.html',
  styleUrls: ['./personal-info.component.scss']
})
export class PersonalInfoComponent implements OnInit {

  constructor(private painelComp : PainelComponent) { }

  ngOnInit() {
    this.painelComp.routerUrl = 'personal-info';
  }

}
