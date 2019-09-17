import { Component, OnInit } from '@angular/core';
import { MenuController, ModalController } from '@ionic/angular';
import { EditarDescripcionComponent } from '../../components/editar-descripcion/editar-descripcion.component';
import { AngularFirestore } from '@angular/fire/firestore';
import {AuthService, infUsuario} from '../../services/auth.service';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  public US : any;
  public UsAll = [];

  public infUsuarios : infUsuario; 

  progreso = 0.5 * 10;
  constructor(private auth: AuthService,private menuCtrl: MenuController, private modalCtrl: ModalController,
    private AnguFire : AngularFirestore) {

     }

  ngOnInit() {
    this.ionViewWillEnter();
    this.auth.getUserInfo(this.auth.getUserUid()).subscribe(US=> {
      console.log(US);
      this.US = US;
    })
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
  async editarDireccion() {
    const editarDescripcion = await this.modalCtrl.create({
      component: EditarDescripcionComponent,
      componentProps: {
        value: 123
      },
      cssClass: 'editarDescripcion'
    });
    return await editarDescripcion.present();
  }
  async editarColonia() {
    const editarDescripcion = await this.modalCtrl.create({
      component: EditarDescripcionComponent,
      componentProps: {
        value: 123
      },
      cssClass: 'editarDescripcion'
    });
    return await editarDescripcion.present();
  }
  async editarCiudad() {
    const editarDescripcion = await this.modalCtrl.create({
      component: EditarDescripcionComponent,
      componentProps: {
        value: 123
      },
      cssClass: 'editarDescripcion'
    });
    return await editarDescripcion.present();
  }
  async editarPais() {
    const editarDescripcion = await this.modalCtrl.create({
      component: EditarDescripcionComponent,
      componentProps: {
        value: 123
      },
      cssClass: 'editarDescripcion'
    });
    return await editarDescripcion.present();
  }

  delete(item) {
    console.log('Borrar', item);
  }

  cambiarFoto() {
    console.log('Cambiar foto');
  }




}
