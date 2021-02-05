import { Component, OnInit } from '@angular/core';
import { Login } from '../login';
import { ServicioRemoto } from '../loginservice.service';
import { HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { NavController, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.page.html',
  styleUrls: ['./formulario.page.scss'],
  providers:[ServicioRemoto]
})
export class FormularioPage implements OnInit {

  login:Login;
  constructor(private loginservice:ServicioRemoto, public nc : NavController, public alertController:AlertController) { 
    console.log("en constructor");
    this.login = new Login();//creo el objeto login
  }


  gestionRespuesta (loginval:Login)
  {
    console.log ("NOMBRE " + loginval.nombre);
    console.log ("PWD " + loginval.pwd);
    console.log ("TOKEN " + loginval.token);
    //TODO GUARDAR LAS CREDENCIALES
    let loginstr: string = JSON.stringify(loginval); 
    window.localStorage.setItem("credenciales",loginstr);
    //CAMBIAR DE PÁGINA a listapelis
    this.nc.navigateForward('listapelis');

  }

  acceder (datos:Login)
  {
    console.log ("Ha tocado acceder");
    console.log ("nombre " + datos.nombre);
    console.log ("pwd " + datos.pwd);
    this.loginservice.postLogin(datos).subscribe(
      resp=> {
        
        let cuerpo: HttpResponse<Object>;
        cuerpo = resp as HttpResponse<Object>;//CASTING!! CONVERSIÓN DE TIPOS EQUIVALENTE
        //cuerpo = <HttpResponse<Object>>resp;
        console.log("Ha ido bien " + resp);
        console.log("Status " + cuerpo.status);
        console.log("Body " + cuerpo.body);
        let loginval:Login = cuerpo.body as Login;
        this.gestionRespuesta(loginval);

      },
      error=> {
        console.log ("Error " + error);
        //window.alert("Error socio");
        this.presentAlert(<HttpErrorResponse>error);
        //this.presentAlertPromesas(<HttpErrorResponse>error);
      }
    );
  }

  async presentAlert(error:HttpErrorResponse) {
    const alert = await this.alertController.create({
      header: 'AVISO ' + error.status,
      subHeader: 'Usuario no encontrado',
      message: 'Revise sus crendeciales ' + error.statusText,
      buttons: [{
        text: 'OK',
        handler: () => {
          console.log('"Ha tocado OK"');
        }
      }]
    });

    await alert.present();
  }

   presentAlertPromesas(error:HttpErrorResponse) {
    this.alertController.create({
      header: 'AVISO' + error.status,
      subHeader: 'Error usuario no encontrado',
      message: 'Revise sus crendeciales ' + error.statusText,
      buttons: ['OK']
    }).then (
      ventana => ventana.present().
                then ( () => console.log("Ventana Mostrada")));

  }
  ngOnInit() {
    console.log("en init");
  }

}
