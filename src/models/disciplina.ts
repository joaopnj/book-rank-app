import { User } from "./user";

export class Disciplina {
    nome: 		string;
	professor:  User;
    curso:		string;

    constructor(values: Object = {}) {
        Object.assign(this, values);        
    }
}