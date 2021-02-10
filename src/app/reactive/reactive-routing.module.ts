import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
})
export class ReactiveRoutingModule { }
/*
  Para crear el modulo y el de rutas se usa el siguiente comando
  ng g m reactive --routing
*/
