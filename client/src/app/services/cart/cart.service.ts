import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { AuthService } from '../auth/auth.service';
import { Router } from '@angular/router';
@Injectable()
export class CartService {

  constructor(private http: HttpClient, private auth : AuthService , private router: Router) { }

  isUserLoggedIn(): Boolean{
    if(!this.auth.getIsUserLoggedIn()){
      this.router.navigate(['Login'])
      return false;
    }
    else{
      return true;
    }
  }

  addItem(itemId, callback){
    if(this.isUserLoggedIn())
      this.http.post('http://localhost:8080/api/cart/' + this.auth.getUserId(), {
        itemId : itemId
      }).subscribe(
          response =>{
            callback(response)
          }
        )
  }

  get(callback){
    if(this.isUserLoggedIn())
      this.http.get('http://localhost:8080/api/cart/'+this.auth.getUserId())
        .subscribe(
          response=>{
            callback(response)
          }
        )
  }
}
