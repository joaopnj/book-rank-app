import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { User } from '../../models/user';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
import { LoadingProvider } from '../../providers/loading/loading';
import { AlertProvider } from '../../providers/alert/alert';
import { ToastProvider } from '../../providers/toast/toast';

@IonicPage({
  name : 'signup-page'
})
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage implements OnInit{

  protected user: User = new User();
  protected repeatedUsername: string = '';
  protected repeatedPassword: string = '';

  constructor(protected navCtrl: NavController, 
              protected navParams: NavParams,
              protected authService: AuthServiceProvider,
              protected loading: LoadingProvider,
              protected alert: AlertProvider,
              protected toast: ToastProvider) {
  }

  ngOnInit(){
    this.loading.dismissLoad();
  }

  goBackPage() {
    this.navCtrl.pop();
  }

  cadastrar() {
    this.loading.presentLoadCresent('Cadastrando...');
    if(this.user.senha != this.repeatedPassword){
      this.loading.dismissLoad();
      this.toast.presentWarningToast('As senhas não batem !', 3);
      // this.alert.showAlert('Alerta!', 'Senhas não batem favor preencha as senhas corretas!');
    }

    else if(this.user.login != this.repeatedUsername){
      this.loading.dismissLoad();
      this.toast.presentWarningToast('Os logins não batem!', 3);
    }

    else if(this.user.senha == this.repeatedPassword){
      this.authService.createUser(this.user)
      .subscribe( user =>{
        this.loading.dismissLoad();
        this.toast.presentSucessToast('O Usuário '+this.user.nome+' cadastrado com sucesso!', 5);
        this.navCtrl.pop();
      },(err) => {
          if(err.status == 400){
            this.alert.showAlert('Alerta!', ' O Usuário '+this.user.nome+' já foi cadastrado no sistema tente outro login!');
          } else {
            this.loading.dismissLoad();
            this.toast.presentErrorToast('Erro ao cadastrar o usuário!', 2);
          }
      });
    }
    
  }

}
