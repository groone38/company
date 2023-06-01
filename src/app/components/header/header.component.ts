import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { GeneralService } from './../services/general.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  constructor(
    private readonly router: Router,
    public readonly generalService: GeneralService
  ) {}

  openModal() {
    this.generalService.showDialog = true;
  }

  onHandleLogout() {
    localStorage.removeItem('token');
    this.router.navigate(['login']);
  }
}
