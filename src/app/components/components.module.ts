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
import { AutosizeModule } from 'ngx-autosize';
import { FormsModule } from '@angular/forms';
import { NuevoPostComponent } from './nuevo-post/nuevo-post.component';



@NgModule({
  entryComponents: [ChatComponent, EditarDescripcionComponent, NuevoPostComponent],
  declarations: [
    HeaderComponent,
    MenuComponent,
    Header2Component,
    ChatComponent,
    DestacadosComponent,
    NoticiaComponent,
    ProfesionalComponent,
    ProfesionalesComponent,
    EditarDescripcionComponent, 
    NuevoPostComponent
   ],
  exports: [
    HeaderComponent,
    MenuComponent,
    Header2Component,
    ChatComponent,
    DestacadosComponent,
    ProfesionalesComponent,
    EditarDescripcionComponent,
    NuevoPostComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    RouterModule,
    AutosizeModule,
    FormsModule

  ]
})
export class ComponentsModule { }
