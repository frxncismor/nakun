import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

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

  constructor(private menuCtrl: MenuController) { }

  ngOnInit() {
    this.ionViewWillEnter();
  }

  ionViewWillEnter() {
    this.menuCtrl.enable(false);
  }

  Registrar() {
    console.log(this.registro );
  }
}
