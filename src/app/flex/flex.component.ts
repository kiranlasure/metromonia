import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-flex',
  templateUrl: './flex.component.html',
  styleUrls: ['./flex.component.css']
})
export class FlexComponent implements OnInit {

  public student  = [];
  constructor(private _sdata : StudentService) { }

  ngOnInit() {
    this._sdata.getStudent()
    .subscribe(data=> this.student = data);
  }

}
