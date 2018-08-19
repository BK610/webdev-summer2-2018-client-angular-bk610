import { Component, OnInit } from '@angular/core';
import {CourseServiceClient} from '../services/course.service.client';
import {SectionServiceClient} from '../services/section.service.client';
import {UserServiceClient} from '../services/user.service.client';

@Component({
  selector: 'app-sections',
  templateUrl: './sections.component.html',
  styleUrls: ['./sections.component.css']
})
export class SectionsComponent implements OnInit {
  courses = [];
  sections = [];
  selectedCourse = {
    title: '',
    id: Number
  };
  section = {
    _id: '',
    name: '',
    seats: 24
  };
  currentUser = {
    _id: 0,
    role: ''
  }

  constructor(private sectionService: SectionServiceClient,
              private courseService: CourseServiceClient,
              private userService: UserServiceClient) { }

  selectCourse = course => {
    this.selectedCourse = course;
    this.sectionService.findSectionsForCourse(course.id)
      .then(sections => this.sections = sections);
  }

  addSection = (section) => {
    section.courseId = this.selectedCourse.id;

    this.sectionService.createSection(section)
      .then(() => {
        return this.sectionService.findSectionsForCourse(this.selectedCourse.id);
      })
      .then(sections => this.sections = sections);
  }

  deleteSection = (section) => {
    this.sectionService.deleteSection(section._id)
      .then(() => {
        return this.sectionService.findSectionsForCourse(this.selectedCourse.id);
      })
      .then(sections => this.sections = sections);
  }

  enroll = (sectionId) => {
    console.log(this.currentUser);
    console.log(sectionId);
    this.sectionService.enroll(this.currentUser._id, sectionId)
      .then(response => response.json());
}

  ngOnInit() {
    this.courseService.findAllCourses()
      .then(courses => {
        this.courses = courses;
        this.userService.currentUser()
          .then(user => this.currentUser = user);
      });
  }

}
