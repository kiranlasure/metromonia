import { Component, OnInit } from '@angular/core';
import { DateServiceService } from '../date-service.service';
import { GreetingsService } from '../greetings.service';


@Component({
  selector: 'app-calculator',

  // This is selector of this component we can use this at a time of naviation
  templateUrl: './calculator.component.html',
  // This is the path of the template/ name of the template file. we can modify this to change the view.
  styleUrls: ['./calculator.component.css']

  // This is the cSS of calculator component.
})
export class CalculatorComponent implements OnInit {

  // This are the properties of Angular Framework. 
  num1: number;
  num2: number;
  result: number;
  num3: number;
  num4: number;
  Result1:number;
  todayDate;
  Greeti;
  // This method is get called when you click on button
  add()
  {
      this.result = this.num1 + this.num2;
  }
  sub()
  {
    this.Result1 = this.num3 -this.num4;
  }
  // greeting()
  // {
  //   alert("Hey You Click me");
  // }


  constructor(private dateService: DateServiceService, private greet: GreetingsService) { }


  ngOnInit() {
    this.todayDate  = this.dateService.showDate();

    this.Greeti  = this.greet.greeting();
  }

}
