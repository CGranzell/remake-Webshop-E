import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  errorMessage: string = '';


constructor(private authService: AuthService, public activeModal: NgbActiveModal) {

}

onSubmit() {
  this.authService.login(this.username, this.password).subscribe({
    next: () => {
      this.activeModal.close();
      console.log('Login successful');
    },
    error: (err) => { 
      this.errorMessage = 'Login failed. Please check your credentials.';
      console.error('Login error:', err);
    }
  
  });
 }
}
