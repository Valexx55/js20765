import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import {SearchResult} from './itunes/SearchItem';

@Injectable({
  providedIn: 'root'
})
export class BusquedaService {


  private static readonly API_ITUNES : string = 'https://itunes.apple.com/search?&media=music&';

  /**
   * 
   * @param http Servicio inyectado
   */
  constructor(private http: HttpClient) {
  }
  /**
   * @param term Representa el término de búsqueda
   * @param limite_resultados Límite de resultados. Opcional. 50 por defecto
   */
  busca(termino: string, limite_resultados?: number): Observable<HttpResponse<SearchResult>> {
    let observable: Observable<HttpResponse<SearchResult>>;
    //let observable: Observable<Object>;
    let apiURL: string;

    console.log("Entrando en busca () Usando Observable Service");
    if (limite_resultados == null) 
    {
      console.log("No pasó parámetro. Sin límite");
      apiURL = BusquedaService.API_ITUNES + 'term=' + termino;
    } else 
        {
        console.log("Buscando con límite " + limite_resultados);
        apiURL = BusquedaService.API_ITUNES + 'term=' + termino + '&limit=' + limite_resultados;
        }
    console.log(' GET sobre ' + apiURL);

    observable =  this.http.get<SearchResult>(apiURL, {observe:"response"});

    return observable;
  }


  
}
