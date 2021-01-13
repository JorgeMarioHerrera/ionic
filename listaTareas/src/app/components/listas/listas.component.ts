import { Lista } from './../../models/Lista.model';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Lista } from 'src/app/models/Lista.model';
import { TareasService } from 'src/app/servicios/tareas.service';

@Component({
  selector: 'app-listas',
  templateUrl: './listas.component.html',
  styleUrls: ['./listas.component.scss'],
})
export class ListasComponent implements OnInit {

  @Input() terminados =  true;

  constructor(public tareasService: TareasService, public router: Router) { }

  ngOnInit() {}

  listaSeleccionada( lista: Lista) {
    if (this.terminados) {
      this.router.navigateByUrl(`/tabs/tab2/agregar/${ lista.id }`)
    } else {
      this.router.navigateByUrl(`/tabs/tab1/agregar/${ lista.id }`);
    }
  }

  borrar(item: Lista) {
    this.tareasService.borrarLista( item );

  }

}
