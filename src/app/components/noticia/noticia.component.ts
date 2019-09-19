import { Component, OnInit, Input } from '@angular/core';
import { Article } from '../../interfaces/interfaces';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';

import { NoticiasService } from '../../services/noticias.service';
import { ToastController } from '@ionic/angular';



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

  constructor(private iab: InAppBrowser,
              public noticiasService: NoticiasService,
              private toastController: ToastController ) { }

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
    console.log(this.noticia);

    if (index > -1) {
      this.destacados.splice(index, 1);
      this.presentToast();
    }
  }

  async presentToast() {
    const toast = await this.toastController.create({
      color: 'dark',
      duration: 2000,
      message: 'Se ha eliminado un post',
      showCloseButton: true
    }).then( toast => {
      toast.present();
    });
    
  }
}
