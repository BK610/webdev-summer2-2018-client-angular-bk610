import {Component, OnInit} from '@angular/core';
import {UserServiceClient} from '../services/user.service.client';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  username: String;
  password: String;
  firstName: String;
  lastName: String;
  email: String;
  phone: String;
  role: String;
  currentUser = {
    username: String,
    password: String,
    firstName: String,
    lastName: String,
    email: String,
    phone: String,
    role: '',
    sections: []
  };

  constructor(private userService: UserServiceClient) {
  }

  update(username,
         password,
         firstName,
         lastName,
         email,
         phone) {
    const newUser = {
      username: username,
      password: password,
      firstName: firstName,
      lastName: lastName,
      email: email,
      phone: phone,
    };
    this.userService.updateUser(newUser)
      .then(response => response.json());
  }

  ngOnInit() {
    this.userService.currentUser()
      .then(user => {
          this.currentUser = user;
          console.log(this.currentUser);
        }
      );
  }
}
