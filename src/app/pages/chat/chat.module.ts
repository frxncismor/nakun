import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ChatPage } from './chat.page';
import { ComponentsModule } from 'src/app/components/components.module';
import { PipesModule } from '../../pipes/pipes.module';

import { AutosizeModule } from 'ngx-autosize';




const routes: Routes = [
  {
    path: '',
    component: ChatPage
  }
];

@NgModule({
  entryComponents: [
    
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    ComponentsModule,
    PipesModule,
    AutosizeModule
    
  ],
  declarations: [ChatPage]
})
export class ChatPageModule {}
