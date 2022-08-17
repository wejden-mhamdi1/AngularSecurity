import { HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    // Get the auth token from the service.
    const authToken = localStorage.getItem("Authorization");

    // Clone the request and replace the original headers with
    // cloned headers, updated with the authorization.
    if(authToken){
      const authReq = req.clone({
        headers: req.headers.set("Authorization",authToken)
      });
      return next.handle(authReq);
    }else{
      return next.handle(req);
    }
    

    // send cloned request with header to the next handler.
   
  }
}