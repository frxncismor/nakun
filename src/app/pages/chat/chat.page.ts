import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalController, IonList } from '@ionic/angular';
import { ChatComponent } from '../../components/chat/chat.component';
import { ServiceService } from '../../services/service.service';
import { Contacto } from '../../interfaces/interfaces';


@Component({
  selector: 'app-chat',
  templateUrl: './chat.page.html',
  styleUrls: ['./chat.page.scss'],
})
export class ChatPage implements OnInit {

  @ViewChild('lista', {static: false}) lista: IonList;


  textoBuscar = '';
  contactos: any [] = [];

  constructor( private modalCtrl: ModalController, private dataService: ServiceService) { }

  ngOnInit() {
     this.dataService.getContacts().subscribe( contactos => {
      console.log(contactos);
      this.contactos = contactos;
    });
  }

  abrirChat(Contacto) {

    this.modalCtrl.create({
    component: ChatComponent,
    componentProps: {
      chat: Contacto,
    }
    }).then( (modal) => modal.present());

  }
  delete(contacto) {
    console.log('borrar');
    const index = this.contactos.indexOf(contacto);

    if (index > -1) {
      this.contactos.splice(index, 1);
      }
    // this.lista.closeSlidingItems();
  }

  menu(user) {
    console.log('menu');
    // this.lista.closeSlidingItems();
  }

  buscar(event) {
    this.textoBuscar = event.detail.value;
  }
}
