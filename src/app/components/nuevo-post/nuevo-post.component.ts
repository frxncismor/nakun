import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import {NoticiasService} from '../../services/noticias.service';

@Component({
  selector: 'app-nuevo-post',
  templateUrl: './nuevo-post.component.html',
  styleUrls: ['./nuevo-post.component.scss'],
})
export class NuevoPostComponent implements OnInit {

  completed = false;

  post = {
    nombre : 'Stan Lee',
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

  constructor( private modalCtrl: ModalController,public  noticiasS: NoticiasService) { }

  ngOnInit() {}

  closeChat() {
    this.modalCtrl.dismiss();
  }

  onClick( check ) {
    console.log(check);
  }

  publicar() {
    console.log(this.post);
    this.noticiasS.setNewPost(this.post.titulo,this.post.descripcion,this.post.nombre);
    this.modalCtrl.dismiss();
  }
}
