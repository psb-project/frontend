import { Component } from '@angular/core';
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css']
})
export class RegisterPageComponent {
  onSubmit(registrationForm: NgForm) {
    // Handle registration logic here
    // You can access form values using registrationForm.value
    console.log(registrationForm.value);
  }
}
