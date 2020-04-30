import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs'
import { ConstantService } from './common/constant.service'

import { UserModel } from '../models/user.model'

@Injectable({
  providedIn: 'root'
})
export class UserService {

  // Headers
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    })
  }

  constructor(private http: HttpClient, private constant: ConstantService) { }

  // method check login
 SignIn(data): Observable<UserModel>{
    return this.http.post<UserModel>(this.constant.baseAPIURL+ 'user/login', JSON.stringify(data), this.httpOptions)
 }

}
