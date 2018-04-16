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

  error : Error;

  constructor(private router:Router, private authService:AuthService) { 
    this.error = new Error(false,'')
  }

  ngOnInit() {
  }

  login(e){
    e.preventDefault();
    try{
      
      const credentials = new User(e.target.elements[0].value,e.target.elements[1].value);
  
      const isValid = Object.keys(credentials.getAuth()).every(item=>{
        return !!credentials.getAuth()[item];
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
      this.error = new Error(true,e);
    }
  }
}
