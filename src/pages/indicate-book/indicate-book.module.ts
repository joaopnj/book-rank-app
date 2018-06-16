import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { IndicateBookPage } from './indicate-book';

@NgModule({
  declarations: [
    IndicateBookPage,
  ],
  imports: [
    IonicPageModule.forChild(IndicateBookPage),
  ],
})
export class IndicateBookPageModule {}
