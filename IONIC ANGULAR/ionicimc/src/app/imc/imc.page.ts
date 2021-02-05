import { Component, OnInit } from '@angular/core';
import { TIMC } from '../timc.enum';
import { Imc } from '../imc';

@Component({
  selector: 'app-imc',
  templateUrl: './imc.page.html',
  styleUrls: ['./imc.page.scss'],
})
export class ImcPage implements OnInit {

  private imc: Imc;
  private arrayimc: Array<Imc>;//declaro el array
  private static readonly FOTO_DELGADO: string = "assets/delgado.jpg";
  private static readonly FOTO_DESNUTRIDO: string = "assets/desnutrido.jpg";
  private static readonly FOTO_IDEAL: string = "assets/ideal.jpg";
  private static readonly FOTO_SOBREPESO: string = "assets/sobrepeso.jpg";
  private static readonly FOTO_OBESO: string = "assets/obeso.png";

  constructor() {
    this.imc = new Imc();
    this.arrayimc = new Array<Imc>();//creo la lista
  }

  ngOnInit() {
  }


  private obtenerImagen(tipoIMC: TIMC): string {
    let ruta_foto: string;

    switch (tipoIMC) {
      case TIMC.DELGADO: ruta_foto = ImcPage.FOTO_DELGADO; break;
      case TIMC.DESNUTRIDO: ruta_foto = ImcPage.FOTO_DESNUTRIDO; break;
      case TIMC.IDEAL: ruta_foto = ImcPage.FOTO_IDEAL; break;
      case TIMC.SOBREPESO: ruta_foto = ImcPage.FOTO_SOBREPESO; break;
      case TIMC.OBESO: ruta_foto = ImcPage.FOTO_OBESO; break;
    }

    return ruta_foto;
  }
  private obtenerIMCNominal(numimc: number): TIMC {
    let tipoIMC: TIMC;

    if (numimc < 16) {
      tipoIMC = TIMC.DESNUTRIDO;
    } else if (numimc >= 16 && numimc < 18) {
      tipoIMC = TIMC.DELGADO;
    } else if (numimc >= 18 && numimc < 25) {
      tipoIMC = TIMC.IDEAL;
    } else if (numimc >= 25 && numimc < 31) {
      tipoIMC = TIMC.SOBREPESO;
    } else {
      tipoIMC = TIMC.OBESO;
    }

    return tipoIMC;
  }

  mostrarArray() {
    for (let oimc of this.arrayimc) {
      console.log(` ALTURA ${oimc.altura}`);
      console.log(` PESO ${oimc.peso}`);
      console.log(` NOMINAL ${oimc.nominal}`);
      console.log(` FOTO ${oimc.foto}`);
      console.log("------------");//separador
    }

  }

  calcularIMC() {
    let valornumimc = this.imc.peso / (this.imc.altura * this.imc.altura);
    this.imc.nominal = this.obtenerIMCNominal(valornumimc);
    this.imc.foto = this.obtenerImagen(this.imc.nominal);
    console.log(this.imc.nominal);
    console.log(this.imc.foto);
    //CREO EL NUEVO ELEMENTO DEL ARRAY
    let imcAux = new Imc();
    imcAux.altura = this.imc.altura;
    imcAux.peso = this.imc.peso;
    imcAux.nominal = this.imc.nominal;
    imcAux.foto = this.imc.foto;
    //INTRODUCIRLO
    this.arrayimc.push(imcAux);
    console.log(`EL ARRAY ES ${this.arrayimc}`);
    this.mostrarArray();


  }

  limpiarIMC ()
  {
    this.arrayimc.length=0;
  }

  oppeso (a:Imc,b:Imc ):number
  {
    let resultado = -1;

      resultado = a.peso-b.peso;

    return resultado;
  }
  ordenarPorPeso()
  {
    console.log("ordenando por peso . . .");
    this.arrayimc.sort(function (a, b) {
      return (a.peso - b.peso)
  });
    this.arrayimc.sort(this.oppeso);
    this.arrayimc.sort((a,b)=>a.peso-b.peso);
    this.arrayimc.sort((a:Imc, b:Imc)=>{
      let resultado = -1;
        resultado = a.peso-b.peso;
      return resultado;
    })
  }

  ordenarPorAltura()
  {
    console.log("ordenando por altura . . .");
    this.arrayimc.sort(function (a, b) {
      return (a.altura - b.altura)
  });
  }

}
