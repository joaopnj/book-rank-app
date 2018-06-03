export class Livro {
    nome: 			string;
    descricao : 	string;
    autor:			string;
    editora:		string;
    disciplina:		string;

    constructor(values: Object = {}) {
        Object.assign(this, values);        
    }
}