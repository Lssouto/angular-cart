import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../../interfaces/auth/user';
@Injectable()
export class AuthService {

  private isUserLoggedIn : boolean;
  private auth : Object;

  constructor(private http: HttpClient) {
    this.isUserLoggedIn = false;
  }

  getIsUserLoggedIn(){
    return this.isUserLoggedIn;
  }
  
  async Login(credentials : User , callback : (data) => void){
    await this.http.post('http://localhost:8080/api/login',credentials.getAuth())
      .subscribe(
        response => {
          callback(response)
          this.isUserLoggedIn = true;
        })
  }

  Logout(){
    this.isUserLoggedIn = false;
  }

}
