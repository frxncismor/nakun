import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-editar-descripcion',
  templateUrl: './editar-descripcion.component.html',
  styleUrls: ['./editar-descripcion.component.scss'],
})
export class EditarDescripcionComponent implements OnInit {

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {}

  cancelar() {
    this.modalCtrl.dismiss();
  }

}
