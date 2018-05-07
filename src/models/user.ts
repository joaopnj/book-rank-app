export class User {
    identificador:  string;
    isFirstAcess:   string;
    login:          string;
    nome:           string;
    password:       string;

    constructor(values: Object = {}) {
        Object.assign(this, values);        
    }
}