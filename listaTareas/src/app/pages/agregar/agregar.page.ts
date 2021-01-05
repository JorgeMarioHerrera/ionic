import { ListasItem } from './../../models/ListasItem.model';
import { Lista } from './../../models/Lista.model';
import { TareasService } from 'src/app/servicios/tareas.service';
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

}
