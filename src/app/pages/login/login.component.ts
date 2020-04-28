import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  message:string = "Hello Angular"
  person:object = {
    'name':'Samit',
    'email':'samit@gmail.com',
    'age':35,
    'gender':'Male'
  }

  imgname = "assets/images/logo/logo_str.png"

  // 2 Way binding
  userData = {
    'username': '',
    'password': ''
  }

  msgStatus:string = ''

  constructor() { }

  ngOnInit(): void {
    this.message = "สวัสดีแองกูล่า"
  }

  // ฟังก์ชัน submitLogin
  submitLogin(){
    if(this.userData.username == "admin" && this.userData.password == "1234"){
      // alert("Login Success");
      this.msgStatus = "<p class='alert alert-success text-center'>Login Success</p>"
    }else{
      // alert("Login Fail!!")
      this.msgStatus = "<p class='alert alert-danger text-center'>Login Fail!!</p>"
    }
  }

}
