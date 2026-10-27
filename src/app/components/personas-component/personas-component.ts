import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Persona } from '../../models/persona';
import { ServicioPersona } from '../../services/service.persona';

@Component({
  selector: 'app-personas-component',
  standalone: false,
  styleUrl: './personas-component.css',
  templateUrl: './personas-component.html',
})
export class PersonasComponent implements OnInit {
  public personas!: Persona[];

  constructor(
    private _service: ServicioPersona,
    private _cdr:ChangeDetectorRef
  ) {
    this.personas = [];
  }

  async ngOnInit(): Promise<void> {

    try{
      this.personas=await this._service.getPersonasAsync()
      this._cdr.detectChanges()
    }catch(error){
      console.error('Error en API: ',error)
    }

    

    /*
    this._service.getPersonasPromise().then(response=>{
      this.personas=response
      this._cdr.detectChanges()
    })*/

    /*
    this._service.getPersonas().subscribe((response)=>{
      console.log('leyendo')
      this.personas=response
      this._cdr.detectChanges()
    })
    */ 
  }
}
