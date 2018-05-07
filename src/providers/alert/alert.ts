import { Injectable } from '@angular/core';
import { AlertController } from 'ionic-angular';

@Injectable()
export class AlertProvider {

  constructor(protected alertCtrl: AlertController) {
  }

  showAlert(title, message, button?) {
    const alert = this.alertCtrl.create({
      title: title,
      subTitle: message,
      buttons: button ? [button] : ['OK'],
      enableBackdropDismiss: true
    });
    alert.present();
  }

}
