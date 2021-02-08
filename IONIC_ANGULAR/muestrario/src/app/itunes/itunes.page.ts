import { Component } from '@angular/core';
import { SearchItem, SearchResult} from './SearchItem';
import { BusquedaService} from '../busqueda.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-itunes',
  templateUrl: './itunes.page.html',
  styleUrls: ['./itunes.page.scss'],
  providers: [BusquedaService]
})
export class ItunesPage  {

  static LIMITE: number = 20;
  private termino: string;
  private lista_canciones: SearchItem[];


  constructor(private ac : AlertController, public itunes_service: BusquedaService) {
    

  }


  /** 
   * Método invocado para informar al usuario en dos supuestos:
   * 
   * Que no haya conexión
   * QUe la búsqueda sea infructuosa (cero resultados)
  */


  async infoSinResultados() {
    const alert = await this.ac.create({
      cssClass: 'my-custom-class',
      header: 'AVISO',
      message: 'BÚSQUEDA SIN RESULTADOS',
      buttons: ['OK']
    });

    await alert.present();
  }


 
  buscar(evento) {
    
   // this.cerrarTeclado(evento);
    
    console.log("evento" + evento);
    console.log("termino" + this.termino);
    this.lista_canciones = null;//vacío la lista cuando le da a buscar...
    this.itunes_service.busca(this.termino).subscribe(
      ok => {
        
        console.log("RESULTADO BUSQEUDA =" + ok);
        let sr =  <SearchResult>ok.body;//casting
        this.lista_canciones = <SearchItem[]>sr.results;//casting
        if ((this.lista_canciones == null) || (this.lista_canciones.length==0))
        {
          this.infoSinResultados();
        } else {
          console.log("RESULTADO cacniones =" + this.lista_canciones);
          this.lista_canciones.forEach(cancion => {
          cancion.seleccionada = false;
          cancion.estado = "play";//se ve el play
        }
        );

        }
        
      }, 
      ko =>  {
        
        this.infoSinResultados();
       }
    );
  }

  playMuestra(cancion: SearchItem) {
    //    document.getElementById("muestra").src = muestraCancion;
    if (cancion.seleccionada) {
      let audioElement = document.getElementById('' + cancion.trackId);
      console.log("audioElement " + audioElement);
      audioElement['pause']();
      cancion.seleccionada = false;
      cancion.estado = 'play';

    } else // canción no seleccionada
    {
      let audioElement = document.getElementById('' + cancion.trackId);
      console.log("audioElement " + audioElement);
      audioElement['play']();
      audioElement.onended = function () {
        cancion.seleccionada = false;
        cancion.estado = 'play';
      };
      cancion.seleccionada = true;
      cancion.estado = 'pause';

    }
  }

  
}