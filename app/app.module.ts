import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule,routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import {NgbModule}from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './home/home.component';
//import {RouterModule,Routes} from '@angular/router';
import { Prodects } from './models/Prodects';
import { SingleProdectComponent } from './single-prodect/single-prodect.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { CcardComponent } from './ccard/ccard.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    SingleProdectComponent,
    routingComponents,
    LoginComponent,
    SignupComponent,
    CcardComponent,
  
 
  
  ],
  imports: [
    BrowserModule,
    NgbModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    CommonModule,
    


   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
