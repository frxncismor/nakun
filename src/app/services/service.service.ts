import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Componente, Contacto, Notificaciones } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {



  constructor( private http: HttpClient) { }

  getMenuOptions() {
    return this.http.get<Componente[]>('/assets/data/menu.json');
  }

  getContacts() {
    return this.http.get<Contacto[]>('/assets/data/contactos.json');
  }

  getNotifications() {
    return this.http.get<Notificaciones[]>('/assets/data/notificaciones.json');
  }
}
