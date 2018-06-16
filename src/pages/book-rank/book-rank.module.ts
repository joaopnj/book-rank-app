import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BookRankPage } from './book-rank';

@NgModule({
  declarations: [
    BookRankPage,
  ],
  imports: [
    IonicPageModule.forChild(BookRankPage),
  ],
})
export class BookRankPageModule {}
