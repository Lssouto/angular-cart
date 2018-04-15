import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {

  private isUserLoggedIn : boolean;
  private auth : Object;

  constructor() {
    this.isUserLoggedIn = false;
  }

  getIsUserLoggedIn(){
    return this.isUserLoggedIn;
  }
  
  Login(){
    this.isUserLoggedIn = true;
  }

  Logout(){
    this.isUserLoggedIn = false;
  }

}
