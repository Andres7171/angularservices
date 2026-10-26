import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";


@Injectable()
export class ServicioPersona{
    constructor(private _http:HttpClient){}

    getPersonas():Observable<any>{
        let urlApi='https://servicioapipersonasmvcpgs.azurewebsites.net/api/personas'
        return this._http.get(urlApi);
    }
}