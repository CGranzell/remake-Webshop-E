import { Component, OnInit } from '@angular/core';
import { UserService, User } from '../user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.scss'
})
export class UserListComponent {
users: User[] = [];
loading = false;
error = '';

constructor(private userService: UserService) {}

ngOnInit() : void{
  this.loading = true;
  this.userService.getUsers().subscribe({
    next: (data) => {
      this.users = data;
      this.loading = false;
    },
    error: (err) => {
      this.error = 'Failed to load users';
      this.loading = false;
      console.error('Error fetching users:', err);
    },
    complete: () => {
      console.log('User fetch completed');
    },
  });
}
}

