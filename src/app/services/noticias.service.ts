import { Injectable } from '@angular/core';
import { AngularFirestore} from '@angular/fire/firestore';
import { map } from 'rxjs/operators';
import { AngularFireStorage } from '@angular/fire/storage';
import { finalize } from 'rxjs/operators';
import { Observable } from 'rxjs';

export interface noticia {
  id : String,
  img : String,
  ulr : string,
  categoria : string,
  color : string,
  icono : string,
  nombre : String,
  titulo : String ,
  descripcion : String
}

@Injectable({
  providedIn: 'root'
})
export class NoticiasService {


  constructor(private dbnoticias : AngularFirestore, private storage : AngularFireStorage) { }

  uploadPercent : Observable<number>;
  urlImage : Observable<string>;
  cosa : string;

  getNoticias(){
    return this.dbnoticias.collection('Noticias').snapshotChanges().pipe(map(noticias => {
      return noticias.map( a => {
        const data = a.payload.doc.data() as noticia;
        data.id = a .payload.doc.id;
        return data;
      })
    }))
  }
/*
  setImgPost(file : string, filePath : string)
  {
    const ref = this.storage.ref(filePath);
    const task = this.storage.upload(filePath, file);
    this.uploadPercent = task.percentageChanges();
    task.snapshotChanges().pipe(finalize(() => this.urlImage = ref.getDownloadURL())).subscribe();
  }*/

  setNewPost(titulo : String, descripcion : String, nombre : string,
              url : string, img : string, categoria : string, color : string, icono : string)
  {
    const NID = Math.random().toString(36).substring(2);
    this.dbnoticias.collection('Noticias').doc(NID).set({
      titulo,
      descripcion,
      nombre,
      url,
      img,
      categoria,
      color,
      icono
    })
  }

}
