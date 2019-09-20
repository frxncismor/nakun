import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { NoticiasService } from '../../services/noticias.service';
import { AngularFireStorage } from '@angular/fire/storage';
import { finalize } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { FirebaseApp } from '@angular/fire';
import { AuthService } from '../../services/auth.service';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';

declare var window: any;

@Component({
  selector: 'app-nuevo-post',
  templateUrl: './nuevo-post.component.html',
  styleUrls: ['./nuevo-post.component.scss'],
})
export class NuevoPostComponent implements OnInit {
  NOMBRE: string;
  completed = false;

  tempImages: string[] = [];

  post = {
    nombre: '',
    titulo: '',
    descripcion: '',
    url: '',
    imagen: '',
    categoria:
      [
        {
          name: 'Relaciones',
          color: 'primary',
          selected: false,
          icon: 'heart'
        },
        {
          name: 'Familia',
          color: 'secondary',
          selected: false,
          icon: 'contacts'
        },
        {
          name: 'Trabajo',
          color: 'tertiary',
          selected: false,
          icon: 'flask'
        }
      ]
  };

  US: any = [];
  userId: any;


  constructor(private modalCtrl: ModalController,
    public noticiasS: NoticiasService,
    private storage: AngularFireStorage,
    private fb: FirebaseApp,
    private auth: AuthService,
    private camera: Camera
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
    this.fb.auth().onAuthStateChanged(user => {
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

  onClick(check) {
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
    const options: CameraOptions = {
      quality: 60,
      destinationType: this.camera.DestinationType.FILE_URI,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      correctOrientation: true,
      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY
    };
    this.procesarImagen(options);
    console.log('Galeria');
  }

  camara() {
    const options: CameraOptions = {
      quality: 60,
      destinationType: this.camera.DestinationType.FILE_URI,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      correctOrientation: true,
      sourceType: this.camera.PictureSourceType.CAMERA
    };
    this.procesarImagen(options);


    console.log('Camara');
  }

  procesarImagen(options: CameraOptions) {

    const result = this.camera.getPicture(options)
    const pictures = this.storage.ref('pictures/');
    const image = 'data:image/jpeg;base64,${result}';
    pictures.putString(image, 'data_url');

    /*this.camera.getPicture(options).then((imageData) => {
      // imageData is either a base64 encoded string or a file URI
      // If it's base64 (DATA_URL):
      const img = window.Ionic.WebView.convertFileSrc(imageData);
      console.log(img);
      this.tempImages.push(img);
    }, (err) => {
      // Handle error
    });
  }*/

}
