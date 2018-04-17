import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes,RouterModule, Router } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';

//Includes
  import { HeaderComponent } from './components/includes/header/header.component';
  import { FooterComponent } from './components/includes/footer/footer.component';

//Pages 
  import { IndexComponent } from './components/pages/index/index.component';
  import { PainelComponent } from './components/pages/painel/painel.component';
  import { LoginComponent } from './components/pages/login/login.component';
  import { CartComponent } from './components/pages/cart/cart.component';
  import { ItemComponent } from './components/pages/item/item.component';
//Libs
  import { SlickModule } from 'ngx-slick';

//Service
  import { AuthService } from './services/auth/auth.service';
  import { ItemService } from './services/item/item.service';
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
    path: 'Item/:id',
    component: ItemComponent
  },
  {
    path: 'Cart',
    canActivate : [AuthGuard],
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
    CartComponent,
    ItemComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    SlickModule.forRoot(),
    HttpClientModule
  ],
  providers: [AuthService, AuthGuard, ItemService],
  bootstrap: [AppComponent]
})
export class AppModule { }
