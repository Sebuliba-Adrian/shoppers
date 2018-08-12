import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { ItemsComponent } from './components/items/items.component';
import { AddCategoryComponent } from './components/add-category/add-category.component';
import { AddItemComponent } from './components/add-item/add-item.component';
import { NavigateAwayGuardService } from './services/navigate-away-guard.service';
import { CategoriesResolverService } from './services/categories-resolver.service';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { AuthGuardService } from './services/auth-guard.service';

const appRoutes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'categories',
    component: CategoriesComponent,
    resolve: { categories: CategoriesResolverService },
    canActivate: [AuthGuardService]
  },
  {
    path: 'add-category',
    component: AddCategoryComponent,
    canDeactivate: [NavigateAwayGuardService],
    canActivate: [AuthGuardService]
  },
  {
    path: 'add-category/:id',
    component: AddCategoryComponent,
    canDeactivate: [NavigateAwayGuardService],
    canActivate: [AuthGuardService]
  },

  {
    path: 'categories/:id',
    component: ItemsComponent,
    canActivate: [AuthGuardService],
  },
  {
    path: 'categories/:id/add-item',
    component: AddItemComponent,
    canActivate: [AuthGuardService],
  },
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  {
    path: '**',
    component: PageNotFoundComponent
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  declarations: []
})
export class AppRoutingModule { }
