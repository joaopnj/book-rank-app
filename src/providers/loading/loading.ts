import { Injectable } from '@angular/core';
import { LoadingController } from 'ionic-angular';

@Injectable()
export class LoadingProvider {

  private loading: any;

  constructor(protected loadingCtrl: LoadingController) {
  }

  public presentLoadCresent(message) {
    this.loading = this.loadingCtrl.create({
      content: message,
      spinner: 'cresent'
    });
  
    this.loading.present();
  }

  public dismissLoad() {
    this.loading.dismiss();
  }

}
