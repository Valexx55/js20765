import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  private num:number;
  private letra:string;

  private static readonly SECUENCIA:string = "TRWAGMYFPDXBNJZSQVHLCKE" 
  constructor() {}

  calcularLetra()
  {
    console.log ("Calcular letra " + this.num);
    let resto:number;
    resto = this.num%HomePage.SECUENCIA.length;
    this.letra = HomePage.SECUENCIA.charAt(resto);
  }

}
