import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { ModalLoginComponent } from './components/modal/modal-login/modal-login.component';
import { HeaderComponent } from './components/header/header.component';
import { CompanyDashboardComponent } from './components/company-dashboard/company-dashboard.component';
import { UsersCompanyComponent } from './components/users-company/users-company.component';
import { UserComponent } from './components/users-company/user/user.component';
import { SearchComponent } from './components/search/search.component';
import { AuthInterceptor } from './core/auth/auth.interceptor';
import { ModalDialogComponent } from './components/modal/modal-dialog/modal-dialog.component';
import { ModelRegistrComponent } from './components/modal/modal-registr/model-registr.component';

@NgModule({
  declarations: [
    AppComponent,
    ModalLoginComponent,
    ModelRegistrComponent,
    HeaderComponent,
    CompanyDashboardComponent,
    UsersCompanyComponent,
    UserComponent,
    SearchComponent,
    ModalDialogComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
