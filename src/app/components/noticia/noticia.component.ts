import { Component, OnInit, Input } from '@angular/core';
import { Article } from '../../interfaces/interfaces';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';

import { NoticiasService } from '../../services/noticias.service';



@Component({
  selector: 'app-noticia',
  templateUrl: './noticia.component.html',
  styleUrls: ['./noticia.component.scss'],
})
export class NoticiaComponent implements OnInit {

  @Input() noticia: any = [];
  @Input() indice: number;
  @Input() destacados: any = [];

 // public noticiasReg: any = [];

  constructor(private iab: InAppBrowser, public noticiasService: NoticiasService) { }

  ngOnInit() {
  }

  abrirNoticia() {
    const browser = this.iab.create(this.noticia.url, '_system');
  }

  share() {
    console.log('compartir');
  }

  borrar() {
    console.log('borrar');
    const index = this.destacados.indexOf(this.noticia);

    if (index > -1) {
      this.destacados.splice(index, 1);
    }
  }
}
