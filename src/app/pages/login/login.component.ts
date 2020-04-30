import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../service/auth.service';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserService } from '../../service/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  // Form Validatation
  loginForm: FormGroup
  submitted: boolean = false
  msgStatus:string = ''

  userData = {
    "username":"",
    "password":""
  }

  userLogin = {
    "username":"",
    "fullname":"",
    "userstatus":""
  }

  constructor(
    private auth: AuthService, 
    private route: Router,
    private formBuilder: FormBuilder,
    private api: UserService) { }

  ngOnInit(): void {
    // Validation Form
    this.loginForm = this.formBuilder.group({
      username:['',[Validators.required, Validators.minLength(3)] ],
      password:['',[Validators.required] ],
    })
  }

  // ฟังก์ชัน submitLogin
  submitLogin(){

    this.submitted = true
    if(this.loginForm.valid){

      this.userData.username = this.loginForm.value.username;
      this.userData.password = this.loginForm.value.password;

      this.api.SignIn(this.userData).subscribe((data: {}) => {
          // console.log(data)
          if(data['status'] == "success"){

            this.userLogin = {
              "username":this.loginForm.value.username,
              "fullname":data['fullname'],
              "userstatus":data['user_status']
            }

            this.msgStatus = "<p class='alert alert-success text-center'>Login Success</p>"
            // ส่งค่า username ไปเก็บลง localStorage ไว้
            this.auth.sendToken(this.userLogin)
            // Redirect ไปหน้า backend
            this.route.navigate(['backend'])
          }else{
            // alert("Login Fail!!")
            this.msgStatus = "<p class='alert alert-danger text-center'>Login Fail!!</p>"
          }
          
      });
    }
  }
}
