import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro-direccion',
  templateUrl: './registro-direccion.page.html',
  styleUrls: ['./registro-direccion.page.scss'],
})
export class RegistroDireccionPage implements OnInit {

  registro = {
    direccion: '',
    colonia: '',
    ciudad: '',
    estado: '',
    pais: ''
  };

  constructor(private menuCtrl: MenuController, private auth: AuthService, private router: Router) { }

  ngOnInit() {
    this.ionViewWillEnter();
  }

  ionViewWillEnter() {
    this.menuCtrl.enable(false);
  }

  Registrar() {
    console.log(this.registro );
    this.router.navigate(['/bienvenido']);
    // this.onSubmitRegister();
  }

  // onSubmitRegister() {
  //   this.auth.register(this.registro.direccion, this.registro.colonia,
  //     this.registro.ciudad, this.registro.estado, this.registro.pais).then( auth => {
  //     this.router.navigate(['/bienvenido']);
  //     console.log(this.registro);
  //   }).catch(err => console.log(err));
  // }
}
