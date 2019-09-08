import { Component, OnInit } from '@angular/core';
import { Notificaciones } from '../../interfaces/interfaces';
import { Observable } from 'rxjs';
import { ServiceService } from '../../services/service.service';
import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-notificaciones',
  templateUrl: './notificaciones.page.html',
  styleUrls: ['./notificaciones.page.scss'],
})
export class NotificacionesPage implements OnInit {

  notificaciones: any [] = [];
  constructor(private dataService: ServiceService, private actionSheetCtrl: ActionSheetController) { }

  ngOnInit() {
    this.dataService.getNotifications().subscribe( notificaciones => {
      console.log(notificaciones);
      this.notificaciones = notificaciones;
    });
  }


  abrirPerfil() {
    console.log('Abrir perfil de notificaciones');
  }

   async Opciones(notificacion) {
    const actionSheet = await this.actionSheetCtrl.create({
      header: 'Opciones',
      backdropDismiss: true, //no se cierra el action sheet tocando en otra parte de la pantalla
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
  
}
