import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VentaOpcionesCubiertasComponent } from './venta-opciones-cubiertas/venta-opciones-cubiertas.component';

@NgModule({
  declarations: [
    AppComponent,
    VentaOpcionesCubiertasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
