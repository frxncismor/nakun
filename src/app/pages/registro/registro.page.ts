import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  
  seleccionSexo(ev:any){
    console.log('Seleccion sexo', ev);
  }

  constructor() { }

  ngOnInit() {
  }

}
