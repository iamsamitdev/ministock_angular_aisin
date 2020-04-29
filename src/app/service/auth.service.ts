import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private myRoute: Router) { }

  sendToken(token:string){
    // บันทึกข้อมูลที่ได้ลง localStorage
    localStorage.setItem("LoggedInUser", token)
  }

  getToken(){
    // อ่านข้อมูล localStorage
    return localStorage.getItem("LoggedInUser")
  }

  isLoggedIn(){
    return this.getToken() !== null
  }

  logout(){
    // ลบข้อมูล localStorage
    localStorage.removeItem("LoggedInUser")
    this.myRoute.navigate(['/auth/login'])
  }

}
