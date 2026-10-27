import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComicsComponent } from './components/comics-component/comics-component';
import { PersonasComponent } from './components/personas-component/personas-component';
import { CochesApiComponent } from './components/coches-api-component/coches-api-component';
import { PlantillaFuncionSimpleComponent } from './components/plantilla-funcion-simple-component/plantilla-funcion-simple-component';

const routes: Routes = [
  {path:'',component:ComicsComponent},
  {path:'personas',component:PersonasComponent},
  {path:'coches',component:CochesApiComponent},
  {path:'plantillafuncion',component:PlantillaFuncionSimpleComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
