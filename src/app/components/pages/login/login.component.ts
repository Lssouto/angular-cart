import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../services/auth/auth.service';
import { User } from '../../../interfaces/auth/user';
import { Error } from '../../../interfaces/error/error';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {

  auth: User;
  error: Error;

  constructor(private router:Router, private authService:AuthService) { 
    this.error.msg = '';
    this.error.status = false;
  }

  ngOnInit() {
  }

  login(e){
    e.preventDefault();
    try{
      this.auth.login = e.target.elements[0].value;
      this.auth.password = e.target.elements[1].value;

      const isValid = Object.keys(this.auth).every(item=>{
        return !!this.auth[item];
      })

      if(isValid){
        this.authService.Login();
        this.router.navigate(['Painel'])
      }
      else{
        throw "Campos Inválidos"
      }
    }catch(e){
      console.error(''+ e);
      this.error.msg = "" + e;
      this.error.status = true;
    }
  }
}
