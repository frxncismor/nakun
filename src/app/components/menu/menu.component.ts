import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { Componente, Usuario } from '../../interfaces/interfaces';
import { ServiceService } from '../../services/service.service';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { AuthService } from '../../services/auth.service';
import { FirebaseApp } from '@angular/fire';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {

  @Input() US: any = [];
  @Input() data: any = [];

  userId: any;
  componentes: Observable<Componente[]>;
  usuario: Observable<any>;

  constructor( private dataService: ServiceService,
               private router: Router,
               public alertCtrl: AlertController,
               public authservice: AuthService,
               private fb: FirebaseApp,
               private auth: AuthService
               ) { }

  ngOnInit() {
    this.CurrentUser();
    this.componentes = this.dataService.getMenuOptions();
  }

  
  onClick() {
    this.router.navigateByUrl('/profile');
  }

  CurrentUser() {
    this.fb.auth().onAuthStateChanged( user => {
      if (user) {
        this.userId = user.uid;
        console.log('bien');
        this.traerInformacion();
      }
    });
  }

  traerInformacion() {
    this.auth.getUserInfo(this.userId).subscribe(US => {
      console.log(US);
      this.US = US;
    });
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
