import { Injectable, Injector } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { stringify } from '@angular/compiler/src/util';

@Injectable()
export class HeaderInterceptor implements HttpInterceptor {
    //apiUrl: string ="http://35.224.229.246/rest/V1/"; //ruta api rest
  
    constructor(private http: HttpClient) { }
  
    intercept(req: HttpRequest<any>,next: HttpHandler):Observable<HttpEvent<any>>{       
        const token = localStorage.getItem('auth_token'); 

      req = req.clone({
          setHeaders: {
                'Authorization': 'Bearer ' + token, 
                'Access-Control-Allow-Headers': 'Origin, Content-Type, X-Auth-Token' ,
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
          'X-Frame-Options':'SAMEORIGIN',
          'Accept': 'application/json,text/html,application/xhtml+xml,application/xml',
          'Content-Type': 'application/json',
          'mode': 'no-cors'
        },
          withCredentials: true
      })

      return next.handle(req);
    }
  }
