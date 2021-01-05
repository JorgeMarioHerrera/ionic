import { Lista } from './../models/Lista.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TareasService {

  listas: Lista[] = [];

  constructor() {
    this.cargarStorage();
  }

  crearTarea(titulo: string) {
    const nuevaTarea = new Lista(titulo);
    this.listas.push(nuevaTarea);
    this.guardarStorage();
    return nuevaTarea.id;
  }

  obtenerListaPorId(id: string | number) {
    id = Number(id);
    return this.listas.find( res => res.id === id
    );
  }

  guardarStorage() {
    localStorage.setItem('data', JSON.stringify(this.listas));
  }

  cargarStorage() {
    if (localStorage.getItem('data')) {
      this.listas = JSON.parse(localStorage.getItem('data'));
    } else {
      this.listas = [];
    }
}

}
