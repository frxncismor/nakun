import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { IonicModule } from '@ionic/angular';
import { MenuComponent } from './menu/menu.component';
import { RouterModule } from '@angular/router';
import { Header2Component } from './header2/header2.component';



@NgModule({
  declarations: [
    HeaderComponent,
    MenuComponent,
    Header2Component
  ],
  exports: [
    HeaderComponent,
    MenuComponent,
    Header2Component
  ],
  imports: [
    CommonModule,
    IonicModule,
    RouterModule
  ]
})
export class ComponentsModule { }
