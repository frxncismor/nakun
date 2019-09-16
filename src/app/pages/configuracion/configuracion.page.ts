import { Component, OnInit } from '@angular/core';
import { MenuController, ModalController } from '@ionic/angular';
import { EditarDescripcionComponent } from '../../components/editar-descripcion/editar-descripcion.component';
import { Usuario } from '../../interfaces/interfaces';
import { ServiceService } from '../../services/service.service';

@Component({
  selector: 'app-configuracion',
  templateUrl: './configuracion.page.html',
  styleUrls: ['./configuracion.page.scss'],
})
export class ConfiguracionPage implements OnInit {

  public usuario: any = [];
 

  constructor(private menuCtrl: MenuController, private modalCtrl: ModalController, private dataService: ServiceService) { }

  ngOnInit() {
    this.ionViewWillEnter();
  }

  ionViewWillEnter() {
    this.menuCtrl.enable(false);

    this.dataService.getUsuario().subscribe( resp => {
      this.usuario = resp;
      console.log(resp);
    });
  }

  async editarNombre() {
    const modal = await this.modalCtrl.create({
      component: EditarDescripcionComponent,
      componentProps: {
        titulo: 'Nombre',
        cambio: this.usuario.nombre
      },
      cssClass: 'editarDescripcion'
    });
    await modal.present();
    const { data } = await modal.onDidDismiss();
    console.log('lo que me regresa', data);
  }

  async editarApellidoPaterno() {
    const modal = await this.modalCtrl.create({
      component: EditarDescripcionComponent,
      componentProps: {
        titulo: 'Apellido Paterno',
        cambio: this.usuario.apellidoPaterno
      },
      cssClass: 'editarDescripcion'
    });
    await modal.present();
    const { data } = await modal.onDidDismiss();
    console.log('lo que me regresa', data);
  }

  async editarApellidoMaterno() {
    const modal = await this.modalCtrl.create({
      component: EditarDescripcionComponent,
      componentProps: {
        titulo: 'Apellido Materno',
        cambio: this.usuario.apellidoMaterno
      },
      cssClass: 'editarDescripcion'
    });
    await modal.present();
    const { data } = await modal.onDidDismiss();
    console.log('lo que me regresa', data);
  }

  async editarEdad() {
    const modal = await this.modalCtrl.create({
      component: EditarDescripcionComponent,
      componentProps: {
        titulo: 'Edad',
        cambio: this.usuario.edad
      },
      cssClass: 'editarDescripcion'
    });
    await modal.present();
    const { data } = await modal.onDidDismiss();
    console.log('lo que me regresa', data);
  }

  async editarCorreoElectronico() {
    const modal = await this.modalCtrl.create({
      component: EditarDescripcionComponent,
      componentProps: {
        titulo: 'Email',
        cambio: this.usuario.email
      },
      cssClass: 'editarDescripcion'
    });
    await modal.present();
    const { data } = await modal.onDidDismiss();
    console.log('lo que me regresa', data);
  }

  async editarPassword() {
    const modal = await this.modalCtrl.create({
      component: EditarDescripcionComponent,
      componentProps: {
        titulo: 'Contraseña',
        cambio: this.usuario.password
      },
      cssClass: 'editarDescripcion'
    });
    await modal.present();
    const { data } = await modal.onDidDismiss();
    console.log('lo que me regresa', data);
  }


}
