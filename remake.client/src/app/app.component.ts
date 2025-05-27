import { Component, OnInit } from '@angular/core';
import { UserService, User } from './users/user.service'; 



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  users: User[] = [] 
  
  
  constructor(private userService: UserService) {}
  
  ngOnInit() {
    
    this.userService.getUsers().subscribe({
      
      next: (data) => {
        this.users = data;
        console.log('Users fetched successfully:', data);
        
      },
      error: (err) => { 
        console.error('Error fetching users:', err);
      }
    })
  }
}
  
  
  


  
