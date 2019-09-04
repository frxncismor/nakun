import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
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
}
