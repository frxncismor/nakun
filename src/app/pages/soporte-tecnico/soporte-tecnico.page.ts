import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';

@Component({
  selector: 'app-soporte-tecnico',
  templateUrl: './soporte-tecnico.page.html',
  styleUrls: ['./soporte-tecnico.page.scss'],
})
export class SoporteTecnicoPage implements OnInit {

  // url: 'm.me/324037488532225';
  constructor(private menuCtrl: MenuController, private iab: InAppBrowser) { }

  ngOnInit() {
    this.ionViewWillEnter();
  }

  ionViewWillEnter() {
    this.menuCtrl.enable(false);
  }

  // abrirBot() {
  //   const browser = this.iab.create('m.me/324037488532225');
  // }

}
