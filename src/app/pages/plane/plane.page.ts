import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { NuevoPlaneComponent } from '../../components/nuevo-plane/nuevo-plane.component';

@Component({
  selector: 'app-plane',
  templateUrl: './plane.page.html',
  styleUrls: ['./plane.page.scss'],
})
export class PlanePage implements OnInit {

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

  constructor( private modalCtrl: ModalController) { }

  ngOnInit() {
  }

  async nuevoPlane() {
    const modal = await this.modalCtrl.create({
    component: NuevoPlaneComponent,
    componentProps: { value: 123 },
    cssClass: 'newPlane'
    });
  
    await modal.present();
  
  }

}
