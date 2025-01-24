import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  http = inject(HttpClient);
  // users = [
  //   { name: 'test', id: '1' },
  //   { name: 'test2', id: '2' }
  // ]

  // getUserInfo() {
  //   return this.users;
  // }

  createUser(body: any) {
    return this.http.patch('/user', body);
  }

  // API Call
  getUser() {
    // const options = { headers: { 'Content-Type': 'application/json' } };
    // const headers = new HttpHeaders(); 
    // const options = { headers };

    return this.http.get(`/user`);
  }

}
