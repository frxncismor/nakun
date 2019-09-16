import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// tslint:disable-next-line: max-line-length
import { Componente, Contacto, Notificaciones, RespuestaTopHeadlines, Profesional, RespuestaProfesionales, Usuario } from '../interfaces/interfaces';
import { delay } from 'q';

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

  getNoticias() {
    return this.http.get<RespuestaTopHeadlines>('/assets/data/noticias.json');
  }

  getProfesionales() {
    return this.http.get<RespuestaProfesionales>('/assets/data/profesionales.json');
  }

  getUsuario() {
    return this.http.get<Usuario>('/assets/data/usuario.json');
  }
}
