import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Book } from '../../models/book';
import { User } from '../../models/user';
import { LoadingProvider } from '../../providers/loading/loading';
import { ToastProvider } from '../../providers/toast/toast';
import { BookServiceProvider } from '../../providers/book-service/book-service';
import { DisciplinaServiceProvider } from '../../providers/disciplina-service/disciplina-service';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
import { DisciplinaAlunoObject } from '../../models/disciplina-aluno-obj';
import { BookRankPage } from '../book-rank/book-rank';

@IonicPage()
@Component({
  selector: 'page-list-aluno',
  templateUrl: 'list-aluno.html',
})
export class ListAlunoPage implements OnInit{

  protected books: Book[] = [];
  protected user: User;
  protected disciplinasAluno: DisciplinaAlunoObject[];

  constructor(protected navCtrl: NavController, 
    protected navParams: NavParams,
    protected loading: LoadingProvider,
    protected authService: AuthServiceProvider,
    protected toast: ToastProvider,
    protected bookService: BookServiceProvider,
    protected disciplinaService: DisciplinaServiceProvider) {
  }

  ngOnInit() {
    this.loading.presentLoadCresent('Carregando dados...');
    const login = localStorage.getItem('user');
    this.authService.me(login).subscribe(
      user => this.user = user,
      error => this.dealErrorUserContext(),
      () => this.listDisciplineByUser()
    );

  }

  protected bookrank(book: Book): void {
    this.navCtrl.push(BookRankPage, {book : book.nome});

  }

  private listDisciplineByUser(): void {
    this.disciplinaService.listByUser(this.user.login).subscribe(
      disciplinaAlunos => this.findBooksByDiscipline(disciplinaAlunos),
      error => this.dealErrorUserContext()
    );
  }

  private dealErrorUserContext() {
    this.toast.presentWarningToast('Não foi possivel carregar os livros do usuário!', 2);
    this.loading.dismissLoad();
  }

  private findBooksByDiscipline(disciplinaAlunos: DisciplinaAlunoObject[]) {
    
    disciplinaAlunos.forEach( disciplinaAluno =>
      this.bookService.listByDiscipline(disciplinaAluno.disciplina).subscribe( 
        books => this.dealBookResponse(books),
        error => this.dealErrorUserContext()
      )
    );
  }

  private dealBookResponse(books) {
    books.forEach(theBook => this.books.push(theBook));
    this.loading.dismissLoad();
  }

}
