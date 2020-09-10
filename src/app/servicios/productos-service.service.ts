import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpHandler, HttpEvent, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpInterceptor} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductosServiceService implements HttpInterceptor {
 
  apiUrl: string ="http://35.224.229.246/rest/V1/"; //ruta api rest

  constructor(private http: HttpClient) { }

  intercept(req: HttpRequest<any>,next: HttpHandler):Observable<HttpEvent<any>>{
    console.log("ingreso al interceptor");
    const headers = req.clone({
      headers: req.headers.set('Authorization', 'Bearer lyn6s01azdmnva5x1qmbmb059ih9rmp1')
    });
    
    return next.handle(headers);
  }



  getProductos(): Observable<any>{
     return this.http.get<any>(this.apiUrl + "products?searchCriteria");
  }
}
