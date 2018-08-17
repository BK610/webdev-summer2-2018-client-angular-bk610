import {Injectable} from '@angular/core';

@Injectable()
export class UserServiceClient {
  url = 'https://cs4550-bk610-node-server.herokuapp.com/api';
  login = (user) => {
    fetch(this.url + '/login', {
      method: 'post',
      credentials: 'include',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(user)
    })
      .then(response => response.status);
  }

  currentUser = () => {
    fetch(this.url + '/user/current', {
      credentials: 'include'
    }).then(response => response.json());
  }
  register = (user) => {
    fetch(this.url + '/user/register', {
      method: 'post',
      credentials: 'include',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(user)
    })
      .then(response => response.json());
    return response;
  }
}
