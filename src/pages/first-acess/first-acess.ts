import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { User } from '../../models/user';
import { Disciplina } from '../../models/disciplina';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
import { DisciplinaServiceProvider } from '../../providers/disciplina-service/disciplina-service';
import { LoadingProvider } from '../../providers/loading/loading';
import { ToastProvider } from '../../providers/toast/toast';
import { ListProfessorPage } from '../list-professor/list-professor';
import { ListAlunoPage } from '../list-aluno/list-aluno';

@IonicPage()
@Component({
  selector: 'page-first-acess',
  templateUrl: 'first-acess.html',
})
export class FirstAcessPage {

  protected user: User = new User();
  protected disciplinaList: Disciplina[] = [];
  protected curso: string = "";
  protected selectedDisciplinas: Disciplina[] = [];

  constructor(protected navCtrl: NavController,
    protected navParams: NavParams,
    protected auth: AuthServiceProvider,
    protected disciplinaService: DisciplinaServiceProvider,
    protected userService: AuthServiceProvider,
    protected loading: LoadingProvider,
    protected toast: ToastProvider) {
      this.getUserContext();
  }

  protected onSelectedCurso() {
    this.disciplinaService.listByCourse(this.curso).subscribe(
      disciplinas => this.disciplinaList = disciplinas,
      error => this.toast.presentErrorToast('Error ao recuperar disciplinas', 2)
    );
  }

  protected goBack() {
    localStorage.clear();
    this.navCtrl.popToRoot();
  }

  protected save() {
    this.loading.presentLoadCresent('Associando as disciplinas do usuário' +this.user.nome+ '..');
    // this.user.identificador === 'professor' ? this.saveProfessor() : this.saveAluno();
    this.saveAluno();
  }

  // private saveProfessor() {
  //   this.disciplinaService.saveProfessor(this.user, this.selectedDisciplinas).subscribe(
  //     disciplinas => this.sucessSaveDisciplines(),
  //     error => this.dealErrorSave()
  //   );
  // }

  private saveAluno() {
    this.disciplinaService.saveAluno(this.user, this.selectedDisciplinas).subscribe(
      disciplina_aluno => this.sucessSaveDisciplines(),
      error => this.dealErrorSave()
    );
  }

  private getUserContext() {
    const login = localStorage.getItem('user');
    this.auth.me(login).subscribe(
      user => this.user = user,
      error => this.dealErrorUserContext()
    );
  }

  private dealErrorUserContext() {
    this.toast.presentWarningToast('Não foi possivel carregar o usuário!', 2);
    this.loading.dismissLoad();
  }

  private dealErrorSave(){
    this.toast.presentErrorToast('Não foi possivel salvar as disciplinas no usuário', 3);
    this.loading.dismissLoad();
  }

  private sucessSaveDisciplines() {
    this.userService.removeFirstAcess(this.user).subscribe(
      aluno => this.sucessSave(),
      error => this.dealErrorSave()
    );
  }

  private sucessSave() {
    this.user.identificador === 'professor' ? this.navCtrl.push(ListProfessorPage) : this.navCtrl.push(ListAlunoPage);
    this.loading.dismissLoad();
  }

}
