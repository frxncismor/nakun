import { Component, OnInit } from '@angular/core';
import { Notificaciones } from '../../interfaces/interfaces';
import { Observable } from 'rxjs';
import { ServiceService } from '../../services/service.service';

@Component({
  selector: 'app-notificaciones',
  templateUrl: './notificaciones.page.html',
  styleUrls: ['./notificaciones.page.scss'],
})
export class NotificacionesPage implements OnInit {

  notificaciones: Observable<Notificaciones[]>;
  constructor(private dataService: ServiceService) { }

  ngOnInit() {
    this.notificaciones = this.dataService.getNotifications();
  }

  Opciones() {
    console.log('Abrir opciones');
  }

  abrirPerfil() {
    console.log('Abrir perfil de notificaciones');
  }
}
