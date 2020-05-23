import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContactosComponent } from './contactos/contactos.component';
import { AvionesComponent } from './aviones/aviones.component';
import { ServiciosComponent } from './servicios/servicios.component';

const routes: Routes = [
  { path: 'contactos', component: ContactosComponent },
  { path: 'servicios', component: ServiciosComponent },
  { path: 'aviones', component: AvionesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
