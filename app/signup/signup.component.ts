import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute, 
    private router: Router ) { }
  signupForm:FormGroup;
  ngOnInit(){
    this.signupForm=new FormGroup({
      'username':new FormControl(null,Validators.required),
      'email':new FormControl(null,[Validators.required,Validators.email]),
      'password':new FormControl(null,Validators.required),
      
  });
}
submitForm(){
  var currentUser = [];
  currentUser[0] = this.signupForm.value['username'];
  currentUser[1] = this.signupForm.value['email'];
  currentUser[2] = this.signupForm.value['password'];
  localStorage.setItem('CurrentUser', JSON.stringify(currentUser));
 
  if(currentUser[0]&&currentUser[1]&&currentUser[2])
  {
    this.router.navigate(['home']);
  }else{
    this.router.navigate(['/signup']);
  }
}
}
