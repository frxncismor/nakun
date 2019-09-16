import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

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

  constructor(private menuCtrl: MenuController, private auth : AuthService, private router: Router) { }

  ngOnInit() {
    this.ionViewWillEnter();

  }

  ionViewWillEnter() {
    this.menuCtrl.enable(false);
  }

  cambioFecha( event ) {
    this.fechaNaci = new Date(event.detail.value);
    this.registro.fechaNaci.day = this.fechaNaci.getDate().toString();
    this.registro.fechaNaci.month = this.fechaNaci.getMonth().toString();
     this.registro.fechaNaci.year = this.fechaNaci.getFullYear().toString();
  }

  seleccionSexo(ev: any) {
    this.sexo = ev.detail.value;
  }

  onSubmitRegister() {
    this.auth.register(this.registro.email, this.registro.password,
      this.registro.nombre, this.registro.apellido, this.registro.sexo, this.registro.fechaNaci).then( auth => {
      this.router.navigate(['/bienvenido']);
      console.log(this.registro);
    }).catch(err => console.log(err))
  }

}
