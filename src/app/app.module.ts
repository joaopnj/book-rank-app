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
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from  '@angular/common/http';
import { LoadingProvider } from '../providers/loading/loading';
import { AlertProvider } from '../providers/alert/alert';
import { ToastProvider } from '../providers/toast/toast';
import { DecidePage } from '../pages/decide/decide';
import { FirstAcessPage} from '../pages/first-acess/first-acess'
import { DisciplinaServiceProvider } from '../providers/disciplina-service/disciplina-service';
import { LivroServiceProvider } from '../providers/livro-service/livro-service';
import { BookServiceProvider } from '../providers/book-service/book-service';
import { RankServiceProvider } from '../providers/rank-service/rank-service';
import { ListProfessorPage } from '../pages/list-professor/list-professor';
import { ListAlunoPage } from '../pages/list-aluno/list-aluno';
import { BookRankPage } from '../pages/book-rank/book-rank';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    SignupPage,
    ListPage,
    DecidePage,
    FirstAcessPage,
    ListAlunoPage,
    ListProfessorPage,
    BookRankPage
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
    ListPage,
    DecidePage,
    FirstAcessPage,
    ListAlunoPage,
    ListProfessorPage,
    BookRankPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    AuthServiceProvider,
    LoadingProvider,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AlertProvider,
    ToastProvider,
    DisciplinaServiceProvider,
    LivroServiceProvider,
    BookServiceProvider,
    RankServiceProvider
  ]
})
export class AppModule {}

platformBrowserDynamic().bootstrapModule(AppModule);
