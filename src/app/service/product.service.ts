import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs'
import { ConstantService } from './common/constant.service'

// model
import { ProductModel } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  // Headers
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    })
  }

  constructor(private http: HttpClient, private constant: ConstantService) { }

  // อ่านข้อมูล Product ทั้งหมด (Method GET)
  getProducts(): Observable<ProductModel>{
    return this.http.get<ProductModel>(this.constant.baseAPIURL + 'products')
  }

  // การเพิ่มข้อมูลใหม่ (Method POST)
 createProduct(product): Observable<ProductModel>{
   return this.http.post<ProductModel>(this.constant.baseAPIURL+ 'products', JSON.stringify(product), this.httpOptions)
 }


}
