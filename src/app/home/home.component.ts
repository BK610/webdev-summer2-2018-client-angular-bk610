import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {CourseServiceClient} from '../services/course.service.client';
import {UserServiceClient} from '../services/user.service.client';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  courses = [];
  selectedCourse = {
    _id: ''
  };
  user = {};
  constructor(private router: Router,
              private courseService: CourseServiceClient,
              private userService: UserServiceClient) {
  }

  navigateToCourse(course) {
    this.selectedCourse = course;
    const url = '/courses/' + course.id;
    this.router.navigate([url]);
  }
  navigateToEnrollment(course) {
    this.selectedCourse = course
    const url = '/sections/' + course.id;
    this.router.navigate([url]);
  }

  ngOnInit() {
    this.courseService.findAllCourses()
      .then((courses) => this.courses = courses);

    this.userService.currentUser()
      .then((user) => this.user = user);
  }
}
