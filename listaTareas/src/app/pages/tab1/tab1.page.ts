import { Lista } from './../../models/Lista.model';
import { TareasService } from './../../servicios/tareas.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  lista: any[] = [];

  constructor(public tareasService: TareasService,
              private router: Router,
              public alertController: AlertController) {

    this.lista = this.tareasService.listas;
  }

  async agregarLista() {

    const alert = this.alertController.create({
      inputs: [
        {
          name: 'titulo',
          type: 'text',
          placeholder: 'Nombre de la tarea'
        }
      ],
      header: 'Crear Tarea',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: () => {
            console.log('Cancelar');
          }
        },
        {
          text: 'Crear',
          handler: (data) => {
            if (data.titulo.length === 0) {
              return;
            }
            const listaId = this.tareasService.crearTarea(data.titulo);
            this.router.navigateByUrl(`/tabs/tab1/agregar/${ listaId }`); // /tabs/tab1/agregar/1609880221558
          }
        }
      ]
    });
    (await alert).present();
  }

}
