import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';

@IonicPage()
@Component({
  selector: 'page-decide',
  templateUrl: 'decide.html',
})
export class DecidePage implements OnInit {

  constructor(protected navCtrl: NavController,
    protected navParams: NavParams,
    protected auth: AuthServiceProvider) {
  }

  ngOnInit() {
    console.log(localStorage.getItem('user'));

  }

}
