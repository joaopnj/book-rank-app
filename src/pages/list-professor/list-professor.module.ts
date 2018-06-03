import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListProfessorPage } from './list-professor';

@NgModule({
  declarations: [
    ListProfessorPage,
  ],
  imports: [
    IonicPageModule.forChild(ListProfessorPage),
  ],
})
export class ListProfessorPageModule {}
