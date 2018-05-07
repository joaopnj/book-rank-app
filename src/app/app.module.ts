import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AuthServiceProvider } from '../providers/auth-service/auth-service';
import { FormsModule } from '@angular/forms';
import { SignupPage } from '../pages/signup/signup';
import { LoadingPage } from '../pages/loading/loading';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from  '@angular/common/http';
import { LoadingProvider } from '../providers/loading/loading';
import { AlertProvider } from '../providers/alert/alert';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    SignupPage,
    LoadingPage,
    ListPage
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    SignupPage,
    ListPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    AuthServiceProvider,
    LoadingProvider,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AlertProvider
  ]
})
export class AppModule {}

platformBrowserDynamic().bootstrapModule(AppModule);
