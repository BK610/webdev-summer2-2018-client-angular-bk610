
import {Injectable} from '@angular/core';

@Injectable()
export class CourseServiceClient {
  COURSE_API_URL = 'https://cs4550-summer2-2018-bk610.herokuapp.com/api/course';
  findAllCourses() {
    return fetch(this.COURSE_API_URL)
      .then(response => response.json());
  }

  findAllModulesForCourse(courseId) {
    return fetch(this.COURSE_API_URL + '/' + courseId + '/module')
      .then(response => response.json());
  }
}
