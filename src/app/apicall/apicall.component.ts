import { Component, OnInit } from '@angular/core';
import { PersonService } from 'src/app/person.service';

@Component({
  selector: 'app-apicall',
  templateUrl: './apicall.component.html',
  styleUrls: ['./apicall.component.css']
})
export class ApicallComponent implements OnInit {

  public person = [];
  constructor(private _data: PersonService) { }

  ngOnInit() {
    this._data.getEmployees()
    //  First Argument to the subscribe method is path Arro that data rec. from obersvable 
    //  assign to this local person property
    .subscribe(data => this.person= data);

    // LHs is argument of function n RHS is body of Function

    //  We are assigning employees data to person property


    //  Suppose any component wants a employee Data Then in that component we perofrom above logic.
    //  subscribe that method n call the data as you want. 
  }

}
