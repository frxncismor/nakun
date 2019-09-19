import { Component, OnInit } from '@angular/core';
import { MenuController, ModalController, NavParams } from '@ionic/angular';
import { EditarDescripcionComponent } from '../../components/editar-descripcion/editar-descripcion.component';
import { AngularFirestore } from '@angular/fire/firestore';
import { AuthService, infUsuario } from '../../services/auth.service';
// import * as Firebase from 'firebase';
import { FirebaseAuth, FirebaseApp } from '@angular/fire';
import { FechaNacimiento } from '../../interfaces/interfaces';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss']
})
export class ProfilePage implements OnInit {
  public US: any = [];
  public UsAll = [];
  public userId: any;
  public infUsuarios: infUsuario;
  public usuario: any;
  fechanaci: FechaNacimiento;

  progreso = 0.5 * 10;
  constructor(
    private auth: AuthService,
    private menuCtrl: MenuController,
    private modalCtrl: ModalController,
    // private AnguFire: AngularFirestore,
    // private fbAuth: FirebaseAuth,
    // private navparams: NavParams,
    private fb: FirebaseApp
  ) {}

  ngOnInit() {
    this.CurrentUser();
    this.ionViewWillEnter();
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

    // this.usuario = this.navparams.get('NAKUN');
    // console.log(this.usuario);
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
