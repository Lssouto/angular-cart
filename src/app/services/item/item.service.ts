import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ItemService {

  constructor(private http : HttpClient) { }

  async get(callback : (data) => void){
    await this.http.get('http://localhost:8080/api/item')
      .subscribe(
        response => {
          callback(response)
        },
        err => {
          console.log(err)
        }
      )
  }

  async getOne(id:number, callback : (data) => void){
    await this.http.get('http://localhost:8080/api/item/'+id)
      .subscribe(
        response =>{
          callback(response)
        },
        err =>{
          console.log(err)
        }
      )
  }
}
