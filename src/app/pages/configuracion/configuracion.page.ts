import { Component, OnInit } from '@angular/core';
import { MenuController, ModalController } from '@ionic/angular';
import { EditarDescripcionComponent } from '../../components/editar-descripcion/editar-descripcion.component';

@Component({
  selector: 'app-configuracion',
  templateUrl: './configuracion.page.html',
  styleUrls: ['./configuracion.page.scss'],
})
export class ConfiguracionPage implements OnInit {

  constructor(private menuCtrl: MenuController, private modalCtrl: ModalController) { }

  ngOnInit() {
    this.ionViewWillEnter();
  }

  ionViewWillEnter() {
    this.menuCtrl.enable(false);
  }

  async editarNombre() {
    const editarDescripcion = await this.modalCtrl.create({
      component: EditarDescripcionComponent,
      componentProps: {
        value: 123
      },
      cssClass: 'editarDescripcion'
    });
    return await editarDescripcion.present();
  }


}
