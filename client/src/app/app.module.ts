import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes,RouterModule, Router } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { PersistenceModule } from 'angular-persistence';

import { AppComponent } from './app.component';

//Includes
  import { HeaderComponent } from './components/includes/header/header.component';
  import { FooterComponent } from './components/includes/footer/footer.component';
  import { SlickComponent } from './components/includes/slick/slick.component';
  import { QtdInputComponent } from './components/includes/inputs/qtd-input/qtd-input.component';

//Pages 
  import { IndexComponent } from './components/pages/index/index.component';

  import { PainelComponent } from './components/pages/painel/painel.component';
    import { PersonalInfoComponent } from './components/pages/painel/personal-info/personal-info.component';
    import { MessagesComponent } from './components/pages/painel/messages/messages.component';
    import { TransactionsComponent } from './components/pages/painel/transactions/transactions.component';

  import { LoginComponent } from './components/pages/login/login.component';
  import { CartComponent } from './components/pages/cart/cart.component';
  import { ItemComponent } from './components/pages/item/item.component';
//Libs
  import { SlickModule } from 'ngx-slick';

//Service
  import { AuthService } from './services/auth/auth.service';
  import { ItemService } from './services/item/item.service';
  import { CartService } from './services/cart/cart.service';
  import { LocalstorageService } from './services/localstorage/localstorage.service';
  import { PainelService } from './services/painel/painel.service';

//Guard
  import { AuthGuard } from './guards/auth/auth.guard';

//Routes
const appRoutes : Routes = [
  {
    path: '',
    component: IndexComponent
  },
  {
    path: 'painel',
    canActivate : [AuthGuard],
    component: PainelComponent,
    children : [
    {
      path: 'personal-info',
      component: PersonalInfoComponent 
    },
    {
      path: 'messages',
      component: MessagesComponent
    },
    {
      path: '',
      component: TransactionsComponent
    }
    ]
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'item/:id',
    component: ItemComponent
  },
  {
    path: 'cart',
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
    ItemComponent,
    SlickComponent,
    PersonalInfoComponent,
    MessagesComponent,
    TransactionsComponent,
    QtdInputComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    SlickModule.forRoot(),
    HttpClientModule,
    PersistenceModule
  ],
  providers: [
    AuthService, 
    AuthGuard, 
    ItemService, 
    CartService,
    LocalstorageService,
    PainelService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
