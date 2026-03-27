import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Producto } from '../model/producto.=model';

@Injectable({
  providedIn: 'root',
})
export class ProductoServicio {
  private urlBase = "http://localhost:8080/inventario-app/productos"

  constructor(private clientHttp: HttpClient){}

  obtenerProductosLista(): Observable<Producto[]>{
    return this.clientHttp.get<Producto[]>(this.urlBase);
  }
}
