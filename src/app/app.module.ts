import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ComponentsModule } from './components/components.module';
import { HttpClientModule } from '@angular/common/http';
import { PipesModule } from './pipes/pipes.module';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';

<<<<<<< HEAD
import { firebaseConfig } from "../environments/environment";
import { AngularFireModule } from "@angular/fire";
import { AngularFireAuthModule} from "@angular/fire/auth";
import { AngularFirestoreModule, FirestoreSettingsToken } from "@angular/fire/firestore";
=======

import { FormsModule } from '@angular/forms';


>>>>>>> db3bf9353b30df961fa9c9df271d8df35c2d0fa4

@NgModule({
  declarations: [
    AppComponent,
  ],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    ComponentsModule,
    HttpClientModule,
    PipesModule,
<<<<<<< HEAD
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule, AngularFirestoreModule
=======
    FormsModule
>>>>>>> db3bf9353b30df961fa9c9df271d8df35c2d0fa4
  ],
  providers: [
    StatusBar,
    SplashScreen,
    InAppBrowser,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
