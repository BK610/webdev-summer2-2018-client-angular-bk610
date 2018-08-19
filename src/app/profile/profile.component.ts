import {Component, OnInit} from '@angular/core';
import {UserServiceClient} from '../services/user.service.client';
import {SectionServiceClient} from '../services/section.service.client';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  username: String;
  firstName: String;
  lastName: String;
  email: String;
  phone: String;
  role: String;
  currentUser = {
    _id: 0,
    username: String,
    password: String,
    firstName: String,
    lastName: String,
    email: String,
    phone: String,
    role: '',
    address: String,
    sections: []
  };
  enrollments = [];

  constructor(private userService: UserServiceClient,
              private sectionService: SectionServiceClient) {
  }

  updateUser(user) {
    const newUser = {
      username: this.username,
      password: this.currentUser.password,
      firstName: this.firstName,
      lastName: this.lastName,
      email: this.email,
      phone: this.phone,
      address: this.currentUser.address,
      role: this.currentUser.role,
      sections: this.currentUser.sections
    };

    this.userService.updateUser(newUser)
      .then(response => response.ok)
      .then(() => alert('Profile updated.'));
  }

  unenroll() {
    // this.sectionService.unenroll()
  }

  ngOnInit() {
    this.userService.currentUser()
      .then(user => {
          this.currentUser = user;
        }
      )
      .then(() => this.sectionService.findSectionsForStudent(this.currentUser._id))
      .then(sections => this.enrollments = sections);
  }
}
