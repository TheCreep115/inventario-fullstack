import { Component, inject } from '@angular/core';
import { Producto } from '../model/producto.=model';
import { ProductoServicio } from '../servicios/producto.service';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-producto-lista',
  standalone: true, // 👈 asegúrate de tener esto
  imports: [CommonModule], // 👈 AQUÍ ESTÁ LA SOLUCIÓN
  templateUrl: './producto-lista.html'
})
export class ProductoLista {
  productos!: Producto[];

  private productoServicio = inject(ProductoServicio);

  ngOnInit(){
    //Cargamos los Productos
    this.obtenerProductos();
  }
  private obtenerProductos(): void{
    this.productoServicio.obtenerProductosLista().subscribe({
      next: (datos) => {
         console.log("DATOS:", datos); // 👈 AQUÍ
        this.productos = datos;
      },
      error: (error) => console.error("Error al recibir los datos", error)
    });
  }

}