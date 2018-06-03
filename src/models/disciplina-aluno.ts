import { Disciplina } from "./disciplina";
import { User } from "./user";


export class DisciplinaAluno {
    disciplinas: 		Disciplina[];
	aluno:              User;

    constructor(values: Object = {}) {
        Object.assign(this, values);        
    }
}