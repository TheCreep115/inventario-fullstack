import { Component, inject } from '@angular/core';
import { Producto } from '../model/producto.=model';
import { ProductoServicio } from '../servicios/producto.service';
import { CommonModule, NgFor } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-producto-lista',
  standalone: true,
  imports: [CommonModule, NgFor, HttpClientModule],
  templateUrl: './producto-lista.html'
})
export class ProductoLista {
  productos: Producto[] = [];

  private productoServicio = inject(ProductoServicio);

  ngOnInit(){
    //Cargamos los Productos
    this.obtenerProductos();
  }
  private obtenerProductos(): void{
    this.productoServicio.obtenerProductosLista().subscribe({
      next: (datos) => {
         console.log("DATOS:", datos); //  AQUÍ
        this.productos = datos;
      },
      error: (error) => console.error("Error al recibir los datos", error)
    });
  }

}