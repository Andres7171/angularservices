import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { first, firstValueFrom, Observable } from 'rxjs';
import { Persona } from '../models/persona';
import { Global } from '../global';
import { environment } from '../../environments/environment.development';

@Injectable()
export class ServicioPersona {
  constructor(private _http: HttpClient) {}

  getPersonas(): Observable<any> {
    let urlApi = environment.urlApiPersonas;
    return this._http.get(urlApi);
  }

  getPersonasPromise(): Promise<any> {
    let urlApi = environment.urlApiPersonas;
    let promise = new Promise((resolve) => {
      this._http.get(urlApi).subscribe((response) => {
        resolve(response);
      });
    });
    return promise;
  }

  async getPersonasAsync(): Promise<Persona[]> {
    //Aqui se puede poner anny tambien
    let urlApi = environment.urlApiPersonas;
    return firstValueFrom(this._http.get<Persona[]>(urlApi));
  }

  //LA MEJOR:
  /*
  getPersonas(): Observable<Persona[]> {   // con tipo, mejor que any
    let urlApi = environment.urlApiPersonas;
    return this._http.get<Persona[]>(this.urlApi);
}

  */
}
