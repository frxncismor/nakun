import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

import { AuthService } from "../../services/auth.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  usuario = {
    email: '',
    password: ''
  };

  //email: string;
  //password: string;

  constructor(private menuCtrl: MenuController, private authservice: AuthService, public router : Router) { }

  ngOnInit() {
    this.ionViewWillEnter();
  }

  ionViewWillEnter() {
    this.menuCtrl.enable(false);
  }

  //Login() {
  //  console.log(this.usuario);
  //}

  onSubmitLogin(){
    this.authservice.login(this.usuario.email, this.usuario.password).then( res => {
      this.router.navigate(["/tabs/home"]);
    }).catch(err => alert("Los datos son incorrectos o no existe el usuario"));
  }
}
