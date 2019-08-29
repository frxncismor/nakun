import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-soporte-tecnico',
  templateUrl: './soporte-tecnico.page.html',
  styleUrls: ['./soporte-tecnico.page.scss'],
})
export class SoporteTecnicoPage implements OnInit {

  constructor(private menuCtrl: MenuController) { }

  ngOnInit() {
    this.ionViewWillEnter();
  }

  ionViewWillEnter() {
    this.menuCtrl.enable(false);
  }

}
