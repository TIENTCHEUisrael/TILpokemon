import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [ 
  {path:"",redirectTo:'login',pathMatch:"full"},
  {path:'login',component:LoginComponent},
  {path:'**',component:PageNotFoundComponent}//Intercepte toute les routes et les renvoye dans page not found
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
