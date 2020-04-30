import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// HttpModule
import { HttpClientModule } from '@angular/common/http';

// Service and Guard
import { ConstantService } from './service/common/constant.service';
import { AuthService } from './service/auth.service';
import { AuthGuard } from './auth/auth.guard';

// Form Module
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Chart JS
import { ChartModule } from 'angular2-chartjs';

import { FrontendLayoutComponent } from './layouts/frontend-layout/frontend-layout.component';
import { BackendLayoutComponent } from './layouts/backend-layout/backend-layout.component';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import { HeaderFrontComponent } from './shared/frontend/header-front/header-front.component';
import { FooterFrontComponent } from './shared/frontend/footer-front/footer-front.component';
import { HomeComponent } from './pages/frontend/home/home.component';
import { AboutComponent } from './pages/frontend/about/about.component';
import { ContactComponent } from './pages/frontend/contact/contact.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { DashboardComponent } from './pages/backend/dashboard/dashboard.component';
import { StockComponent } from './pages/backend/stock/stock.component';
import { UsersComponent } from './pages/backend/users/users.component';
import { BackendNavbarComponent } from './shared/backend/backend-navbar/backend-navbar.component';
import { BackendSidebarComponent } from './shared/backend/backend-sidebar/backend-sidebar.component';

@NgModule({
  declarations: [
    AppComponent,
    FrontendLayoutComponent,
    BackendLayoutComponent,
    AuthLayoutComponent,
    HeaderFrontComponent,
    FooterFrontComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    LoginComponent,
    RegisterComponent,
    DashboardComponent,
    StockComponent,
    UsersComponent,
    BackendNavbarComponent,
    BackendSidebarComponent
  ],
  imports: [
    HttpClientModule,
    ChartModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [AuthService, AuthGuard, ConstantService],
  bootstrap: [AppComponent]
})
export class AppModule { }
