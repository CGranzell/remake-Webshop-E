import { Component } from '@angular/core';
import { AuthService } from '../../auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {

constructor(private authService: AuthService, private router: Router) {}

logout() {
  console.log('Logout called');
  this.authService.logout();
  console.log('User logged out, navigating to landing page');
  this.router.navigate(['/landing']);
}
}
