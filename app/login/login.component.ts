import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor( private activatedRoute: ActivatedRoute, 
    private router: Router) { }
  loginForm:FormGroup;
  ngOnInit() {
    this.loginForm=new FormGroup({
     
      'email':new FormControl(null,[Validators.required,Validators.email]),
      'password':new FormControl(null,Validators.required),
      
  });
  }
  onSubmit(){
    
      var retriveData = localStorage.getItem("CurrentUser");
      var currentUser = JSON.parse(retriveData);
   

    if(this.loginForm.value['email']===currentUser[1] && String(this.loginForm.value['password'])===currentUser[2]) 
    {
      this.router.navigate(['home']);    
   
    } else{
      this.router.navigate(['/']); 
    }
    
  }
}


