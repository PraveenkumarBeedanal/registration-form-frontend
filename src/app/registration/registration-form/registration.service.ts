import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Registration} from './registration';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  url = environment.baseUrl;

    httpHeaders = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    })
  };


  constructor(private httpClient: HttpClient) { }

   createRegistration(registration: Registration): Observable<Registration> {
    return this.httpClient.post<Registration>( this.url + '/registrations', registration, this.httpHeaders);
  }


}
