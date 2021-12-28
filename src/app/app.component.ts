import { Component } from '@angular/core';
import {FormControl,FormGroup,FormBuilder, NgForm, ControlContainer} from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'logIn';
  signupForm:FormGroup;
  email:any;
  password:any;
 
  constructor(private frmbuilder:FormBuilder){
    this.signupForm=frmbuilder.group({
      email:new FormControl(),
      password:new FormControl()
    });
  
  }
  postData(signupForm:any){
    console.log(signupForm.value);
}
  
    

}


