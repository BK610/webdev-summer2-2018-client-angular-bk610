import {Component, OnInit} from '@angular/core';
import {UserServiceClient} from './services/user.service.client';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  currentUser = {
    username: 'null'
  };
  constructor(private userService: UserServiceClient) {
  }

  logout() {
    this.userService.logout()
      .then(() => this.currentUser = {
        username: 'null'
      });
  }

  ngOnInit() {
    this.userService.currentUser()
      .then((user) => this.currentUser = user);
  }
}
