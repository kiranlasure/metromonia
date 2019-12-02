import { Component, OnInit } from '@angular/core';
import { PersonService } from '../person.service';

@Component({
  selector: 'app-apicall2',
  templateUrl: './apicall2.component.html',
  styleUrls: ['./apicall2.component.css']
})
export class Apicall2Component implements OnInit {

  public person = [];
  constructor(private _data : PersonService) { }
  nm;
  ngOnInit() {
    this._data.getEmployees()
    .subscribe(data => this.person = data);
  }
  slect(Employee){
    console.log(Employee);
    this.person.forEach(it=>{
      it['selected']=0;
    })
    Employee['selected']=1;
  }

}
//  .subscribe(data => this.person= data.filter(item =>item.age>18));
// suppose we take some data from server or JSON file and if want sort out or filter some data then 
// we use JS Filter/map/reduce concept here.
// second option is to use ngIF and apply condition on that data.