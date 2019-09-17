import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-nuevo-plane',
  templateUrl: './nuevo-plane.component.html',
  styleUrls: ['./nuevo-plane.component.scss'],
})
export class NuevoPlaneComponent implements OnInit {

  plane = {
    mensaje: ''
  };

  constructor( private modalCtrl: ModalController) { }

  ngOnInit() {}

  closeChat() {
    this.modalCtrl.dismiss();
  }

  publicar() {
    console.log('publicar');
    console.log(this.plane);
    this.modalCtrl.dismiss();
  }

}
