import { Component, OnInit } from '@angular/core';
import { ContactoService } from "./contacto.service.spec"; // Importa el servicio que se comunica con el backend

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  contactos: any[] = [];
  nuevoContacto: any = {};

  constructor(private contactoService: ContactoService) {}

  ngOnInit() {
    // Al cargar el componente, obtenemos la lista de contactos desde el backend
    this.obtenerContactos();
  }

  obtenerContactos() {
    this.contactoService.obtenerContactos().subscribe(
      (data: any) => {
        this.contactos = data;
      },
      (error: any) => {
        console.error('Error al obtener la lista de contactos:', error);
      }
    );
  }

  agregarContacto() {
    this.contactoService.agregarContacto(this.nuevoContacto).subscribe(
      () => {
        // Después de agregar un nuevo contacto, actualizamos la lista de contactos
        this.obtenerContactos();
        this.nuevoContacto = {}; // Limpiamos el formulario
      },
      (error: any) => {
        console.error('Error al agregar el contacto:', error);
      }
    );
  }
}
