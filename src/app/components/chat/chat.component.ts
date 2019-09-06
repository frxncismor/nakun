import { Component, OnInit, Input } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';
import { Observable } from 'rxjs';
import { Contacto } from '../../interfaces/interfaces';
import { ServiceService } from '../../services/service.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss'],
})
export class ChatComponent implements OnInit {

  @Input() name;
  nombre: any;

  constructor( private modalCtrl: ModalController, private dataService: ServiceService, private navParams: NavParams) { }

  ngOnInit() {
    this.navParams.get('contacto');
    console.log('Esto es un chat que no funciona :`c');

  }

  closeChat() {
    this.modalCtrl.dismiss();
  }

  // enviar() {
  //   const mensaje : Message = {
  //     content: this.msg,
  //     type: 'text',
  //     date: new Date()
  //   }

  //   this.msg = "";
  // }

  abrirPerfil() {
    console.log('Abrir perfil');
  }

  opciones() {
    console.log('opciones');
  }
}
