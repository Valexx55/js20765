import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-adivina',
  templateUrl: './adivina.page.html',
  styleUrls: ['./adivina.page.scss'],
})
export class AdivinaPage implements OnInit {

  num: number;
  mayorMenor: String;// = '...';
  numSecret: number;// = this.numAleatorio(0,100);
  haganado: boolean;
 
  //inversión de control - INYECCIÓN DE DEPENDENCIAS
  constructor(public alertController: AlertController) {
    //inicializar, dar valores por defecto
    //instanciar la clase, crear un objeto
    //onload
    //antes de verse la págian, se ejecuta esto
    console.log ("En el constructor");
    this.numSecret = this.numAleatorio(0,100);
    //this.num = 0;
    this.mayorMenor = "...";
    this.haganado = false;
    console.log ("Numero secreto = " +this.numSecret);
  }

  numAleatorio(a, b):number {
    return Math.round(Math.random() * (b - a) + parseInt(a, 10));
  }

  ngOnInit (){
    //este metodo sería inocado después del constructor
    //inicialiar
    console.log ("en ngOnInit");
  }

  async mostrarAlert() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'AVISO',
      message: 'HAS GANADO, CHAMPION!',
      buttons: ['OK']
    });

    await alert.present();
  }

  //CICLO DE VIDA DEL COMPONENTE, ME PERMITE PROGARMAR ACCIONES EN MOMENTOS ESPECIALES

  ionViewWillEnter ()
  {
    console.log ("ionViewWillEnter");
  }

  compruebaNumero():void{
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
        console.log ("ha ganado");
        this.mayorMenor = '';//acierta y pasa a valer cadena vacía
        this.haganado = true;
        this.mostrarAlert();

      }
    }
  }

  reinicia(){
    // reiniciamos las variables
    console.log ("reinicio del juego");
    this.num = null;
    this.mayorMenor = '...';
    this.numSecret = this.numAleatorio(0,100);
    this.haganado = false;
  }

}
