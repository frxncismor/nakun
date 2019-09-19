import { Injectable } from '@angular/core';
import { AngularFirestore} from '@angular/fire/firestore';
import { map } from 'rxjs/operators';
import { AngularFireStorage } from '@angular/fire/storage';
import { finalize } from 'rxjs/operators';
import { Observable } from 'rxjs';

export interface noticia {
  id: string;
  img: string;
  ulr: string;
  categoria: string;
  color: string;
  icono: string;
  nombre: string;
  titulo: string ;
  descripcion: string;
}

@Injectable({
  providedIn: 'root'
})
export class NoticiasService {


  constructor(private dbnoticias: AngularFirestore, private storage: AngularFireStorage) { }

  uploadPercent: Observable<number>;
  urlImage: Observable<string>;
  cosa: string;

  getNoticias() {
    return this.dbnoticias.collection('Noticias').snapshotChanges().pipe(map(noticias => {
      return noticias.map( a => {
        const data = a.payload.doc.data() as noticia;
        data.id = a .payload.doc.id;
        return data;
      });
    }));
  }

  setNewPost(titulo: string, descripcion: string, nombre: string,
             url: string, img: string, categoria: string, color: string, icono: string) {
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
    });
  }

}
