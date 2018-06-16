import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
import { User } from '../../models/user';
import { LoadingProvider } from '../../providers/loading/loading';
import { AlertProvider } from '../../providers/alert/alert';
import { FirstAcessPage } from '../first-acess/first-acess';
import { ListAlunoPage } from '../list-aluno/list-aluno';
import { ListProfessorPage } from '../list-professor/list-professor';

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
    this.navCtrl.push(this.user.isFirstAcess ? FirstAcessPage : this.user.identificador === 'aluno' ? ListAlunoPage : ListProfessorPage );
    this.loading.dismissLoad();
  }

  dealError() {
    this.alert.showAlert('Erro ao carregar', 'Erro ao carregar as informações tente novamente');
    this.navCtrl.popAll();
    this.loading.dismissLoad();
  }

}
