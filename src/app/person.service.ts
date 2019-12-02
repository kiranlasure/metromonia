import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Mperson } from './person';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  private _url = './assets/Data/person.json';

  constructor(private http: HttpClient) { }

  //  here we cast an observable into an employee Array
  getEmployees(): Observable<Mperson[]>
  {
    return this.http.get<Mperson[]>(this._url);
    //  In future if we do have working web server we can just replace URL to point that web server
    //  The Application work still as expected.
  }
}
