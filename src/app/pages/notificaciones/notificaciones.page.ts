import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notificaciones',
  templateUrl: './notificaciones.page.html',
  styleUrls: ['./notificaciones.page.scss'],
})
export class NotificacionesPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  Opciones() {
    console.log('Abrir opciones');
  }

  abrirPerfil() {
    console.log('Abrir perfil de notificaciones');
  }
}
