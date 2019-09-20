import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import {NoticiasService} from '../../services/noticias.service';
import { AngularFireStorage } from '@angular/fire/storage';
import { finalize } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { FirebaseApp } from '@angular/fire';
import { AuthService } from '../../services/auth.service';


@Component({
  selector: 'app-nuevo-post',
  templateUrl: './nuevo-post.component.html',
  styleUrls: ['./nuevo-post.component.scss'],
})
export class NuevoPostComponent implements OnInit {
  NOMBRE: string;
  completed = false;

  post = {
    nombre : '',
    titulo: '',
    descripcion: '',
    url: '',
    imagen: '',
    categoria :
    [
      {
        name: 'Relaciones',
        color: 'primary',
        selected: false,
        icon : 'heart'
      },
      {
        name: 'Familia',
        color: 'secondary',
        selected: false,
        icon : 'contacts'
      },
      {
        name: 'Trabajo',
        color: 'tertiary',
        selected: false,
        icon : 'flask'
      }
    ]
  };

  US: any = [];
  userId: any;


  constructor( private modalCtrl: ModalController,
               public  noticiasS: NoticiasService,
               private storage: AngularFireStorage,
               private fb: FirebaseApp,
               private auth: AuthService
               ) { }

  uploadPercent: Observable<number>;
  urlImage: Observable<string>;

  N2file: any;
  N2filepAth: any;

  imgUrlpost: string;

  IconoNot: string;
  colNot: string;
  catNot: string;

  ngOnInit() {
    this.CurrentUser();
  }

  CurrentUser() {
    this.fb.auth().onAuthStateChanged( user => {
      if (user) {
        this.userId = user.uid;
        console.log('bien');
        this.traerInformacion();
      }
    });
  }

  traerInformacion() {
    this.auth.getUserInfo(this.userId).subscribe(US => {
      console.log(US);
      this.US = US;
      this.NOMBRE = this.US.Nombre + ' ' + this.US.Apellido;
      console.log(this.NOMBRE);
    });
  }

  onSelectImg(e) {
    console.log('subir', e.target.files[0]);
    const id = Math.random().toString(36).substring(2);
    const file = e.target.files[0];
    const filePath = 'NoticiasIMG/' + id;
    /*this.N2file = Nfile;
    this.N2filepAth = NfilePath;

    this.noticiasS.setImgPost(Nfile,NfilePath);*/
    const ref = this.storage.ref(filePath);
    const task = this.storage.upload(filePath, file);
    this.uploadPercent = task.percentageChanges();
    task.snapshotChanges().pipe(finalize(() => this.urlImage = ref.getDownloadURL())).subscribe();

    console.log(this.imgUrlpost);
  }

    closeChat() {
    this.modalCtrl.dismiss();
  }

    onClick( check ) {
    this.catNot = check.name;
    this.colNot = check.color;
    this.IconoNot = check.icon;
    console.log(this.catNot);
    console.log(this.colNot);
    console.log(this.IconoNot);

  }

    publicar() {
    console.log(this.post);
    // tslint:disable-next-line: max-line-length
    this.noticiasS.setNewPost(this.post.titulo, this.post.descripcion, this.NOMBRE, this.post.url, this.imgUrlpost, this.catNot, this.colNot, this.IconoNot);
    this.modalCtrl.dismiss();
  }

  galeria() {
    console.log('Galeria');
  }

  camara() {
    console.log('Camara');
  }

 
}
