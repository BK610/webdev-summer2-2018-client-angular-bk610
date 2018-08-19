import {Injectable} from '@angular/core';

@Injectable()
export class SectionServiceClient {
  // section_url = 'https://cs4550-bk610-node-server.herokuapp.com/api';
  section_url = 'http://localhost:8080/api';
  enroll = (studentId, sectionId) => {
    console.log(studentId);
    console.log(sectionId);
    return fetch(this.section_url + '/student/' + studentId + '/section/' + sectionId, {
      method: 'post',
      credentials: 'include',
      headers: {
        'content-type': 'application/json'
      }
    })
      .then(response => response.json());
  };

  findAllSections = () =>
    fetch(this.section_url + '/section', {
      credentials: 'include',
      headers: {
        'content-type': 'application/json'
      }
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
    return fetch(this.section_url + '/section/' + sectionId, {
      method: 'delete',
      headers: {
        'content-type': 'application/json'
      },
      credentials: 'include'
    })
      .then(response => response.json());
  };

  findSectionsForStudent(studentId) {
    return fetch(this.section_url + '/student/' + studentId + '/section', {
      headers: {
        'content-type': 'application/json'
      },
      credentials: 'include'
    })
      .then(response => response.json());
  }
}
