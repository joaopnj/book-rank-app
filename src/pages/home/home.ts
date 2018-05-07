import { Component, OnInit, ViewChild } from '@angular/core';
import { NavController, ViewController, App, Nav } from 'ionic-angular';
import { User } from '../../models/user';
import { SignupPage } from '../signup/signup';
import { AlertProvider } from '../../providers/alert/alert';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit {

  @ViewChild(Nav) nav: Nav;
  protected isUserLogado: Boolean = false;

  protected user: User = new User();

  constructor(protected navCtrl: NavController,
    protected alert: AlertProvider,
    protected viewCtrl: ViewController,
    protected appCtrl: App) {
  }

  ngOnInit() {
  }

  showAlertUsuario() {
    this.alert.showAlert('Usuário inexistente!', 'O login ou a senha não existem, favor se cadastre!');
  }

  pushPage() {
    this.navCtrl.push(SignupPage);
  }

}
