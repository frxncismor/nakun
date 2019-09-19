import { Component, OnInit } from '@angular/core';
import { Notificaciones } from '../../interfaces/interfaces';
import { Observable } from 'rxjs';
import { ServiceService } from '../../services/service.service';
import { ActionSheetController } from '@ionic/angular';
import { FirebaseApp } from '@angular/fire';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-notificaciones',
  templateUrl: './notificaciones.page.html',
  styleUrls: ['./notificaciones.page.scss'],
})
export class NotificacionesPage implements OnInit {

  US: any = [];
  userId: any;

  notificaciones: any [] = [];
  constructor(private dataService: ServiceService, private actionSheetCtrl: ActionSheetController,
              public fb: FirebaseApp,
              public auth: AuthService) { }

  ngOnInit() {
    this.dataService.getNotifications().subscribe( notificaciones => {
      console.log(notificaciones);
      this.notificaciones = notificaciones;
    });

    this.CurrentUser();
  }


  abrirPerfil() {
    console.log('Abrir perfil de notificaciones');
  }

   async Opciones(notificacion) {
    const actionSheet = await this.actionSheetCtrl.create({
      header: 'Opciones',
      backdropDismiss: true, // no se cierra el action sheet tocando en otra parte de la pantalla
      buttons: [{
        text: 'Delete',
        role: 'destructive',
        icon: 'trash',
        cssClass: 'rojo',
        handler: () => {
          const index = this.notificaciones.indexOf(notificacion);

          if (index > -1) {
            this.notificaciones.splice(index, 1);
            }
        }
      }]
    });

    await actionSheet.present();

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

}
