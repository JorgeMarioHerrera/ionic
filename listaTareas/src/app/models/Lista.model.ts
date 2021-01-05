import { ListasItem } from './ListasItem.model';

export class Lista {
    id: number;
    titulo: string;
    fechaCreacion: Date;
    fechaFinalizacion: Date;
    completada: boolean;
    items: ListasItem[];

    constructor(titulo: string) {
        this.titulo = titulo;
        this.fechaCreacion = new Date();
        this.completada = false;
        this.items = [];
        this.id = new Date().getTime();

    }
}