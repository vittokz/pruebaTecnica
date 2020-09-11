import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS, HttpHeaders} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListProductosComponent } from './components/list-productos/list-productos.component';
import { AgGridModule } from 'ag-grid-angular';
import { ProductosServiceService } from './servicios/productos-service.service';
import { HeaderInterceptor } from './interceptors/header.interceptor'

@NgModule({
  declarations: [
    AppComponent,
    ListProductosComponent
  ],
  imports: [
    BrowserModule,
    AgGridModule.withComponents([]),
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    ProductosServiceService,
    {
      provide : HTTP_INTERCEPTORS,
      useClass: HeaderInterceptor,
      multi: true
    } 
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
