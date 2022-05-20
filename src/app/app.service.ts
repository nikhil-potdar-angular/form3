import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  constructor() {}
  public subject = new Subject<any>();
  // public subject1 = new Subject<any>();

  passValue(data: any) {
    //passing the data as the next observable
    this.subject.next(data);
  }

  // passArr(data: any) {
  //   this.subject1.next(data);

  // }
}
