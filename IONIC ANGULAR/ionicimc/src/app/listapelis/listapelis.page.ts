import { Component, OnInit } from '@angular/core';
import { ServicioRemoto } from '../loginservice.service';
import { Login } from '../login';
import { HttpResponse } from '@angular/common/http';
import { Peli } from '../peli';

@Component({
  selector: 'app-listapelis',
  templateUrl: './listapelis.page.html',
  styleUrls: ['./listapelis.page.scss'],
  providers: [ServicioRemoto]
})
export class ListapelisPage implements OnInit {

  array_pelis:Array<Peli>;
  //0 obtener la clave para poder consumir el servicio
  //1 obtener las pelis del servidor y mostrarlas
  constructor(public servicio_remoto:ServicioRemoto) {
   }

   peliTocada (peli:Peli)
   {
     console.log("Ha tocao la peli " + peli.idfoto + "  " +peli.ruta);
   }

  ngOnInit() {
    let credencialjson = window.localStorage.getItem("credenciales");
    console.log ("credenciales = " +  credencialjson);
    let login:Login = JSON.parse(credencialjson);
    this.servicio_remoto.getPelis(login.token).subscribe(
      respuesta_ok => {
        console.log("Ha ido bien");
        let mensaje_http : HttpResponse<Array<Peli>> = 
        respuesta_ok as HttpResponse<Array<Peli>>;
        this.array_pelis = mensaje_http.body;
        this.array_pelis.map( peli => {
          console.log (peli.idfoto + " " + peli.ruta);
        });
      }
      ,

      respuesta_ko => {
        console.log("Ha ido mal");
        
      }
      );
  }


}
