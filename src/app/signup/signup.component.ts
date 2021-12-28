import { Component, OnInit } from '@angular/core';
import {FormControl,FormGroup,FormBuilder, NgForm, ControlContainer} from '@angular/forms';
import { CommonService } from '../common.service';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signupForm:FormGroup;
  email:any;
  password:any;
 
  constructor(private frmbuilder:FormBuilder,private common:CommonService){
    this.signupForm = frmbuilder.group({
      email:new FormControl(),
      password:new FormControl()
    });
  
  }
  signup(){
    console.log(this.signupForm.value);
    this.common.signup(this.signupForm.value).subscribe((response:any)=>{
    console.log(response);
  })
  
}

  ngOnInit(): void {
  }



}
