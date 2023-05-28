import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ModalLoginComponent } from './components/modal/modal-login/modal-login.component';
import { ModelRegistrComponent } from './components/modal/modal-registr/model-registr/model-registr.component';
import { HeaderComponent } from './components/header/header.component';
import { CompanyDashboardComponent } from './components/company-dashboard/company-dashboard.component';
import { UsersCompanyComponent } from './components/users-company/users-company.component';
import { UserComponent } from './components/users-company/user/user.component';

@NgModule({
  declarations: [
    AppComponent,
    ModalLoginComponent,
    ModelRegistrComponent,
    HeaderComponent,
    CompanyDashboardComponent,
    UsersCompanyComponent,
    UserComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
