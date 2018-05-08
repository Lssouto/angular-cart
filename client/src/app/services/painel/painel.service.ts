import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class PainelService {

  constructor(private http : HttpClient) { }

  getTransactions(callback){
    this.http.get('http://localhost:8080/api/painel/transactions')
      .subscribe(
        response => {
          callback(response);
        }
      )
  }
}