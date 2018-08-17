import { Component, OnInit } from '@angular/core';
import {CourseServiceClient} from '../services/course.service.client';
import {SectionServiceClient} from '../services/section.service.client';

@Component({
  selector: 'app-sections',
  templateUrl: './sections.component.html',
  styleUrls: ['./sections.component.css']
})
export class SectionsComponent implements OnInit {

  courses = []
  sections = []
  selectedCourse = {
    title: '',
    _id: -1
  }
  section = {
    title: ''
  }

  constructor(private sectionService: SectionServiceClient,
              private courseService: CourseServiceClient) { }

  selectCourse = course => {
    this.selectedCourse = course;
    this.sectionService
      .findSectionsForCourse(course._id)
      .then(sections => this.sections = sections);
  }

  addSection = section => {
    section.courseId = this.selectedCourse._id;
    this.sectionService
      .createSection(section)
      .then(() => {
        return this.sectionService
          .findSectionsForCourse(this.selectedCourse._id);
      })
      .then(sections => this.sections = sections);
  }

  ngOnInit() {
    this.courseService.findAllCourses()
      .then(courses => this.courses = courses);
  }

}
