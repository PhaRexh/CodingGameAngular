import { Component, Input } from '@angular/core';
import { User } from '../../interfaces/user.interface';

@Component({
  standalone: false,
  selector: 'app-user-avatar',
  templateUrl: './user-avatar.component.html',
  styleUrls: ['./user-avatar.component.scss']
})
export class UserAvatarComponent {
  @Input() user?: User;
}
