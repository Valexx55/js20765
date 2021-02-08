import { Component, OnInit } from '@angular/core';
import { Login } from './login';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.page.html',
  styleUrls: ['./formulario.page.scss'],
})
export class FormularioPage implements OnInit {

  login:Login;


  constructor(public alertController:AlertController) { 
    console.log("en constructor");
    this.login = new Login();//creo el objeto login
    
  }



  acceder (datos:Login)
  {
    console.log ("Ha tocado acceder");
    console.log ("nombre " + datos.nombre);
    console.log ("pwd " + datos.pwd);
    this.presentAlert();
  }

  

   presentAlert() {
    this.alertController.create({
      header: 'OK',
      subHeader: 'Login enviado',
      message: 'No se ha enviado de verdad, porque no hay servidor, pero bueno',
      buttons: ['OK']
    }).then (
      ventana => ventana.present().
                then ( () => console.log("Ventana Mostrada")));

  }
  ngOnInit() {
    console.log("en init");
  }

}
