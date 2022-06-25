import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private base_url = "http://127.0.0.1:3000";
  constructor(private http: HttpClient) { }

  async login(username: String, password: String){
    let response: any = await this.http.post(this.base_url + '/signin', {username: username, password: password}).toPromise();
    return response;
  }


}