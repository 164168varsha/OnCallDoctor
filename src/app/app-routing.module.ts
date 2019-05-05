import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { HeaderComponent } from './header/header.component';
import { HousecallComponent } from './housecall/housecall.component';
import { HomeComponent } from './home/home.component';
import { AboutusComponent } from './aboutus/aboutus.component';


const routes: Routes = [

  {path:'',component:HomeComponent},
  {path:'aboutus',component:AboutusComponent},
  {path:'housecall',component:HousecallComponent},
  
  {path:'dashboard',component:DashboardComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
