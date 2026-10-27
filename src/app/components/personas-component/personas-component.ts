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

  ngOnInit(): void {
    this._service.getPersonasPromise().then(response=>{
      this.personas=response
      this._cdr.detectChanges()
    })
  }
}
