import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-nuevo-post',
  templateUrl: './nuevo-post.component.html',
  styleUrls: ['./nuevo-post.component.scss'],
})
export class NuevoPostComponent implements OnInit {

  completed = false;

  post = {
    titulo: '',
    descripcion: '',
    url: '',
    imagen: '',
    categorias :
    [
      {
        name: 'salud',
        color: 'primary',
        selected: false
      },
      {
        name: 'bienestar',
        color: 'secondary',
        selected: false
      },
      {
        name: 'jejox',
        color: 'tertiary',
        selected: false
      }
    ]
  };

  constructor( private modalCtrl: ModalController) { }

  ngOnInit() {}

  closeChat() {
    this.modalCtrl.dismiss();
  }

  onClick( check ) {
    console.log(check.name);
  }

  publicar(event) {
    console.log(this.post, event);
    // console.log(this.post.categorias);
    this.modalCtrl.dismiss();
  }
}
