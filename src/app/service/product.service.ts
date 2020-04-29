import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs'

// model
import { ProductModel } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  // กำหนด Base URL
  apiURL = "http://localhost/ministock_api/public/api/";

  // Headers
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    })
  }

  constructor(private http: HttpClient) { }

  // อ่านข้อมูล Product ทั้งหมด (Method GET)
  getProducts(): Observable<ProductModel>{
    return this.http.get<ProductModel>(this.apiURL + 'products')
  }

  // การเพิ่มข้อมูลใหม่ (Method POST)
 createProduct(product): Observable<ProductModel>{
   return this.http.post<ProductModel>(this.apiURL+ 'products', JSON.stringify(product), this.httpOptions)
 }


}
