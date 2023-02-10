import crypto from 'crypto';
const generateUuid = () => {
    return [4, 2, 2, 2, 6] // or 8-4-4-4-12 in hex
      .map(group => crypto.randomBytes(group).toString('hex'))
      .join('-');
  };

export class User {
    id: string;
    username: string;
    name: string;
    email: string;
    password: string;
    level: number = 1;
    experience: number = 0;

    constructor(username: string, name: string, email: string, password: string) {
        this.id = generateUuid();
        this.username = username;
        this.name = name;
        this.email = email;
        this.password = password;
    }
}

