
export interface IError {
    status : Boolean;
    msg : String
}

export class Error implements IError{
    status;msg;

    constructor(status : Boolean, msg : String){
        this.status = status;
        this.msg = msg;
    }

    public getError(){
        return {
            status: this.status,
            msg : this.msg
        }
    }
}
