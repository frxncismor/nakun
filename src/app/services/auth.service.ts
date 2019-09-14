import { Injectable } from '@angular/core';
import { AngularFireAuth } from "@angular/fire/auth";
import { promise } from 'protractor';
import { Router } from "@angular/router";
import { auth } from 'firebase';
import { AngularFirestore } from "@angular/fire/firestore";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private AFauth : AngularFireAuth, private router : Router,
    private db: AngularFirestore) { }

  login(email:string, password:string){

    return new Promise((resolve, rejected) => {
      this.AFauth.auth.signInWithEmailAndPassword(email, password).then(user => {
        resolve(user);
      }).catch(err => rejected(err));
    });
  }

  logout(){
    this.AFauth.auth.signOut().then(()=> {
      this.router.navigate(['/login']);
    });
  }

  register(email: string, password: string, nombre: string, apellido: string){
    return new Promise((resolve, reject) => {
      this.AFauth.auth.createUserWithEmailAndPassword(email, password).then(res => {
        const uid = res.user.uid;
        this.db.collection('usuarios').doc(uid).set({
          uid :uid,
          nombre : nombre,
          apellido : apellido
        })
        resolve(res);
      }).catch(err => reject(err));
    })
   
  }
}
