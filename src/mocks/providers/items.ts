import { Injectable } from '@angular/core';

import { Item } from '../../models/item';

@Injectable()
export class Items {
  items: Item[] = [];

  defaultItem: any = {
    "name": "Burt Bear",
    "profilePic": "assets/img/speakers/bear.jpg",
    "about": "Burt is a Bear.",
  };


  constructor() {
    let items = [
      {
        "name": "Horarios",
        "profilePic": "assets/img/speakers/horario.png",
        "about": "Horarios Disponibles.",
        "imagen": "assets/img/speakers/horarios.png"
      },
      {
        "name": "Créditos",
        "profilePic": "assets/img/speakers/creditos.png",
        "about": "Créditos Disponibles."      
      },
      {
        "name": "Compañeros",
        "profilePic": "assets/img/speakers/alumnos.png",
        "about": "Compañeros de Aula."        
      },
      {
        "name": "Asignaturas y Cupos",
        "profilePic": "assets/img/speakers/asignaturas.png",
        "about": "Asignaturas y Cupos Disponibles"       
      },
      {
        "name": "Información General",
        "profilePic": "assets/img/speakers/informacion.png",
        "about": "Información General."       
      }
    ];

    for (let item of items) {
      this.items.push(new Item(item));
    }
  }

  query(params?: any) {
    if (!params) {
      return this.items;
    }

    return this.items.filter((item) => {
      for (let key in params) {
        let field = item[key];
        if (typeof field == 'string' && field.toLowerCase().indexOf(params[key].toLowerCase()) >= 0) {
          return item;
        } else if (field == params[key]) {
          return item;
        }
      }
      return null;
    });
  }

  add(item: Item) {
    this.items.push(item);
  }

  delete(item: Item) {
    this.items.splice(this.items.indexOf(item), 1);
  }
}
