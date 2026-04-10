import { Component, signal } from '@angular/core';
import { Contacto } from '../../contacto';
import { form, required, FormField } from '@angular/forms/signals';

@Component({
  selector: 'app-contact',
  imports: [FormField],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact {
  contactoModel = signal<Contacto>({
    nombre: '',
    email: ''
  });
  contactoForm = form(this.contactoModel,(path)=>{
    required(path.nombre, {message:'El nombre es obligatorio'});
    required(path.email, {message: 'El email es obligatorio'});
    required(path.email, {message: 'Email invalido'});
  });

  enviar(){
    const datos = this.contactoModel();
    console.log('Formulario enviado', datos.email);
  }
}
