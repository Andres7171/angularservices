import { ChangeDetectorRef, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ServicioPlantilla } from '../../services/service.plantilla';
import { Funcion } from '../../models/funcion';
import { PlantillaFuncion } from '../../models/plantilla';

@Component({
  selector: 'app-plantilla-funcion-multiple-component',
  standalone: false,
  styleUrl: './plantilla-funcion-multiple-component.css',
  templateUrl: './plantilla-funcion-multiple-component.html',
})
export class PlantillaFuncionMultipleComponent implements OnInit {
  @ViewChild('selectfunciones') selectFunciones!: ElementRef;

  public funciones!: Funcion[];
  public tabla: boolean;
  public plantilla!: PlantillaFuncion[];

  constructor(
    private _cdr: ChangeDetectorRef,
    private _service: ServicioPlantilla,
  ) {
    this.tabla = false;
  }

  async mostrarTabla(): Promise<void> {
    let aux = [];
    for (let opcion of this.selectFunciones.nativeElement.options) {
      if (opcion.selected == true) {
        aux.push(opcion.value);
      }
      this.plantilla = await this._service.getPlantillaFunciones(aux);
      this.tabla=true 
      this._cdr.detectChanges()
    }
  }

  ngOnInit(): void {
    this._service.getFunciones().subscribe((response) => {
      console.log('leyendo');
      this.funciones = response;
      this._cdr.detectChanges();
    });
  }
}
