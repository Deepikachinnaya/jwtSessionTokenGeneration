import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EnrollService {

  constructor() { }

  // this is the common service by calling the service class name we can use this method

  // it will reduce the 1000 of code line by using 
  onEnrollClicked(title:string)
  {
    alert("thank u for enrolling to "+title+ "courses");
  }


}
