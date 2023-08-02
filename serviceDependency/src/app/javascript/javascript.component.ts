import { Component, OnInit } from '@angular/core';
import { EnrollService } from 'src/service/enroll.service';

@Component({
  selector: 'app-javascript',
  templateUrl: './javascript.component.html',
  styleUrls: ['./javascript.component.css'],
  providers:[EnrollService]
})
export class JavascriptComponent implements OnInit {
ngOnInit(): void {
  throw new Error('Method not implemented.');
}
title="javascript";

constructor(private  enrollService : EnrollService)
{

}
//1)without service we can use the button by using method
// onclick()
// {
//   alert("these data have been saved"+this.title+"courses");
// }


// 2)with the help of service we can use the button
onEnroll()
{

// const enrollService=new EnrollService();
this.enrollService.onEnrollClicked(this.title);
}

}
