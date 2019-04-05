import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import{LibretaContactosPage} from '../pages/libreta-contactos/libreta-contactos';
import{AcercaDePage} from '../pages/acerca-de/acerca-de';
import{NuevoContactoPage} from '../pages/nuevo-contacto/nuevo-contacto';
import{EditarContactoPage} from '../pages/editar-contacto/editar-contacto';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {ContactService} from '../services/contact.service';
import {Services} from '@angular/core/src/view';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { FirebaseDbProvider } from '../providers/firebase-db/firebase-db';

export const fireBaseConfig={
    apiKey: "AIzaSyDqVNv6gN3-8PJ8RS2DLwIUX03voDNXXfU",
    authDomain: "agenda-f5193.firebaseapp.com",
    databaseURL: "https://agenda-f5193.firebaseio.com",
    projectId: "agenda-f5193",
    storageBucket: "agenda-f5193.appspot.com",
    messagingSenderId: "956977115659"};

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    LibretaContactosPage,
    AcercaDePage,
    NuevoContactoPage,
    EditarContactoPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(fireBaseConfig),
    AngularFireDatabaseModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    LibretaContactosPage,
    AcercaDePage,
    NuevoContactoPage,
    EditarContactoPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ContactService,
    FirebaseDbProvider
  ]
})
export class AppModule {}
