import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class NoticiasService {

  constructor(private dbnoticias : AngularFirestore) { }

  getNoticias(){
    return this.dbnoticias.collection('Noticias').snapshotChanges()
  }
}
