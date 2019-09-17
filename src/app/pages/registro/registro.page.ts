import { Component, OnInit } from '@angular/core';
import { MenuController, AlertController } from '@ionic/angular';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {
  toggleValue = false;
  fechaNaci: Date = new Date();
  customPickerOptions;
  sexo: any;
  birthday: any;
  profesional: any;
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
    sexo: '',
    profesional: false
  };

  /*nombre: string;
  apellido: string;
  email: string;
  password: string;*/


  constructor(private menuCtrl: MenuController, private auth: AuthService, private router: Router, private alertCtrl: AlertController) { }

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

  Registrar() {
    
    // tslint:disable-next-line: max-line-length
    if ((this.registro.nombre === '') || (this.registro.apellido === '') || (this.registro.email === '') || (this.registro.password === '') || (this.registro.fechaNaci.day === '') || (this.registro.fechaNaci.month === '') ||  (this.registro.fechaNaci.year === '') ||  (this.registro.sexo === ''))  {
      this.completarDatos();
     }  else {
      // console.log(this.registro);
      this.onSubmitRegister();
     }
  }

async completarDatos() {
  const alert = await this.alertCtrl.create({
    header: 'Datos incompletos',
    message: 'Favor de llenar todos los campos',
    buttons: ['OK']
  });

  alert.present();
}

  

  seleccionSexo(ev: any) {
    this.sexo = ev.detail.value;
    console.log(this.sexo);
  }


  onSubmitRegister() {
    this.auth.register(this.registro.email, this.registro.password,
      this.registro.nombre, this.registro.apellido, this.registro.sexo, this.registro.fechaNaci).then( auth => {
      this.router.navigate(['/bienvenido']);
      console.log(this.registro);
    }).catch(err => console.log(err))
  }




 async activatePopup() {
    const prompt = await this.alertCtrl.create({
      header: 'Ingrese código de confirmación',
      message: 'Autentifique que es un profesional',
      inputs: [
        {
          name: 'codigo',
          placeholder: 'Código'
        },
      ],
      buttons: [
        {
          text: 'Cancelar',
          handler: data => {
            console.log('Cancel clicked');
            this.toggleValue = false;
          }
        },
        {
          text: 'Confirmar',
          handler: data => {
            console.log('Saved clicked');
            this.profesional = true;
          }
        }
      ]
    });

// not sure why need to be "===" and not just a single "="
    if (this.toggleValue === true) {
    prompt.present();
  }
  }




}
