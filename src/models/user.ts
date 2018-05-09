export class User {
    identificador:  string;
    isFirstAcess:   string;
    login:          string;
    nome:           string;
    senha:          string;

    constructor(values: Object = {}) {
        Object.assign(this, values);        
    }
}