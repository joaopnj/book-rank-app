import { Injectable } from '@angular/core';
import { ToastController } from 'ionic-angular';


@Injectable()
export class ToastProvider {

  constructor(protected toastCtrl: ToastController) {
  }

  presentSucessToast(message, duration) {
    let toast = this.toastCtrl.create({
      message: message,
      duration: duration * 1000,
      position: 'top',
      cssClass: 'success'
    });
  
    toast.present();
  }

  presentErrorToast(message, duration) {
    let toast = this.toastCtrl.create({
      message: message,
      duration: duration * 1000,
      position: 'top',
      cssClass: 'error'
    });
  
    toast.present();
  }

  presentWarningToast(message, duration) {
    let toast = this.toastCtrl.create({
      message: message,
      duration: duration * 1000,
      position: 'top',
      cssClass: 'warning'
    });
  
    toast.present();
  }

}
