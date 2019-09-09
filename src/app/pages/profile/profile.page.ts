import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  progreso = 0.5*10;
  constructor(private menuCtrl: MenuController) { }

  ngOnInit() {
    this.ionViewWillEnter();
    
  }

  ionViewWillEnter() {
    this.menuCtrl.enable(false);
  }

}
