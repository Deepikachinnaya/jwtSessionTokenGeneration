import { Component, OnInit } from '@angular/core';
import { EnrollService } from 'src/service/enroll.service';

@Component({
  selector: 'app-angular',
  templateUrl: './angular.component.html',
  styleUrls: ['./angular.component.css'],
  providers:[EnrollService]
  
})
export class AngularComponent implements OnInit{
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  title="angular";
  constructor(private  enrollService : EnrollService)
{

}
  
//1)without service we can use the button by using method
  onclick()
  {
    alert("these data have been saved in angular"+this.title+"courses");
  }

  //  2)with the help of service we can use the button
  onEnroll()
  {
  this.enrollService.onEnrollClicked(this.title);
 }}
