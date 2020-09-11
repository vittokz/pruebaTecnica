import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductosServiceService{
  token: string ="";
  apiUrl: string ="http://35.224.229.246/rest/V1/"; //ruta api rest

  constructor(private http: HttpClient) { }

  public getToken(): Observable<any>{
    let options : any = {
      "username" : "tester",
      "password" : "95vbBJOeD$He5rq"
    }
    return this.http.post("http://35.224.229.246/rest/V1/integration/admin/token",options);
  }

  public getProductos(): Observable<any>{
    //problemas de cors
    //return this.http.get<any>(this.apiUrl + "products?searchCriteria");
    return this.http.get<any>('http://dummy.restapiexample.com/api/v1/employees')
  }
}
