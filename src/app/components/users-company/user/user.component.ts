import { Component, Input } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent {
  constructor() {}
  @Input() user?: User;
  @Input() index: number = 0;
}
