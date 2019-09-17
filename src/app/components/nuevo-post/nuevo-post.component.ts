import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import {NoticiasService} from '../../services/noticias.service';
import { AngularFireStorage } from '@angular/fire/storage';
import { finalize } from 'rxjs/operators';
import { Observable } from 'rxjs';

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
    categoria :
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

  constructor( private modalCtrl: ModalController,public  noticiasS: NoticiasService, private storage : AngularFireStorage) { }
  uploadPercent : Observable<number>;
  urlImage : Observable<string>;

  N2file : any;
  N2filepAth : any;

  imgUrlpost : string;

  ngOnInit() {}

  onSelectImg(e){
    console.log('subir',e.target.files[0]);
    const id = Math.random().toString(36).substring(2);
    const file = e.target.files[0];
    const filePath = 'NoticiasIMG/'+id;
    /*this.N2file = Nfile;
    this.N2filepAth = NfilePath;

    this.noticiasS.setImgPost(Nfile,NfilePath);*/
    const ref = this.storage.ref(filePath);
    const task = this.storage.upload(filePath, file);
    this.uploadPercent = task.percentageChanges();
    task.snapshotChanges().pipe(finalize(() => this.urlImage = ref.getDownloadURL())).subscribe();
    
    console.log(this.imgUrlpost)
  }

  closeChat() {
    this.modalCtrl.dismiss();
  }

  onClick( check ) {
    console.log(check);
  }

  publicar() {
    console.log(this.post);
    this.noticiasS.setNewPost(this.post.titulo,this.post.descripcion,this.post.nombre, this.N2file, this.N2filepAth, this.imgUrlpost);
    this.modalCtrl.dismiss();
  }
}
