import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'; // Importa HttpClientModule para realizar solicitudes HTTP
import { FormsModule } from '@angular/forms'; // Importa FormsModule para trabajar con formularios

import { AppComponent } from './app.component';
import { ContactoService } from './contacto.service'; // Importa el servicio que se comunica con el backend

@NgModule({
  declarations: [
    AppComponent
    // Agrega aquí otros componentes que utilices en tu aplicación
  ],
  imports: [
    BrowserModule,
    HttpClientModule, // Agrega el módulo HttpClientModule para habilitar las solicitudes HTTP
    FormsModule // Agrega el módulo FormsModule para trabajar con formularios
    // Agrega aquí otros módulos que utilices en tu aplicación
  ],
  providers: [
    ContactoService // Agrega aquí tus servicios
    // Agrega aquí otros servicios que utilices en tu aplicación
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
