import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import config from '../../../config.json';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private base_url = "http://" + config.api_address + ':' + config.api_port;
  constructor(private http: HttpClient) { }

  async login(username: String, password: String){
    let response: any = await this.http.post(this.base_url + '/signin', {username: username, password: password}).toPromise();
    return response;
  }


}