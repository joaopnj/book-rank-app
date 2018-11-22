import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BookServiceProvider } from '../../providers/book-service/book-service';
import { Book } from '../../models/book';
import { Rank } from '../../models/rank';
import { ToastProvider } from '../../providers/toast/toast';
import { LoadingProvider } from '../../providers/loading/loading';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
import { User } from '../../models/user';
import { RankServiceProvider } from '../../providers/rank-service/rank-service';

@IonicPage()
@Component({
  selector: 'page-book-rank',
  templateUrl: 'book-rank.html',
})
export class BookRankPage{

  protected book: Book = new Book();
  protected rank: Rank = new Rank();
  protected user: User = new User();
  private bookName: string = "";

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public bookService: BookServiceProvider,
    public toast: ToastProvider,
    public loading: LoadingProvider,
    public authService: AuthServiceProvider,
    public rankService: RankServiceProvider) {
    this.bookName = navParams.get('book');
    this.getBook();
  }

  private getBook() {
    this.loading.presentLoadCresent("Carregando dados...");
    this.bookService.findLivroByName(this.bookName).subscribe(
      book  => this.dealBookResponse(book),
      error => this.dealBookError(),
      () => this.getUserContext()
    );
  }

  protected qualificar() {
    this.loading.presentLoadCresent("Salvando qualificação");
    this.rank.book = this.book;
    this.rank.aluno = this.user;
    this.rankService.createRank(this.rank).subscribe(
      rank => this.dealRankResponse(),
      error => this.dealBookError()
    );
  }

  protected voltar() {
    this.loading.dismissLoad();
    this.navCtrl.pop();
  }

  private dealRankResponse() {
    this.loading.dismissLoad();
    this.toast.presentSucessToast("Sucesso!", 'Qualificação salva com sucesso!');
    this.navCtrl.pop();
  }

  private dealBookResponse(book: Book) {
      this.book = book;
  }

  private dealUserResponse(user: User) {
    this.user = user;
    this.loading.dismissLoad();
}

  private getUserContext() {
    this.authService.me(localStorage.getItem('user')).subscribe(
      user => this.dealUserResponse(user),
      error => this.dealBookError()
    );
  }

  private dealBookError() {
    this.toast.presentErrorToast("Error","Erro ao carregar dados!");
    this.loading.dismissLoad();
  }

}
