import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { CallNumber } from '@ionic-native/call-number';
import { Flashlight } from '@ionic-native/flashlight';
import { GoogleMaps } from '@ionic-native/google-maps';
import { Camera } from '@ionic-native/camera';
import { MyApp } from './app.component';
import { LoginPage } from '../pages/login/login';

import { HomePage } from '../pages/home/home';
import { AccountPage } from '../pages/account/account';
import { ListPage } from '../pages/list/list';
import { PagetwoPage } from '../pages/pagetwo/pagetwo';
import { TabsPage } from '../pages/tabs/tabs';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    AccountPage,
    ListPage,
    PagetwoPage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    AccountPage,
    ListPage,
    PagetwoPage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    CallNumber,
    Flashlight,
    Camera,
    GoogleMaps,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
