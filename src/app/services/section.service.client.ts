import {Injectable} from '@angular/core';

@Injectable()
export class SectionServiceClient {
  section_url = 'https://cs4550-bk610-node-server.herokuapp.com/api';
  // course_url = 'https://cs4550-summer2-2018-bk610.herokuapp.com/api';
  // url = 'http://localhost:8080/api';
  enroll = sectionId =>
    fetch(this.section_url + '/section/' + sectionId + '/enroll', {
      method: 'put',
      headers: {
        'content-type': 'application/json'
      },
      credentials: 'include'
    });

  findAllSections = () =>
    fetch(this.section_url + '/section', {
      headers: {
        'content-type': 'application/json'
      },
      credentials: 'include'
    })
      .then(response => response.json());

  findSectionsForCourse = courseId =>
    fetch(this.section_url + '/course/' + courseId + '/section', {
      headers: {
        'content-type': 'application/json'
      },
      credentials: 'include'
    })
      .then(response => response.json());

  createSection = section =>
    fetch(this.section_url + '/course/' + section.courseId + '/section', {
      method: 'post',
      headers: {
        'content-type': 'application/json'
      },
      credentials: 'include',
      body: JSON.stringify(section)
    })
      .then(response => response.json());

  deleteSection = (sectionId) => {
    console.log(sectionId);
    return fetch(this.section_url + '/section/' + sectionId, {
      method: 'delete',
      headers: {
        'content-type': 'application/json'
      },
      credentials: 'include'
    })
      .then(response => response.json());
  };

  findSectionsForStudent() {
    return fetch(this.section_url + '/student/section', {
      headers: {
        'content-type': 'application/json'
      },
      credentials: 'include'
    })
      .then(response => response.json());
  }
}
