import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalController, IonList, ToastController } from '@ionic/angular';
import { ChatComponent } from '../../components/chat/chat.component';
import { ServiceService } from '../../services/service.service';
import { Contacto } from '../../interfaces/interfaces';
import { FirebaseApp } from '@angular/fire';
import { AuthService } from '../../services/auth.service';


@Component({
  selector: 'app-chat',
  templateUrl: './chat.page.html',
  styleUrls: ['./chat.page.scss'],
})
export class ChatPage implements OnInit {

  US: any = [];
  userId: any;

  @ViewChild('lista', {static: false}) lista: IonList;


  textoBuscar = '';
  contactos: any [] = [];

  currentUser = 'Stan Lee';
  newMsg = '';

  constructor( private modalCtrl: ModalController, private dataService: ServiceService,
               public fb: FirebaseApp,
               public auth: AuthService,
               private toastController: ToastController) { }

  ngOnInit() {
    this.ionViewWillEnter();
    this.CurrentUser();
  }

  ionViewWillEnter() {

      this.dataService.getContacts().subscribe( contactos => {
        console.log(contactos);
        this.contactos = contactos;
      });

  }

  CurrentUser() {
    this.fb.auth().onAuthStateChanged( user => {
      if (user) {
        this.userId = user.uid;
        console.log('bien');
        this.traerInformacion();
      }
    });
  }

  traerInformacion() {
    this.auth.getUserInfo(this.userId).subscribe(US => {
      console.log(US);
      this.US = US;
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
      this.presentToast();
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

  async presentToast() {
    const toast = await this.toastController.create({
      color: 'dark',
      duration: 2000,
      message: 'Se ha eliminado una conversación',
      showCloseButton: true
    }).then( toast => {
      toast.present();
    });
    
  }
}
