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
  constructor(private router: Router,
              private userService: UserServiceClient) {
  }

  register = (user) => {
    if (user.password === user.password2) {
      const newUser = {
        username: user.username,
        password: user.password,
        firstName: String,
        lastName: String,
        email: String,
        phone: String,
        role: 'student',
        sections: []
      };
      if (user.username === 'admin' && user.password === 'admin') {
        newUser.role = 'admin';
      }
      console.log(newUser);
      this.userService.register(newUser)
        .then(status => {
          if (status === 200) {
            return this.router.navigate(['/profile']);
          } else {
            alert('Register failed. Username may already exist.');
          }
        });
    } else {
      alert('Passwords must match.');
    }
  }

  ngOnInit() {
  }
}
