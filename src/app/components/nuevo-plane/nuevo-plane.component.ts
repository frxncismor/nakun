import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { PlaneService } from '../../services/plane.service';

@Component({
  selector: 'app-nuevo-plane',
  templateUrl: './nuevo-plane.component.html',
  styleUrls: ['./nuevo-plane.component.scss'],
})
export class NuevoPlaneComponent implements OnInit {

  plane = {
    mensaje: ''
  };

  constructor( private modalCtrl: ModalController,
               private planeService: PlaneService) { }

  ngOnInit() {}

  closeChat() {
    this.modalCtrl.dismiss();
  }

  publicar() {
    console.log('publicar');
    console.log(this.plane);
    this.planeService.setNewPlane(this.plane.mensaje);
    this.modalCtrl.dismiss();
  }

}
