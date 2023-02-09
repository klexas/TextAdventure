import { randomUUID } from 'crypto';

export class User {
    id: string;
    username: string;
    name: string;
    email: string;
    password: string;
    level: number = 1;
    experience: number = 0;

    constructor(username: string, name: string, email: string, password: string) {
        this.id = randomUUID();
        this.username = username;
        this.name = name;
        this.email = email;
        this.password = password;
    }
}

