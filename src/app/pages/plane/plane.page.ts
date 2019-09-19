import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { NuevoPlaneComponent } from '../../components/nuevo-plane/nuevo-plane.component';
import { FirebaseApp } from '@angular/fire';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-plane',
  templateUrl: './plane.page.html',
  styleUrls: ['./plane.page.scss'],
})
export class PlanePage implements OnInit {
  US: any = [];
  userId: any;
  ocultar = '';

  slides: { img: string, desc: string }[] = [
    {
      img: '/assets/user-6.svg',
      desc: 'En la vida hay tacos'
    },
    {
      img: '/assets/user-6.svg',
      desc: 'En la vida hay morritas góticas asfdfadgdagadgfdgadf'
    },
    {
      img: '/assets/user-6.svg',
      desc: 'Mensaje motivacional'
    },
    {
      img: '/assets/user-6.svg',
      desc: 'Mensaje motivacional'
    },
    {
      img: '/assets/user-6.svg',
      desc: 'Mensaje motivacional'
    },
    {
      img: '/assets/user-6.svg',
      desc: 'Mensaje motivacional'
    }
  ];

  constructor( private modalCtrl: ModalController, private fb: FirebaseApp, private auth: AuthService) { }

  ngOnInit() {
    this.CurrentUser();
  }

  async nuevoPlane() {
    const modal = await this.modalCtrl.create({
    component: NuevoPlaneComponent,
    componentProps: { value: 123 },
    cssClass: 'newPlane'
    });
  
    await modal.present();
  
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

}
