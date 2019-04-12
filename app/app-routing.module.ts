import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SingleProdectComponent } from './single-prodect/single-prodect.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { CcardComponent } from './ccard/ccard.component';

const routes: Routes = [{path:'prodect/:id',component:SingleProdectComponent},
{path:'home',component:HomeComponent},{path:'login',component:LoginComponent},
{path:'',component:LoginComponent},{path:'signup',component:SignupComponent},
{path: 'card', component:CcardComponent},{path: '**', component:LoginComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents =[SingleProdectComponent,HomeComponent,LoginComponent,SignupComponent,CcardComponent];