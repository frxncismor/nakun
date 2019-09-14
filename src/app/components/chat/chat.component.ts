import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { ModalController, NavParams, IonContent } from '@ionic/angular';
import { Observable } from 'rxjs';
import { Contacto } from '../../interfaces/interfaces';
import { ServiceService } from '../../services/service.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss'],
})
export class ChatComponent implements OnInit {

  public chat: any;
  public chatRoom: any;

  newMsg = '';
  currentUser = 'StanLee';

  messages = [
    {
      user: 'StanLee',
      createdAt: 1554090856000,
      msg: 'Hey whats up mate?'
    },
    {
      user: 'Spider Man',
      createdAt: 1554090956000,
      msg: 'Working on the ionic mission, you?'
    },
    {
      user: 'StanLee',
      createdAt: 1554091056000,
      msg: 'Doing some new tutorial stuff'
    }
  ];
  
  @ViewChild(IonContent, {static: true}) content: IonContent;

  constructor( private modalCtrl: ModalController, private dataService: ServiceService, private navParams: NavParams) { }

  ngOnInit() {
    this.dataService.getContacts().subscribe( chatroom => {
      console.log(chatroom);
      this.chatRoom = chatroom;
    });

    this.chat = this.navParams.get('contactos');

  }

  sendMessage() {
    this.messages.push({
      user: 'StanLee',
      createdAt: new Date().getTime(),
      msg: this.newMsg
    });

    this.newMsg = '';


    setTimeout(() => {
      this.content.scrollToBottom(100);
    });
    
  }

  closeChat() {
    this.modalCtrl.dismiss();
  }

  abrirPerfil() {
    console.log('Abrir perfil');
  }

  opciones() {
    console.log('opciones');
  }
}
