import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { AuthService } from '../auth/auth.service';
@Injectable()
export class CartService {

  constructor(private http: HttpClient, private auth : AuthService) { }

  addItem(itemId, callback){
    console.log(this.auth.getUserId())
    this.http.post('http://localhost:8080/api/cart/' + this.auth.getUserId(), {
      itemId : itemId
    })
      .subscribe(
        response =>{
          callback(response)
          console.log(response)
        }
      )
  }

  get(callback){
    this.http.get('http://localhost:8080/api/cart/' + this.auth.getUserId())
      .subscribe(
        response=>{
          callback(response)
        }
      )
  }

}
