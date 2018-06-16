import { User } from './user';
import { Book } from './book';

export class Rank {
    aluno: 			User;
    book : 	        Book;
    rank:			Number;
    descricao:	    string;

    constructor(values: Object = {}) {
        Object.assign(this, values);        
    }
}