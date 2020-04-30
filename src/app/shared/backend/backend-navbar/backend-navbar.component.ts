import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../service/auth.service'

@Component({
  selector: 'app-backend-navbar',
  templateUrl: './backend-navbar.component.html',
  styleUrls: ['./backend-navbar.component.scss']
})
export class BackendNavbarComponent implements OnInit {

  constructor(private auth: AuthService) { }

  ngOnInit(): void {
  }

  signout(){
    this.auth.logout()
  }

}
