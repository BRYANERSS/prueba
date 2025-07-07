import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { MostrarDatosComponent } from './componentes/mostrar-datos/mostrar-datos.component';

@NgModule({
  declarations: [
    AppComponent,
    MostrarDatosComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
