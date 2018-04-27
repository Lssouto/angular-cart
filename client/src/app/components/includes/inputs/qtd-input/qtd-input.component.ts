import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-qtd-input',
  templateUrl: './qtd-input.component.html',
  styleUrls: ['./qtd-input.component.scss']
})
export class QtdInputComponent implements OnInit {

  @Input() maxValue : Number;
  @Input() minValue : Number;
  @Input() value : Number = 2;
  @Input() increaseAmount : Number = 1;
  @Input() decreaseAmount : Number = -1 ;
  

  constructor() { }

  ngOnInit() {
  }

  updateValue(value){
    let self = this;
    setTimeout(function(){
      self.value += value; 
    },300)
  }

  increaseValue(e){
    if(this.value != this.maxValue){
      this.animate(e,'right')
      this.updateValue(this.increaseAmount)
    }
  }
  decreaseValue(e){
    if(this.value != this.minValue){
      this.animate(e,'left')
      this.updateValue(this.decreaseAmount);
    }
  }

  animate(e,effect){
    e.target.parentElement.children[1].classList.add((effect == 'right')?'text-out-right' : 'text-out-left');
    setTimeout(function(){
      e.target.parentElement.children[1].classList.remove((effect == 'right')?'text-out-right' : 'text-out-left');
    },400)
  }

}
