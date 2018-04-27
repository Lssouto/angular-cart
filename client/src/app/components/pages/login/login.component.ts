import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { AuthService } from '../../../services/auth/auth.service';
import { User } from '../../../interfaces/auth/user';
import { Error } from '../../../interfaces/error/error';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {

  error : Error;

  constructor(private location : Location, private authService:AuthService) { 
    this.error = new Error(false,'')
  }

  ngOnInit() {
    this.authService.getIsUserLoggedIn();
  }

  async login(e, formValue){
    e.preventDefault();
    
    this.error = new Error(false,'');

    try{
      const credentials = new User(formValue['user'],formValue['password']);
      
      const isValid = Object.keys(credentials.getAuth()).every(item=>{
        return !!credentials.getAuth()[item];
      })

      if(isValid){
        await this.authService.Login(credentials, (data) =>{
          if(data.status)
            this.location.back();
          else  
            throw "Usuário Inválido"
        });
      }
      else{
        throw "Campos Inválidos"
      }
    }catch(e){
      //console.error(''+ e);
      this.error = new Error(true,'' + e);
    }
  }
}
