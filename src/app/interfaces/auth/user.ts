export interface IUser {
    login : String,
    password : String
}

export class User implements IUser{
    public login;
    public password;

    constructor(login : String, password : String){
        this.login = login;
        this.password = password;
    }

    public getAuth(){
        return {
            login: this.login,
            password: this.password
        }
    } 
}