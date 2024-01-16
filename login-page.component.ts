import { Component } from '@angular/core';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent {
  credentials = { email: '', password: '' };

  login(): void {
    // Basic validation
    if (this.credentials.email && this.credentials.password) {
      // Simulate a login action
      console.log('Login successful');
    } else {
      console.error('Invalid credentials');
    }
  }
}