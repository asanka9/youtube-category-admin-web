import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './module/home/home.component';
import {CreateItemsComponent} from './module/create-items/create-items.component';
import {CreateUserComponent} from './module/create-user/create-user.component';

const routes: Routes = [
  {path:'',children:[
    {path:'',component:HomeComponent},
    {path:'create-items',component:CreateItemsComponent},
    {path:'create-users',component:CreateUserComponent},


  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
