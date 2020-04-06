import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ChatComponent } from './components/chat/chat.component';
import { ProductsComponent } from './components/products/products.component';
import { UserComponent } from './components/user/user.component';
import { AuthGuard } from './service/auth.guard';
import { ProductComponent } from './components/product/product.component';


const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'messages', component: ChatComponent, canActivate: [ AuthGuard]},
  {path: 'products', component: ProductsComponent, canActivate: [ AuthGuard]},
  {path: 'product/:id', component: ProductComponent, canActivate: [ AuthGuard]},
  {path: 'profile', component: UserComponent, canActivate: [ AuthGuard]},
  {path: '**', pathMatch: 'full', redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
