import { Injectable } from '@angular/core';
import { HttpClient, HttpHandler, HttpHeaders } from '@angular/common/http';
import { Observable, observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserDetailsService {

  constructor(private http: HttpClient) { }

  states(): Observable<any> {
    var heeaders = new HttpHeaders();
    heeaders.append("X-CSCAPI-KEY", "API_KEY");
    // var requestOptions = {
    //   headers: headers
    // };
    var headers = new Headers();
headers.append("X-CSCAPI-KEY", "API_KEY");

var requestOptions = {
 method: 'GET',
 headers: headers,
 redirect: 'follow'
};

    return this.http.get('https://api.printful.com/countries',);
  }
}
