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
    profesional: false,
    premium: false
  };

  constructor(private menuCtrl: MenuController, private auth: AuthService, private router: Router, private alertCtrl: AlertController) { }

  imgAvi: string;
  imgAviGirl = 'https://firebasestorage.googleapis.com/v0/b/nakun-firebase-bd.appspot.com/o/Avatars%2Fgirl%20(1).svg?alt=media&token=634d6311-1381-4d54-b691-04ed4dd75a39';
  imgAviBoy: string = 'https://firebasestorage.googleapis.com/v0/b/nakun-firebase-bd.appspot.com/o/Avatars%2Fboy.svg?alt=media&token=04d5d515-dd46-40f2-9a65-f5da077b394d';
  codigoProfesional : string ='EQXR34982';
  public code : any =[];
  codup : string;

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
    if (this.sexo =='Hombre') {
      this.imgAvi = this.imgAviBoy;
    } else {
      this.imgAvi = this.imgAviGirl;
    }
    console.log(this.imgAvi);
  }


  onSubmitRegister() {
    this.auth.register(this.registro.email, this.registro.password,
      this.registro.nombre, this.registro.apellido, this.registro.sexo, this.registro.fechaNaci, this.imgAvi, this.registro.profesional, this.registro.premium).then( auth => {
      this.router.navigate(['/registro-direccion']);
      console.log(this.registro);
    }).catch(function(err) {
      let errorcode = err.code;
      let errormessage = err.message;
      console.log(errorcode);
    });
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
            this.profesional = false;
            console.log(this.profesional);
          }
        },
        {
          text: 'Confirmar',
          handler: (code) => {
            this.codup = code.codigo;

            if (this.codup.toUpperCase() === this.codigoProfesional) {
              this.profesional = true;
              this.toggleValue = true;
              //console.log( 'codigo: ', code.codigo, 'profesional: ', this.profesional, this.codigoProfesional);
              //console.log('Profesional :',this.codigoProfesional);
            } 
            else {
             this.profesional = false;
             this.toggleValue = false;
             //console.log('codigo: ',code.codigo, 'profesional: ', this.profesional);
             //console.log(this.codigoProfesional);
             }
          }
        }
      ]
    });

    // '=' asignación
    // '==' comparación de valor
    // '===' comparación de valor y tipo de dato
    if (this.toggleValue === true) {
    prompt.present();
  }
  }




}
