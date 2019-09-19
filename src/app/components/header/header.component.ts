import { Component, OnInit, Input } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { AuthService } from '../../services/auth.service';
import { FirebaseApp } from '@angular/fire';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

 @Input() US: any = [];
 @Input() titulo;

  constructor(private menuCtrl: MenuController,
              ) { }

  ngOnInit() {}

  toggleMenu() {
    this.menuCtrl.toggle();
  }





}
