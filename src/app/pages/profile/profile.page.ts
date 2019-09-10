import { Component, OnInit } from '@angular/core';
import { MenuController, ModalController } from '@ionic/angular';
import { EditarDescripcionComponent } from '../../components/editar-descripcion/editar-descripcion.component';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  progreso = 0.5*10;
  constructor(private menuCtrl: MenuController, private modalCtrl: ModalController) { }

  ngOnInit() {
    this.ionViewWillEnter();
    
  }

  ionViewWillEnter() {
    this.menuCtrl.enable(false);
  }

  async cambiarDescripcion() {
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
