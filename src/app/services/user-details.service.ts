import { Injectable } from '@angular/core';
import { HttpClient, HttpHandler, HttpHeaders } from '@angular/common/http';
import { Observable, observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserDetailsService {

  constructor(private http: HttpClient) { }

  countriesStates(): Observable<any> {
    return this.http.get('https://countriesnow.space/api/v0.1/countries/states');
  }



  userName = new Subject();

}
