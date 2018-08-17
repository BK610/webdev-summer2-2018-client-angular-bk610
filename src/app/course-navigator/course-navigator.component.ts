import {ActivatedRoute, Params} from '@angular/router';
import {Component, OnInit} from '@angular/core';
import {CourseServiceClient} from '../services/course.service.client';
import {UserServiceClient} from '../services/user.service.client';

@Component({
  selector: 'app-course-navigator',
  templateUrl: './course-navigator.component.html',
  styleUrls: ['./course-navigator.component.css']
})
export class CourseNavigatorComponent implements OnInit {
  user = {};
  courseId = {};
  modules = [];
  selectedModule = {
    lessons: []
  };
  selectedLesson = {
    widgets: []
  };

  constructor(private activatedRoute: ActivatedRoute,
              private courseService: CourseServiceClient,
              private userService: UserServiceClient) {
  }

  selectModule(module) {
    this.selectedModule = module;
    this.selectedLesson = {widgets: []};
  }

  selectLesson(lesson) {
    this.selectedLesson = lesson;
  }

  newLineSplit(text) {
    return text.split('\n');
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params: Params) => {
      this.courseId = params['courseId'];
    });

    this.courseService
      .findAllModulesForCourse(this.courseId)
      .then(modules => this.modules = modules)
      .then(() => this.userService.currentUser()
        .then((user) => this.user = user));
  }

}
