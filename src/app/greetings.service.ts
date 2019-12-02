import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GreetingsService {

  constructor() { }
  greeting()
  {
    alert("Hi User How are you ");
  }
}
