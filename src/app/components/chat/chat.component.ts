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

  constructor( private modalCtrl: ModalController, private dataService: ServiceService, private navParams: NavParams) { }

  ngOnInit() {
   console.log( this.navParams.get('contacto'));
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
