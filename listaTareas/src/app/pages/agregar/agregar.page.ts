import { TareasService } from './../../servicios/tareas.service';
import { ListasItem } from './../../models/ListasItem.model';
import { Lista } from './../../models/Lista.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.page.html',
  styleUrls: ['./agregar.page.scss'],
})
export class AgregarPage implements OnInit {


  lista: Lista;
  nombreItem = '';

  constructor(private tareasService: TareasService,
              private route: ActivatedRoute) {

                const listaId = this.route.snapshot.paramMap.get('listaId');
                this.lista = this.tareasService.obtenerListaPorId(listaId);
   }

  ngOnInit() {
  }

  agregarItem() {
    if ( this.nombreItem.length === 0 ) {
      return;
    }
    const nuevoItem = new ListasItem( this.nombreItem );
    this.lista.items.push( nuevoItem );
    this.nombreItem = '';
    this.tareasService.guardarStorage();
  }

  cambioCheck( item: ListasItem ) {

    const pendientes = this.lista.items.filter( itemData => !itemData.completado).length;
    if (pendientes === 0) {
      this.lista.fechaFinalizacion = new Date();
      this.lista.completada = true;
    } else {
      this.lista.fechaFinalizacion = null;
      this.lista.completada = false;
    }
    this.tareasService.guardarStorage();
    console.log(this.tareasService.listas);
  }

  borrar(item: number) {
    this.lista.items.splice( item, 1);
    this.tareasService.guardarStorage();
  }

}
