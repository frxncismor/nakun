import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-comunidad',
  templateUrl: './comunidad.page.html',
  styleUrls: ['./comunidad.page.scss'],
})
export class ComunidadPage implements OnInit {

  constructor(private menuCtrl: MenuController) { }

  ngOnInit() {
    this.ionViewWillEnter();
  }

  ionViewWillEnter() {
    this.menuCtrl.enable(false);
  }
}
