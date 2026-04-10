import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Contact } from './components/contact/contact';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Contact],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('formulario20-21');
}
