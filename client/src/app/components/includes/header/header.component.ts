import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  collapsed : Boolean = true;

  constructor(private AuthService : AuthService, private router : Router) {}

  ngOnInit() {
  }

  logout(e){
    e.preventDefault();
    this.AuthService.Logout();
    this.router.navigate(['Login'])
  }
  
  toggleDropdown(){
    this.collapsed = !this.collapsed;
  }
}
