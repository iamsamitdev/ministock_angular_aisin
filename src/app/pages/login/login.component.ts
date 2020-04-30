import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../service/auth.service';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

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

  constructor(
    private auth: AuthService, 
    private route: Router,
    private formBuilder: FormBuilder) { }

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
      // alert("Form is valid")
      if(this.loginForm.value.username == "admin" && this.loginForm.value.password == "1234"){
        // alert("Login Success");
        this.msgStatus = "<p class='alert alert-success text-center'>Login Success</p>"
        // ส่งค่า username ไปเก็บลง localStorage ไว้
        this.auth.sendToken(this.loginForm.value.username)
        // Redirect ไปหน้า backend
        this.route.navigate(['backend'])
      }else{
        // alert("Login Fail!!")
        this.msgStatus = "<p class='alert alert-danger text-center'>Login Fail!!</p>"
      }
    }
  

  }

}
