import { Injectable } from '@angular/core';



//  @injectable tells angular that this service also have some injector in it.
@Injectable({
  providedIn: 'root'
})
export class DateServiceService {


  constructor() { }

  showDate(){
    let CurrentDate = new Date();
    return CurrentDate;
  }

}



// Service : In Angular Service is a class which is used to write your business.
//  eg. 1 If you want to show date in 2 to 3 component then insted of writing that logic in 
// Every Component you create Service n call it in compoenent as you wish.

//  Eg.2 Suppose you have to show some employee Data In Many component then we create
//  a service n display that using service.

