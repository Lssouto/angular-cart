import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { AuthService } from '../auth/auth.service';
import { Router } from '@angular/router';
import { JSONP_ERR_NO_CALLBACK } from '@angular/common/http/src/jsonp';
@Injectable()
export class CartService {

  constructor(private http: HttpClient, private auth : AuthService , private router: Router) { }

  isUserLoggedIn(): Boolean{
    if(!this.auth.getIsUserLoggedIn()){
      this.router.navigate(['login'])
      return false;
    }
    else{
      return true;
    }
  }

  addItem(item : Object, callback : (data) => void ){
    if(this.isUserLoggedIn())
      this.http.post('http://localhost:8080/api/cart/' + this.auth.getUserId(), {
        itemId : item['id'],
        itemQtd : item['qtd']
      }).subscribe(
          response =>{
            callback(response)
          }
        )
  }

  get(callback) : void{
    if(this.isUserLoggedIn())
      this.http.get('http://localhost:8080/api/cart/'+this.auth.getUserId())
        .subscribe(
          response=>{
            callback(response)
          }
        )
  }
  
  clean(callback : (data) => void) : void{
    if(this.isUserLoggedIn())
      this.http.delete('http://localhost:8080/api/cart/'+this.auth.getUserId())
      .subscribe(
        response => {
          callback(response)
        }
      )
  }
  
  deleteItem(idItem : number, callback : (data) => void): void{
    if(this.isUserLoggedIn())
      this.http.delete('http://localhost:8080/api/cart/' +this.auth.getUserId() + '/' + idItem)
      .subscribe(
        response=>{
          callback(response)
        }
      )
  }

  pay(callback){
    if(this.isUserLoggedIn()){
      this.http.get('http://localhost:8080/api/cart/pay/' + this.auth.getUserId())
        .subscribe(
          response=>{
            callback(response)
          }
        )
    }
  }
}
