import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../../services/user/user.service';
import { User } from '../../interfaces/user.interface';

@Component({
  standalone: false,
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit {
  user: User | null = null;

  constructor(
    private route: ActivatedRoute,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    const userId = Number(this.route.snapshot.paramMap.get('id'));
    
    this.userService.getUsers().subscribe(users => {
      const foundUser = users.find(u => u.id === userId);
      console.log("Utente trovato:", this.user); 
      if (foundUser) {
        this.user = foundUser;
      } else {
        console.error('Utente non trovato');
      }
    });
  }
}
