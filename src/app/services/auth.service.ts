import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { promise } from 'protractor';
import { Router } from '@angular/router';
import { auth } from 'firebase';
import { AngularFirestore } from '@angular/fire/firestore';
import { userInfo } from 'os';
import { map } from 'rxjs/operators';

export interface infUsuario {
  Nombre : string
  Apellido : string
  Sexo : string
  Edad : string
  id: string;

}


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private AFauth: AngularFireAuth, private router: Router,
              private db: AngularFirestore) { }

  login(email: string, password: string) {

    return new Promise((resolve, rejected) => {
      this.AFauth.auth.signInWithEmailAndPassword(email, password).then(user => {
        resolve(user);
      }).catch(err => rejected(err));
    });
  }

  logout() {
    this.AFauth.auth.signOut().then(() => {
      this.router.navigate(['/login']);
    });
  }

  register(email: string, password: string, Nombre: string, Apellido: string, Sexo : string, FechaNacimiento) {
    return new Promise((resolve, reject) => {
      this.AFauth.auth.createUserWithEmailAndPassword(email, password).then(res => {
        const uid = res.user.uid;
        this.db.collection('usuarios').doc(uid).set({
          Nombre,
          Apellido,
          Sexo,
          FechaNacimiento
        });
        resolve(res);
      }).catch(err => reject(err));
    });
  }

    getUserInfo( usuarioIdD : string){
      return this.db.collection('usuarios').doc(usuarioIdD).valueChanges();
    }

    // getUserUid()
    // {
    //   return this.AFauth.auth.currentUser.uid;
    // }
}
