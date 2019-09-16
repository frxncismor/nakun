import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Componente } from '../../interfaces/interfaces';
import { ServiceService } from '../../services/service.service';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { AuthService } from "../../services/auth.service";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {


  componentes: Observable<Componente[]>;
  constructor( private dataService: ServiceService, private router: Router, public alertCtrl: AlertController,
    public authservice : AuthService) { }

  ngOnInit() {
    this.componentes = this.dataService.getMenuOptions();

  }

  onClick() {
    this.router.navigateByUrl('/profile');
  }

  async reportarBug() {
    const input = await this.alertCtrl.create({
      header: 'Reportar bug',
      subHeader: 'Describa el problema:',
      inputs: [
        {
          name: 'txtProblema',
          type: 'text',
          placeholder: 'El problema es...'
        }
      ],
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: () => {
            console.log('Cancelar');
          }
        },
          {
            text: 'Ok',
            handler: ( data ) => {
              console.log('Boton OK', data);
            }
          }
      ]
    });

    await input.present();
  }

  async onLogout() {
    const alert = await this.alertCtrl.create({
      header: '¿Cerrar sesión?',
      // subHeader: 'Subtitle',
      // message: 'This is an alert message.',
      buttons: [
        {
          text: 'No',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Cancelar');
          }
        },
          {
            text: 'Si',
            handler: (blah) => {
              this.authservice.logout();
              ;
            }
          }
      ]
    });

    await alert.present();
  }

 

  /*onLogout()
  {
    this.authservice.logout();
  }*/
}
