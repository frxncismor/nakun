import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';

export interface noticia {
  id : String,
  img : String,
  nombre : String,
  titulo : String ,
  descripcion : String
}

@Injectable({
  providedIn: 'root'
})
export class NoticiasService {

  constructor(private dbnoticias : AngularFirestore) { }

  getNoticias(){
    return this.dbnoticias.collection('Noticias').snapshotChanges().pipe(map(noticias => {
      return noticias.map( a => {
        const data = a.payload.doc.data() as noticia;
        data.id = a .payload.doc.id;
        return data;
      })
    }))
  }

  setNewPost(titulo : String, descripcion : String, nombre : string)
  {
    this.dbnoticias.collection('Noticias').doc('prueba').set({
      titulo,
      descripcion,
      nombre,
    })
  }

}
