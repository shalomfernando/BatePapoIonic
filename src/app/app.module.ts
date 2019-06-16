import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import {ChatService} from "./chatServer";
import {AngularFireModule} from "angularfire2";
import {AngularFireDatabaseModule} from "angularfire2/database";

const firebaseConfig = {
  apiKey: "AIzaSyCZxNECQjCYN8cFZZp6uH97fOsTKvNW1kI",
  authDomain: "batepapoionic.firebaseapp.com",
  databaseURL: "https://batepapoionic.firebaseio.com",
  projectId: "batepapoionic",
  storageBucket: "batepapoionic.appspot.com",
  messagingSenderId: "811134118593",
  appId: "1:811134118593:web:c46908e6d51f5b43"
};

@NgModule({
  declarations: [
    MyApp,
    HomePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    ChatService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})

export class AppModule {}
