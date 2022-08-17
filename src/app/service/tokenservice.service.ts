import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { User } from '../model/User';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
const TOKEN_KEY = "auth-token";
const USER_KEY = "auth-user";
const httpOptions = {
  headers: new HttpHeaders({ "Content-Type": "application/json" })
};
@Injectable({
  providedIn: 'any'
})
export class TokenserviceService {
  userInfo = new BehaviorSubject(null);
  baseUrl = environment.url;
  token!:string;
  userconnected!:string;
  constructor(private http:HttpClient,private router:Router) { }
  login(user:User){
    return this.http.post<User>("http://localhost:8089/login",user,{observe:'response'});
  }

  
  saveToken(refresh_token:string){
    localStorage.removeItem('Authorization');
    localStorage.setItem('Authorization',refresh_token);
    this.token=refresh_token;
   
  }
  loadToken(){
  localStorage.getItem('Authorization');
  }
  
  getToken():string{
    return this.token;
  }
  saveuserconnected(UC:string){
    localStorage.removeItem('userconnected');
    localStorage.setItem('userconnected',UC);
    this.userconnected=UC;
   
  }
  getUserconnected():string{
    return this.userconnected;
  }
  loggedIn(){
    return !!localStorage.getItem('Authorization');
  }
  
   logout() {
    window.sessionStorage.clear();
    localStorage.removeItem('Authorization');
    localStorage.removeItem('userconnected');
    
    this.router.navigate(['/acceuil']);
  }

  getUserFromToken(token:any)
  {
    return this.http.get<User>(this.baseUrl+"getUserByToken?token="+token);

  }


}
