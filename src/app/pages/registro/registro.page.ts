import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  fechaNaci: Date = new Date();
  customPickerOptions;
  sexo: any;
  birthday: any;

  // diaNaci: Date = new Date();

  registro = {
    nombre: '',
    apellido: '',
    email: '',
    password: '',
    fechaNaci : {
      day: '',
      month: '',
      year: ''
    },
    sexo: ''
  };

  constructor(private menuCtrl: MenuController) { }

  ngOnInit() {
    this.ionViewWillEnter();

  }

  ionViewWillEnter() {
    this.menuCtrl.enable(false);
  }

  cambioFecha( event ) {
    this.fechaNaci = new Date(event.detail.value);
    // this.registro.fechaNaci.day = this.fechaNaci.getDate();
    // this.registro.fechaNaci.month = this.fechaNaci.getMonth();
    // this.registro.fechaNaci.year = this.fechaNaci.getFullYear();
  }

  Registrar() {
    console.log(this.registro);
  }

  seleccionSexo(ev: any) {
    this.sexo = ev.detail.value;
  }

}
