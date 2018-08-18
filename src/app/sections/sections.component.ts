import { Component, OnInit } from '@angular/core';
import {CourseServiceClient} from '../services/course.service.client';
import {SectionServiceClient} from '../services/section.service.client';

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
    name: '',
    seats: 24
  };

  constructor(private sectionService: SectionServiceClient,
              private courseService: CourseServiceClient) { }

  selectCourse = course => {
    this.selectedCourse = course;
    this.sectionService.findSectionsForCourse(course.id)
      .then(sections => {this.sections = sections;
      console.log(this.sections); });
  }

  addSection = (section) => {
    section.courseId = this.selectedCourse.id;
    console.log(section);

    this.sectionService.createSection(section)
      .then(() => {
        return this.sectionService.findSectionsForCourse(this.selectedCourse.id);
      })
      .then(sections => this.sections = sections);
  }

  deleteSection = (section) => {
    console.log(section);

    this.sectionService.deleteSection(section._id)
      .then(() => {
        return this.sectionService.findSectionsForCourse(this.selectedCourse.id);
      })
      .then(sections => this.sections = sections);
  }

  ngOnInit() {
    this.courseService.findAllCourses()
      .then(courses => this.courses = courses);
  }

}
