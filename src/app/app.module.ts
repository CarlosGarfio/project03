import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactosComponent } from './contactos/contactos.component';
import { ServiciosComponent } from './servicios/servicios.component';
import { AvionesComponent } from './aviones/aviones.component';
import { AutosComponent } from './autos/autos.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactosComponent,
    ServiciosComponent,
    AvionesComponent,
    AutosComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
