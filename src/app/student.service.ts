import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'; // used to fetch data from server.
import { Observable } from 'rxjs';
import { Mstudent } from './student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  private _url = './assets/Data/student.json';

  constructor(private http: HttpClient) { }

  getStudent(): Observable<Mstudent[]>
  {
        return this.http.get<Mstudent[]>(this._url);
  }
}
