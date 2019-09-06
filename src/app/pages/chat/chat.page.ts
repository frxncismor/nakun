import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalController, IonList } from '@ionic/angular';
import { ChatComponent } from '../../components/chat/chat.component';
import { Observable } from 'rxjs';
import { Contacto } from '../../interfaces/interfaces';
import { ServiceService } from '../../services/service.service';


@Component({
  selector: 'app-chat',
  templateUrl: './chat.page.html',
  styleUrls: ['./chat.page.scss'],
})
export class ChatPage implements OnInit {

  @ViewChild('lista', {static: false}) lista: IonList;

  contactos: Observable<Contacto[]>;

  constructor( private modalCtrl: ModalController, private dataService: ServiceService) { }

  ngOnInit() {
    this.contactos = this.dataService.getContacts();
  }

  abrirChat() {
    // const modal = await
    this.modalCtrl.create({
    component: ChatComponent,
    componentProps: { 
      contacto: this.dataService.getContacts.name,
      // name: this.dataService.getContacts.arguments.name,
      // img: this.contactos.,
    }
    }).then( (modal) => modal.present());

    // await modal.present();

  }
  delete() {
    console.log('borrar');
    // this.lista.closeSlidingItems();
  }

  menu(user) {
    console.log('menu');
    // this.lista.closeSlidingItems();
  }
}
