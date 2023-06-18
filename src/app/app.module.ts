import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { ModalLoginComponent } from './components/modal/modal-login/modal-login.component';
import { HeaderComponent } from './components/header/header.component';
import { DepartamentDashboardComponent } from './components/departaments-dashboard/departament-dashboard.component';
import { UsersDepartamentComponent } from './components/users-departament/users-departament.component';
import { UserComponent } from './components/users-departament/user/user.component';
import { SearchComponent } from './components/search/search.component';
import { AuthInterceptor } from './core/auth/auth.interceptor';
import { ModalDialogComponent } from './components/modal/modal-dialog/modal-dialog.component';
import { ModelRegistrComponent } from './components/modal/modal-registr/model-registr.component';
import { DepartamentComponent } from './components/departaments-dashboard/departamet/departament.component';

@NgModule({
  declarations: [
    AppComponent,
    ModalLoginComponent,
    ModelRegistrComponent,
    HeaderComponent,
    DepartamentDashboardComponent,
    UsersDepartamentComponent,
    UserComponent,
    SearchComponent,
    ModalDialogComponent,
    DepartamentComponent,
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
