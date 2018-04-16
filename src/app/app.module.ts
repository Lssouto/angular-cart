import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes,RouterModule, Router } from '@angular/router';

import { AppComponent } from './app.component';

//Includes
  import { HeaderComponent } from './components/includes/header/header.component';
  import { FooterComponent } from './components/includes/footer/footer.component';

//Pages 
  import { IndexComponent } from './components/pages/index/index.component';
  import { PainelComponent } from './components/pages/painel/painel.component';
  import { LoginComponent } from './components/pages/login/login.component';
  import { CartComponent } from './components/pages/cart/cart.component';

//Libs
  import { SlickModule } from 'ngx-slick';

//Service
  import { AuthService } from './services/auth/auth.service';

//Guard
  import { AuthGuard } from './guards/auth/auth.guard';

//Routes
const appRoutes : Routes = [
  {
    path: '',
    component: IndexComponent
  },
  {
    path: 'Painel',
    canActivate : [AuthGuard],
    component: PainelComponent
  },
  {
    path: 'Login',
    component: LoginComponent
  },
  {
    path: 'Comprar/:id',
    component: CartComponent
  },
  {
    path: '**',
    redirectTo: ''
  }
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    IndexComponent,
    PainelComponent,
    LoginComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    SlickModule.forRoot()
  ],
  providers: [AuthService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
