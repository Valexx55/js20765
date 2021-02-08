import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dni',
  templateUrl: './dni.page.html',
  styleUrls: ['./dni.page.scss'],
})
export class DniPage implements OnInit {

  
  private num:number;
  private letra:string;

  private static readonly SECUENCIA:string = "TRWAGMYFPDXBNJZSQVHLCKE";
  constructor() {}

  calcularLetra()
  {
    console.log ("Calcular letra " + this.num);
    let resto:number;
    resto = this.num%DniPage.SECUENCIA.length;
    this.letra = DniPage.SECUENCIA.charAt(resto);
  }

  ngOnInit(){}
}
