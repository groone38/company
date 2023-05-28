import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ModalLoginComponent } from './components/modal/modal-login/modal-login.component';
import { ModelRegistrComponent } from './components/modal/modal-registr/model-registr/model-registr.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  { path: 'login', component: ModalLoginComponent },
  { path: 'register', component: ModelRegistrComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
