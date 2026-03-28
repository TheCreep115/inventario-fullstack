import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductoLista } from "./producto-lista/producto-lista";

@Component({
  selector: 'app-root',
  standalone: true, // 🔥 ESTO ES LA CLAVE
  imports: [ProductoLista],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('inventario-app');
}
