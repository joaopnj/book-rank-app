export class Book {
    nome: 			string;
	descricao : 	string;
	autor:			string;
	editora:		string;
    disciplina:		string;
    media:          Number;

    constructor(values: Object = {}) {
        Object.assign(this, values);        
    }
}