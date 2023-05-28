import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ModalLoginComponent } from './components/modal/modal-login/modal-login.component';
import { ModelRegistrComponent } from './components/modal/modal-registr/model-registr/model-registr.component';
import { CompanyDashboardComponent } from './components/company-dashboard/company-dashboard.component';
import { authGuard } from './core/guards/auth.guard';
import { UsersCompanyComponent } from './components/users-company/users-company.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'company-dashboard',
    canActivate: [authGuard],
    children: [
      { path: '', component: CompanyDashboardComponent },
      { path: ':id', component: UsersCompanyComponent },
    ],
  },
  { path: 'login', component: ModalLoginComponent },
  { path: 'register', component: ModelRegistrComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
