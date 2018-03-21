import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

/**
 * The Settings page is a simple form that syncs with a Settings provider
 * to enable the user to customize settings for the app.
 *
 */
@IonicPage()
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html'
})
export class SettingsPage {
  // Our local settings object
  cardItems: any[];

  constructor(public navCtrl: NavController) {
    this.cardItems = [
      {
        user: {
          avatar: 'assets/img/espe1.jpg',
          name: 'Matriculas'
        },
        date: 'Abril 5, 2018',
        content: 'Se comunica que el valor de su matricula tiene que pagar hasta el 12 de Mayo del 2018 en Tesoreria. Gracias por su atención',
      },
      {
        user: {
          avatar: 'assets/img/espe2.jpg',
          name: 'Créditos'
        },
        date: 'Abril 8, 2018',
        content: 'Usted ha llenado todos los créditos correspondientes a este período.'
      },
      {
        user: {
          avatar: 'assets/img/espe3.png',
          name: 'Información'
        },
        date: 'Abril 13, 2018',        
        content: 'Se comunica a los estudiantes acercarse el día Lunes 12 de Mayo a la UTIC para información general.'
      }
    ];

  }
}
