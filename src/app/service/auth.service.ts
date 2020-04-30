import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  userProfile = {
    "fullname":"",
    "userstatus":""
  }

  constructor(private myRoute: Router) { }

  sendToken(token:any){
    // บันทึกข้อมูลที่ได้ลง localStorage
    localStorage.setItem("LoggedInUser", token['username'])
    localStorage.setItem("LoggedFullname", token['fullname'])
    localStorage.setItem("LoggedUserStatus", token['userstatus'])
  }

  getUser(){
    this.userProfile.fullname = localStorage.getItem("LoggedFullname")
    this.userProfile.userstatus = localStorage.getItem("LoggedUserStatus")
    return this.userProfile
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
