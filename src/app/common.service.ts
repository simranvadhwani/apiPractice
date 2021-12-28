import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import {HttpClient,HttpHeaders} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
 
})
export class CommonService {
  header = new HttpHeaders({
    'Access-Control-Allow-Origin':'*',
    'Content-type':'application/json',
  });

  constructor(private http:HttpClient) { }
  Url=environment.baseUrl;
  envUrl(){
    return this.Url;
  }
  signup(data:any){
    return this.http.post(this.envUrl() + 'register',data)
  }
  login(data:any){
    return this.http.post(this.envUrl() + 'login',data)
  }
  getusers(id:any){
    return this.http.get(this.envUrl() + 'users?page='+id)
  }
}
