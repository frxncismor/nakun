import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { IonicModule } from '@ionic/angular';
import { MenuComponent } from './menu/menu.component';
import { RouterModule } from '@angular/router';
import { Header2Component } from './header2/header2.component';
import { ChatComponent } from './chat/chat.component';
import { DestacadosComponent } from './destacados/destacados.component';
import { NoticiaComponent } from './noticia/noticia.component';
import { ProfesionalComponent } from './profesional/profesional.component';
import { ProfesionalesComponent } from './profesionales/profesionales.component';
import { EditarDescripcionComponent } from './editar-descripcion/editar-descripcion.component';




@NgModule({
  entryComponents: [ChatComponent, EditarDescripcionComponent],
  declarations: [
    HeaderComponent,
    MenuComponent,
    Header2Component,
    ChatComponent,
    DestacadosComponent,
    NoticiaComponent,
    ProfesionalComponent,
    ProfesionalesComponent,
    EditarDescripcionComponent
  ],
  exports: [
    HeaderComponent,
    MenuComponent,
    Header2Component,
    ChatComponent,
    DestacadosComponent,
    ProfesionalesComponent,
    EditarDescripcionComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    RouterModule
  ]
})
export class ComponentsModule { }
