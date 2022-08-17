import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../model/User';

const httpOptions = {
  headers: new HttpHeaders({ "Content-Type": "application/json" })
};
@Injectable({
  providedIn: 'root'
})
export class UserserviceService {

 static currentuser:any = {}
  constructor(private http: HttpClient) { }
  baseUrl="http://localhost:8089/resetpassword/{email}/{newpass}/{cofirm}";
  findalluser():Observable<any> {
    return this.http.get("http://localhost:8089/users");
  }
  
 /* signup(user:User):Observable<any>{
    return this.http.post<User>("http://localhost:8081/Elearning/add",user),httpOptions;
    }*/
    signup(user): Observable<any> {
      return this.http.post(
        "http://localhost:8089/addUsera",
        {
          userName: user.userName,
          lastName: user.lastName,
          email:user.email,
          password:user.password,
	        lastname:user.lastname,
          confirmepassword:user.confirmepassword
	       
        },
        httpOptions
      );
    }
  ResetPassword(email:string,newpass:string,cofirm:string){
    return this.http.post(`${this.baseUrl}` + `/create`, {email,newpass,cofirm})
  }
  Activecompte(username:string){
    let url=`http://localhost:8089/activecompte/${username}`
    return this.http.put<User>(url,username)
  }
  getUser(username: string): Observable <User> {
    let url = `http://localhost:8089/getUserName/${username}`;
    return this.http.get< User >(url)  
}
}
