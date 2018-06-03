import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListAlunoPage } from './list-aluno';

@NgModule({
  declarations: [
    ListAlunoPage,
  ],
  imports: [
    IonicPageModule.forChild(ListAlunoPage),
  ],
})
export class ListAlunoPageModule {}
