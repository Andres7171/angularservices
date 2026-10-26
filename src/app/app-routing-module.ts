import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComicsComponent } from './components/comics-component/comics-component';
import { PersonasComponent } from './components/personas-component/personas-component';

const routes: Routes = [
  {path:'',component:ComicsComponent},
  {path:'personas',component:PersonasComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
