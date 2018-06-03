export class Disciplina {
    nome: 		string;
	professor:  string;
    curso:		string;

    constructor(values: Object = {}) {
        Object.assign(this, values);        
    }
}