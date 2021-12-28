import { Component, OnInit } from '@angular/core';
import {FormControl,FormGroup,FormBuilder, NgForm, ControlContainer} from '@angular/forms';
import { CommonService } from '../common.service';
@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {
  title = 'logIn';
  loginForm:FormGroup;
  email:any;
  password:any;
 
  constructor(private frmbuilder:FormBuilder,private common:CommonService){
    this.loginForm=frmbuilder.group({
      email:new FormControl(),
      password:new FormControl()
    });
}
  ngOnInit(): void {
      
  }
  login(){
    console.log(this.loginForm.value);
    this.common.login(this.loginForm.value).subscribe((response:any)=>{
    console.log(response);
    

    })
}
}
