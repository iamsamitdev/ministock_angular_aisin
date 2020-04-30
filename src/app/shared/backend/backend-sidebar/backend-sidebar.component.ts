import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../service/auth.service'

@Component({
  selector: 'app-backend-sidebar',
  templateUrl: './backend-sidebar.component.html',
  styleUrls: ['./backend-sidebar.component.scss']
})
export class BackendSidebarComponent implements OnInit {

  userProfile = {
    "fullname":"",
    "user_status": ""
  }

  constructor(private auth: AuthService) {
    if(this.userProfile.user_status != ""){
      this.userProfile.fullname = this.auth.getUser()['fullname']
      this.userProfile.user_status = this.auth.getUser()['userstatus']
    }else{
      this.userProfile.user_status = "1"
    }
   }

  ngOnInit(): void {
  }

  signout(){
    this.auth.logout()
  }

}
