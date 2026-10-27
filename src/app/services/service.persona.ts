import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { first, firstValueFrom, Observable } from 'rxjs';
import { Persona } from '../models/persona';

@Injectable()
export class ServicioPersona {
  constructor(private _http: HttpClient) {}

  getPersonas(): Observable<any> {
    let urlApi = 'https://servicioapipersonasmvcpgs.azurewebsites.net/api/personas';
    return this._http.get(urlApi);
  }

  getPersonasPromise(): Promise<any> {
    let urlApi = 'https://servicioapipersonasmvcpgs.azurewebsites.net/api/personas';
    let promise=new Promise((resolve)=>{
        this._http.get(urlApi).subscribe(response=>{
            resolve(response)
        })
    })
    return promise
  }

  async getPersonasAsync():Promise<Persona[]>{ //Aqui se puede poner anny tambien
    let urlApi = 'https://servicioapipersonasmvcpgs.azurewebsites.net/api/personas';
    return firstValueFrom(this._http.get<Persona[]>(urlApi))
  }
}
