import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ChatComponent } from './components/chat/chat.component';
import { ProductsComponent } from './components/products/products.component';
import { UserComponent } from './components/user/user.component';


const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'messages', component: ChatComponent},
  {path: 'products', component: ProductsComponent},
  {path: 'profile', component: UserComponent},
  {path: '**', pathMatch: 'full', redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
