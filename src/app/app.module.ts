import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {ReactiveFormsModule} from '@angular/forms';
import { LogInComponent } from './log-in/log-in.component';
import { SignupComponent } from './signup/signup.component';
import { HttpClientModule } from '@angular/common/http';
import { GetDataComponent } from './get-data/get-data.component';
import {FormsModule} from '@angular/forms';
import { ValueLocalStorageComponent } from './value-local-storage/value-local-storage.component';

@NgModule({
  declarations: [
    AppComponent,
    LogInComponent,
    SignupComponent,
    GetDataComponent,
    ValueLocalStorageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
