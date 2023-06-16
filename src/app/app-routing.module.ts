import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ModalLoginComponent } from './components/modal/modal-login/modal-login.component';
import { ModelRegistrComponent } from './components/modal/modal-registr/model-registr.component';
import { DepartamentDashboardComponent } from './components/departaments-dashboard/departament-dashboard.component';
import { authGuard } from './core/guards/auth.guard';
import { UsersCompanyComponent } from './components/users-company/users-company.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'departament-dashboard',
    canActivate: [authGuard],
    children: [
      { path: '', component: DepartamentDashboardComponent },
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
