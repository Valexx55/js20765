import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  num: number;
  mayorMenor = '...';
  numSecret: number = this.numAleatorio(0,100);
 
  constructor() {}

  numAleatorio(a, b) {
    return Math.round(Math.random() * (b - a) + parseInt(a, 10));
  }

  compruebaNumero(){
    if(this.num)
    {
      if(this.numSecret < this.num)
      {
        this.mayorMenor = 'menor que';
      }
      else if(this.numSecret > this.num)
      {
        this.mayorMenor = 'mayor que';
      }
      else{
        this.mayorMenor = '';
      }
    }
  }

  reinicia(){
    // reiniciamos las variables
    this.num = null;
    this.mayorMenor = '...';
    this.numSecret = this.numAleatorio(0,100);
  }
  
}
