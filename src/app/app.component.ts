import {Component, OnInit} from '@angular/core';
import {UserServiceClient} from './services/user.service.client';
import {Router} from '@angular/router';

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

  constructor(private userService: UserServiceClient,
              private router: Router) {
  }

  logout() {
    this.userService.logout()
      .then(() => {
        this.currentUser = {
          username: 'null'
        };
        this.router.navigate(['/login']);
      });
  }

  ngOnInit() {
    this.userService.currentUser()
      .then((user) => this.currentUser = user);
  }
}
