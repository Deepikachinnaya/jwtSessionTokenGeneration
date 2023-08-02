import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }
users=[{subjectname:'javascript',rate:'5000',available:'twobooks',avatar:"assets/javascript.png"},
{subjectname:'phython',rate:'15000',available:'sixbooks',avatar:"assets/python.png"},
{subjectname:'asp.net',rate:'12000',available:'fourbooks',avatar:"assets/asp.net-image.jpg"},
{subjectname:'mysql',rate:'13000',available:'fivebooks',avatar:"assets/mysql.png"},
{subjectname:'angular',rate:'17000',available:'threebooks',avatar:"assets/angulari.png"}]

onShowDetailsClicked=new EventEmitter<{subjectname: string, rate: any, available: any, avatar:string}>
ShowUserDetails(user:{subjectname: string, rate: any, available: any, avatar:string})
{
  this.onShowDetailsClicked.emit(user);
}

}
