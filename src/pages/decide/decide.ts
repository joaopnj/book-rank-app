import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
import { User } from '../../models/user';
import { LoadingProvider } from '../../providers/loading/loading';
import { AlertProvider } from '../../providers/alert/alert';
import { ProfessorFirstAcessPage } from '../professor-first-acess/professor-first-acess';
import { AlunoFirstAcessPage } from '../aluno-first-acess/aluno-first-acess';

@IonicPage()
@Component({
  selector: 'page-decide',
  templateUrl: 'decide.html',
})
export class DecidePage implements OnInit {

  protected user: User;

  constructor(protected navCtrl: NavController,
    protected navParams: NavParams,
    protected auth: AuthServiceProvider,
    protected loading: LoadingProvider,
    protected alert: AlertProvider) {
  }

  ngOnInit() {
    this.loading.presentLoadCresent('Carregando dados...');
    const login = localStorage.getItem('user');
    this.auth.me(login).subscribe(
      user => this.verifyRedirect(user),
      error => this.dealError()
    );
  }

  verifyRedirect(user) {
    this.user = user;
    if (this.user.isFirstAcess && this.user.identificador == 'professor') {
      this.navCtrl.push(ProfessorFirstAcessPage);
    }
    if (this.user.isFirstAcess && this.user.identificador == 'aluno') {

      this.navCtrl.push(AlunoFirstAcessPage);
    }
    this.loading.dismissLoad();

  }

  dealError() {
    this.alert.showAlert('Erro ao carregar', 'Erro ao carregar as informações tente novamente');
    this.navCtrl.pop();
    this.loading.dismissLoad();
  }


}
