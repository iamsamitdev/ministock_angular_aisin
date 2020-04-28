import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FrontendLayoutComponent } from './layouts/frontend-layout/frontend-layout.component';
import { HomeComponent } from './pages/frontend/home/home.component';
import { AboutComponent } from './pages/frontend/about/about.component';
import { ContactComponent } from './pages/frontend/contact/contact.component';
import { LoginComponent } from './pages/login/login.component';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import { RegisterComponent } from './pages/register/register.component';
import { BackendLayoutComponent } from './layouts/backend-layout/backend-layout.component';
import { DashboardComponent } from './pages/backend/dashboard/dashboard.component';
import { UsersComponent } from './pages/backend/users/users.component';
import { StockComponent } from './pages/backend/stock/stock.component';


const routes: Routes = [
  // Route สำหรับเรียกหน้า Frontend Layout
  {
    path: '',
    component: FrontendLayoutComponent,
    children: [
      {
        path:'',
        component: HomeComponent
      },
      {
        path:'about',
        component:AboutComponent
      },
      {
      path:'contact',
      component:ContactComponent
      }
    ]
  },
  // Route สำหรับเรียกหน้า Login/Register
  {
    path:'auth',
    component:AuthLayoutComponent,
    children:[
      {
        path:'login',
        component: LoginComponent
      },
      {
        path:'register',
        component:RegisterComponent
      }
    ]
  },
  // Route สำหรับเรียกหน้า Backend
  {
    path: 'backend',
    component: BackendLayoutComponent,
    children:[
      {
        path: '',
        component: DashboardComponent
      },
      {
        path: 'stock',
        component: StockComponent
      },
      {
        path: 'users',
        component: UsersComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
