import { Injectable } from '@angular/core';
import { AngularFirestore} from '@angular/fire/firestore';
import { map } from 'rxjs/operators';
import { AngularFireStorage } from '@angular/fire/storage';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class PlaneService {

  
  constructor( private db: AngularFirestore, private AFauth: AngularFireAuth) { }

  setNewPlane(Mensaje: string) {
    const uid = this.AFauth.auth.currentUser.uid;
    this.db.collection('Plane').doc(uid).set({
      Mensaje
    });
  }

  getPlane() {
    return this.db.collection('Plane').valueChanges();
  }
}
