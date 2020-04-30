import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../service/auth.service'

@Component({
  selector: 'app-backend-navbar',
  templateUrl: './backend-navbar.component.html',
  styleUrls: ['./backend-navbar.component.scss']
})
export class BackendNavbarComponent implements OnInit {

  userProfile = {
    "fullname":"",
    "user_status": ""
  }

  constructor(private auth: AuthService) {
    this.userProfile.fullname = this.auth.getUser()['fullname']
    this.userProfile.user_status = this.auth.getUser()['userstatus']
   }

  ngOnInit(): void {
  }

  signout(){
    this.auth.logout()
  }

}
