import { User } from "./user";


export class DisciplinaAlunoObject {
    disciplina: 		string;
	aluno:              User;

    constructor(values: Object = {}) {
        Object.assign(this, values);        
    }
}