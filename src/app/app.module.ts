import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { ItemsComponent } from './components/items/items.component';
import { AddCategoryComponent } from './components/add-category/add-category.component';
import { AddItemComponent } from './components/add-item/add-item.component';
import { AppRoutingModule } from './/app-routing.module';
import { RouterModule } from '../../node_modules/@angular/router';
import { AuthService } from './services/auth.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenService } from './services/token.service';
import { DataService } from './services/data.service';
import { HttpInterceptorService } from './services/http-interceptor.service';
import { NavigateAwayGuardService } from './services/navigate-away-guard.service';
import { CategoriesResolverService } from './services/categories-resolver.service';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { AuthGuardService } from './services/auth-guard.service';
import { AuthSingletonService } from './services/auth-singleton.service';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    RegisterComponent,
    CategoriesComponent,
    ItemsComponent,
    AddCategoryComponent,
    AddItemComponent,
    PageNotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    AuthService,
    TokenService,
    DataService,
    NavigateAwayGuardService,
    CategoriesResolverService,
    AuthGuardService,
    AuthSingletonService,
    { provide: HTTP_INTERCEPTORS, useClass: HttpInterceptorService, multi: true, }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
