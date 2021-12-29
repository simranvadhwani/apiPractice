import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LogInComponent } from './log-in/log-in.component';
import { SignupComponent } from './signup/signup.component';
import { ValueLocalStorageComponent } from './value-local-storage/value-local-storage.component';

const routes: Routes = [
  {
    path:'login',component:LogInComponent
  },
  {
    path:'signup',component:SignupComponent
  },
  {
    path:'valuelocalstorage',component:ValueLocalStorageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
