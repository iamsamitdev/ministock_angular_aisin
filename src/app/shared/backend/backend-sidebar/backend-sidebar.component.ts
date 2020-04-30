import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../service/auth.service'

@Component({
  selector: 'app-backend-sidebar',
  templateUrl: './backend-sidebar.component.html',
  styleUrls: ['./backend-sidebar.component.scss']
})
export class BackendSidebarComponent implements OnInit {

  constructor(private auth: AuthService) { }

  ngOnInit(): void {
  }

  signout(){
    this.auth.logout()
  }

}
