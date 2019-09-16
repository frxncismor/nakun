import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Usuario } from '../../interfaces/interfaces';
import { ServiceService } from '../../services/service.service';

@Component({
  selector: 'app-editar-descripcion',
  templateUrl: './editar-descripcion.component.html',
  styleUrls: ['./editar-descripcion.component.scss'],
})
export class EditarDescripcionComponent implements OnInit {

  @Input() nombre;
  nuevo = '';

  constructor(private modalCtrl: ModalController, private dataService: ServiceService) { }

  ngOnInit() {

  }

  cancelar() {
    this.modalCtrl.dismiss();
  }

  guardar() {
    this.modalCtrl.dismiss({
      cambio: this.nuevo
    });
  }

}
