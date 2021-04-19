export class User {
    name: string;
    email: string;

    constructor(name: string, email: string){
        this.name = name;
        this.email = email;
    }

    getName(): string {
        return this.name;
    }
}


