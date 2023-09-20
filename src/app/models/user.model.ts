export interface IUser{
    loggedIn: boolean;
    name: string;
    surname: string;
    level: number;
    permissions: string[]
}

export class User implements IUser{
    loggedIn: boolean;
    name: string;
    surname: string;
    level: number;
    permissions: string[];

    constructor(u: IUser){
        this.loggedIn = u.loggedIn;
        this.name = u.name;
        this.surname = u.surname;
        this.level = u.level;
        this.permissions = u.permissions;
    }
}