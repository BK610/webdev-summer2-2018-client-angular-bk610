import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {UserServiceClient} from '../services/user.service.client';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  username: '';
  password: '';
  password2: '';
  // firstName: '';
  // lastName: '';
  // email: '';
  // phone: '';
  // dateOfBirth: '';
  // role: '';
  constructor(private router: Router,
              private userService: UserServiceClient) {
  }

  register = (username,
              password,
              password2,
              // firstName,
              // lastName,
              // email,
              // phone,
              // dateOfBirth,
              /*role*/) => {
    if (password === password2) {
      const user = {
        username: username,
        password: password,
        // firstName: firstName,
        // lastName: lastName,
        // email: email,
        // phone: phone,
        // dateOfBirth: dateOfBirth,
        // role: role
      };
      this.userService.register(user);
        // .then(status => {
        //   if (status === 200) {
        //     return this.router.navigate(['/profile']);
        //   } else {
        //     alert('Register failed. Username may already exist.');
        //   }
        // });
    } else {
      alert('Passwords must match.');
    }
  }

  ngOnInit() {
  }
}
