import {Injectable} from '@angular/core';

@Injectable()
export class UserServiceClient {
  url = 'https://cs4550-bk610-node-server.herokuapp.com/api';
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
  };

  currentUser = () => {
    return fetch(this.url + '/user/current', {
      credentials: 'include'
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
}
