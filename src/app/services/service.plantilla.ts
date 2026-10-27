import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.development';
import { Funcion } from '../models/funcion';
import { PlantillaFuncion } from '../models/plantilla';

@Injectable()
export class ServicioPlantilla {
  constructor(private _http: HttpClient) {}

  getFunciones(): Observable<Funcion[]> {
    let urlApi = environment.urlPlantilla;
    let request = 'api/Plantilla/Funciones';
    return this._http.get<Funcion[]>(urlApi+request);
  }

  getPlantillaFuncion(funcion:Funcion):Observable<PlantillaFuncion[]>{
    let urlApi=environment.urlPlantilla
    let request='/api/Plantilla/PlantillaFuncion/'+funcion
    return this._http.get<PlantillaFuncion[]>(urlApi+request)
  }
}
