import { Component, OnInit } from '@angular/core';

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
  diaNaci: Date = new Date();

  registro = {
    nombre: '',
    apellido: '',
    email: '',
    password: '',
    fechaNaci : new Date(),
    sexo: ''
  };

  constructor() { }

  ngOnInit() {
    this.customPickerOptions = {
      buttons: [{
        text: 'Listo',
        handler: (evento) => {
          console.log('Listo');
          console.log(evento);
          console.log('Fecha de nacimiento: ' + evento.day.value + ' ' + evento.month.value + ' ' + evento.year.value);

        }
      }]
    };
  }

  cambioFecha( event ) {
    console.log('ionChange', event);
    console.log('Date', new Date(event.detail.value)); // convertir fecha a javascript
    // this.fechaNaci = new Date(event.detail.value);
  }

  Registrar() {
    console.log(this.registro);
  }

  seleccionSexo(ev: any) {
    this.sexo = ev.detail.value;
  }

}
