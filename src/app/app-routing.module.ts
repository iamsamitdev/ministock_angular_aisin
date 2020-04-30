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

// Auth Guard
import { AuthGuard } from './auth/auth.guard';

const routes: Routes = [
  // Route สำหรับเรียกหน้า Frontend Layout
  {
    path: '',
    component: FrontendLayoutComponent,
    children: [
      {
        path:'',
        component: HomeComponent,
        data: { title: "Home"}
      },
      {
        path:'about',
        component:AboutComponent,
        data: { title: "About"}
      },
      {
      path:'contact',
      component:ContactComponent,
      data: { title: "Contact"}
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
        component: LoginComponent,
        data: { title: "Login"}
      },
      {
        path:'register',
        component:RegisterComponent,
        data: { title: "Register"}
      }
    ]
  },
  // Route สำหรับเรียกหน้า Backend
  {
    path: 'backend',
    component: BackendLayoutComponent,
    canActivate: [AuthGuard],
    children:[
      {
        path: '',
        component: DashboardComponent,
        data: { title: "Dashboard"}
      },
      {
        path: 'dashboard',
        component: DashboardComponent,
        data: { title: "Dashboard"}
      },
      {
        path: 'stock',
        component: StockComponent,
        data: { title: "Stock"}
      },
      {
        path: 'users',
        component: UsersComponent,
        data: { title: "Users"}
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
