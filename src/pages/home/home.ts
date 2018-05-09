import { Component, ViewChild } from '@angular/core';
import { NavController, ViewController, App, Nav } from 'ionic-angular';
import { User } from '../../models/user';
import { SignupPage } from '../signup/signup';
import { LoadingProvider } from '../../providers/loading/loading';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
import { ToastProvider } from '../../providers/toast/toast';
import { DecidePage } from '../decide/decide';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  @ViewChild(Nav) nav: Nav;
  protected isUserLogado: Boolean = false;

  protected user: User = new User();

  constructor(protected navCtrl: NavController,
    protected viewCtrl: ViewController,
    protected authService: AuthServiceProvider,
    protected appCtrl: App,
    protected loading: LoadingProvider,
    protected toast: ToastProvider) {
  }

  login() {
    this.loading.presentLoadCresent('Carregando...');

    if (this.user.login && this.user.senha) {
      this.authService.login(this.user).subscribe(
        user => this.loginSucess(user),
        error => error.status == 400 ? this.userNotFount(error) : this.preventError(error)
      );
    } else {
      this.loading.dismissLoad();
      this.toast.presentWarningToast("Preencha os campos para logar!", 2);
    }
  }

  preventError(error) {
    this.toast.presentErrorToast("Ocorreu um erro ao logar", 3);
    this.loading.dismissLoad();
  }

  userNotFount(error: any) {
    this.toast.presentWarningToast("Usuário ou senha inexistentes! ", 3);
    this.loading.dismissLoad();
  }

  loginSucess(user) {
    localStorage.setItem('user', user.login);
    this.navCtrl.push(DecidePage);
    this.loading.dismissLoad();
  }

  pushSignUpPage() {
    this.loading.presentLoadCresent('Carregando...');
    this.navCtrl.push(SignupPage);
  }

}
