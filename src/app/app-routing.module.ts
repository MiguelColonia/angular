import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactListComponent } from './contact-list/contact-list.component';
import { AddContactComponent } from './add-contact/add-contact.component';

const routes: Routes = [
  { path: '', redirectTo: '/contacts', pathMatch: 'full' }, // Ruta de inicio
  { path: 'contacts', component: ContactListComponent }, // Ruta para la lista de contactos
  { path: 'add-contact', component: AddContactComponent } // Ruta para agregar un nuevo contacto
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
// Path: src/app/app.component.html
