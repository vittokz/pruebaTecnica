import { Component, OnInit } from '@angular/core';
import { ProductosServiceService } from 'src/app/servicios/productos-service.service';

@Component({
  selector: 'app-list-productos',
  templateUrl: './list-productos.component.html',
  styleUrls: ['./list-productos.component.scss']
})
export class ListProductosComponent implements OnInit {

  token: string = "";

  //defino los nombre de los headers de las columnas de la tabla
  columnDefs = [
      {headerName: 'Imagen', field: 'imagen', sortable: true , filter : true},
      {headerName: 'ID', field: 'id' , sortable: true , filter : true },
      {headerName: 'Producto', field: 'producto' , sortable: true , filter : true},
      {headerName: 'SKU', field: 'sku' , sortable: true , filter : true},
      {headerName: 'Presentacion', field: 'presentacion' , sortable: true , filter : true},
      {headerName: 'Categorias', field: 'categorias' , sortable: true , filter : true},
      {headerName: 'Tipo de Venta', field: 'tipo' , sortable: true , filter : true}
  ];

 //array que recibe los productos de la api 
  rowData = { 'items': [
    { imagen: 'imagen01', id: '01', producto: 'Alcohol', sku: '00001', presentacion: 'Botella', categorias: 'Liquido', tipo: 'Individual' } ,
    {
      imagen : 'Imagen02.jpg', id: '1', producto: 'APO FLUOXETINA 20 MG TABLETAS VIA ORAL',sku: '0000', presentacion: '', categorias:'', tipo: 'Individual'
    },
  ]};

  constructor(public productosService: ProductosServiceService) {     
    this.cargarProductos();
  }

  cargarProductos(){

    this.productosService.getToken().subscribe(data=>{
      //guardamos el token en el localStorage
      localStorage.setItem('auth_token', data); 

      this.productosService.getProductos().subscribe(
        data=>{
         //se recogeria los datos grecuperados del servicio        
         //this.rowData = data;
        }
      );
    });
      
  }

  ngOnInit(): void {
  }

}
