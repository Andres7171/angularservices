import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ServicioPlantilla } from '../../services/service.plantilla';
import { Funcion } from '../../models/funcion';
import { PlantillaFuncion } from '../../models/plantilla';

@Component({
  selector: 'app-plantilla-funcion-simple-component',
  standalone: false,
  styleUrl: './plantilla-funcion-simple-component.css',
  templateUrl: './plantilla-funcion-simple-component.html',
})
export class PlantillaFuncionSimpleComponent implements OnInit{


  public funciones!:Funcion[]
  public funcionSeleccionada!:Funcion
  public tabla:boolean
  public plantilla!:PlantillaFuncion[]


  constructor(private _cdr:ChangeDetectorRef,private _service:ServicioPlantilla ){
    this.tabla=false
  }

  mostrarTabla():void{
    this._service.getPlantillaFuncion(this.funcionSeleccionada).subscribe((response)=>{
      this.plantilla=response
      this.tabla=true 
      this._cdr.detectChanges()
    })
    
  }

  ngOnInit(): void {
    this._service.getFunciones().subscribe((response)=>{
      console.log('leyendo')
      this.funciones=response
      this._cdr.detectChanges()
    })
  }

}
