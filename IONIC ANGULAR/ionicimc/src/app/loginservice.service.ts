import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Login } from './login';
import { Observable } from 'rxjs';
//import { HttpClient } from 'selenium-webdriver/http';

@Injectable({
  providedIn: 'root'
})
export class ServicioRemoto {
  //DESDE AQUÍ NOS COMUNICAMOS CON EL SERVIDOR
  //tx rx datos 
  private static readonly SERVICIO_POST_LOGIN: string = "http://10.1.2.10:8081/cfticionic/usuariocftic";
  private static readonly SERVICIO_GET_PELIS: string = "http://10.1.2.10:8081/cfticionic/fotos?key=";

  constructor(private httpclient: HttpClient) { }
 /**
  * El método consume el servicio de lista de peliculas
  * 
  * @param token clave para consumir el servicio
  */
  getPelis (token:string): Observable<Object>
  {
    let observable_get : Observable<Object> = null;
    
      let url_servicio:string = ServicioRemoto.SERVICIO_GET_PELIS + token;
      observable_get = this.httpclient.get (url_servicio, {observe:"response"});

    return observable_get;
  }

  postLogin(login: Login): Observable<Object> {
    let observable: Observable<Object>;
    
      let json_login: string = JSON.stringify(login);//Serializar
      console.log("Enviado..." + json_login);
      let cabeceras = new HttpHeaders().set('Content-type', 'application/json');

      observable = this.httpclient.post
      (ServicioRemoto.SERVICIO_POST_LOGIN, 
        json_login, { headers: cabeceras, observe: "response" });
    return observable;
  }

}
