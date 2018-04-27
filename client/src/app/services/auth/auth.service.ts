import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../../interfaces/auth/user';
import { LocalstorageService } from '../localstorage/localstorage.service';
@Injectable()
export class AuthService {

  private auth : Object;

  constructor(private http: HttpClient, private localstorage: LocalstorageService) {}

  getIsUserLoggedIn(){
    const response = this.localstorage.get('auth')
    if(response)
      return !!JSON.parse(response)
      else
        return false
  }
  
  async Login(credentials : User , callback : (data) => void){
    await this.http.post('http://localhost:8080/api/login',credentials.getAuth())
      .subscribe(
        response => {
          callback(response)
          this.localstorage.persist('auth',{ 
            id : response['id']
          })
        })
  }

  Logout(){
    this.localstorage.removeAll();
  }
  
  getUserId() : Number {
    if(this.getIsUserLoggedIn()){
      const response = this.localstorage.get('auth')
      return (JSON.parse(response))['id']
    }
  }
}
