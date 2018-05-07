import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { User } from '../../models/user';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
import { LoadingProvider } from '../../providers/loading/loading';
import { AlertProvider } from '../../providers/alert/alert';

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
              protected alert: AlertProvider) {
  }

  ngOnInit(){
    this.loading.dismissLoad();
  }

  goBackPage() {
    this.navCtrl.pop();
  }

  cadastrar() {
    this.loading.presentLoadCresent('Cadastrando...');
    if(this.user.password != this.repeatedPassword){
      this.loading.dismissLoad();
      this.alert.showAlert('Erro!', 'Erro ao cadastrar o usuário');
    }

    if(this.user.password == this.repeatedPassword){
      this.authService.register(this.user)
      .subscribe( user =>{  
        console.log(user);
        this.loading.dismissLoad();
        this.alert.showAlert('Sucesso!', 'Usuário '+this.user.nome+' cadastrado com sucesso!');
      },(err) => {
          this.loading.dismissLoad();
          this.alert.showAlert('Erro!', 'Erro ao cadastrar o usuário');
          console.log(err);
        
      });
    }
    
  }

  checkPassword() {
    //  this.user.password != this.repeatedPassword : 
  }

}
