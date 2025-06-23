import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
form: FormGroup;
error: string | null = null;

constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) {
  this.form = this.fb.group({
    userName: [''],
    password: ['']
  });
}

onSubmit() {
  console.log('OnSubmit called');
  const { userName, password } = this.form.value;
  console.log(`Login attempt with username: ${userName} and password: ${password}`);
  
  this.authService.login(userName, password).subscribe({
    next: () => {
      console.log('Login successful, navigating to dashboard');
      
      this.router.navigate(['/dashboard']);
    },
    error: (err) => {
      console.log(`Login failed, displaying error message : ${err.message}`);
      
      this.error = 'Felaktigt användarnamn eller lösenord' 
    }
  });
}
}
