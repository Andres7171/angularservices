import { Funcion } from "./funcion";

export class PlantillaFuncion {
  constructor(
    public idEmpleado: number,
    public idHospital: number,
    public isSala: number,
    public apellido: string,
    public funcion: Funcion,
    public turno: string,
    public salario: number,
  ) {}
}
