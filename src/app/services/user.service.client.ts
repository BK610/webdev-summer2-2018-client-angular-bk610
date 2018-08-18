import {Injectable} from '@angular/core';

@Injectable()
export class UserServiceClient {
  url = 'https://cs4550-bk610-node-server.herokuapp.com/api';
  // url = 'http://localhost:8080/api';
  login = (user) => {
    return fetch(this.url + '/login', {
      method: 'post',
      credentials: 'include',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(user)
    })
      .then(response => response.status);
  }
  logout = () => {
    return fetch(this.url + '/logout', {
      method: 'post',
      credentials: 'include',
      headers: {
        'content-type': 'application/json'
      }
    })
      .then(response => response.status);
  }
  currentUser = () => {
    return fetch(this.url + '/current', {
      credentials: 'include',
      headers: {
        'content-type': 'application/json'
      }
    }).then(response => response.json());
  }
  register = (user) => {
    return fetch(this.url + '/register', {
      method: 'post',
      credentials: 'include',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(user)
    })
      .then(response => response.status);
  }
  updateUser = (user) => {
    return fetch(this.url + '/profile', {
      method: 'put',
      credentials: 'include',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(user)
    })
      .then(response => response.json());
  }
  delete = () => {
    return fetch(this.url + '/profile', {
      method: 'delete',
      credentials: 'include',
      headers: {
        'content-type': 'application/json'
      }
    })
      .then(response => response.json());
  }


}
