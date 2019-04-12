import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor() { }
  loginForm:FormGroup;
  ngOnInit() {
    this.loginForm=new FormGroup({
     
      'email':new FormControl(null,[Validators.required,Validators.email]),
      'password':new FormControl(null,Validators.required),
      
  });
  }
  onSubmit(){
    //var currentUser=[];
      var retriveData = localStorage.getItem("CurrentUser");
      var currentUser = JSON.parse(retriveData);
   // console.log(movies2);

    if(this.loginForm.value['email']===currentUser[1] && String(this.loginForm.value['password'])===currentUser[2]) 
    {
      console.log("congration");
    }
    else{
     // return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
    }
    
  }
}


